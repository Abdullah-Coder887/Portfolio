/**
 * ABDULLAH BIN TABASSAM — CONTACT FORM & EMAILJS INTEGRATION
 * Real EmailJS API Integration with Exact Template Variables: {{name}}, {{email}}, {{service}}, {{message}}
 */

let lastSubmissionTime = 0;
const SUBMISSION_COOLDOWN_MS = 10000; // 10 seconds cooldown

document.addEventListener("DOMContentLoaded", () => {
    initEmailJS();
    initContactForm();
});

// 1. Initialize EmailJS SDK
function initEmailJS() {
    if (typeof emailjs !== "undefined" && typeof CONFIG !== "undefined" && CONFIG.EMAILJS && CONFIG.EMAILJS.PUBLIC_KEY) {
        try {
            emailjs.init(CONFIG.EMAILJS.PUBLIC_KEY);
        } catch (e) {
            console.error("EmailJS initialization error:", e);
        }
    }
}

// 2. Setup Contact Form Validation & Real EmailJS Submission
function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Honeypot Spam Check
        const honeypot = document.getElementById("contactHoneypot");
        if (honeypot && honeypot.value.trim() !== "") {
            console.warn("Spam submission blocked via honeypot.");
            showToast("Submission blocked.", "danger");
            return;
        }

        // Cooldown Check
        const now = Date.now();
        if (now - lastSubmissionTime < SUBMISSION_COOLDOWN_MS) {
            showToast("Please wait a few seconds before sending another message.", "warning");
            return;
        }

        // Field Values
        const nameInput = document.getElementById("contactName");
        const emailInput = document.getElementById("contactEmail");
        const serviceInput = document.getElementById("contactService");
        const messageInput = document.getElementById("contactMessage");
        const submitBtn = document.getElementById("contactSubmitBtn");

        const name = nameInput ? nameInput.value.trim() : "";
        const email = emailInput ? emailInput.value.trim() : "";
        const service = serviceInput ? serviceInput.value : "";
        const message = messageInput ? messageInput.value.trim() : "";

        // 3. Validation Rules
        if (!name || !email || !service || !message) {
            showToast("Please fill in all required fields.", "warning");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showToast("Please enter a valid email address.", "warning");
            return;
        }

        // 4. Loading State
        submitBtn.disabled = true;
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<span class="spinner-border spinner-border-sm me-2"></span> Sending...`;

        try {
            const serviceId = CONFIG.EMAILJS.SERVICE_ID;
            const templateId = CONFIG.EMAILJS.TEMPLATE_ID;

            // Template parameters matching {{name}}, {{email}}, {{service}}, {{message}}
            const templateParams = {
                name: name,
                email: email,
                service: service,
                message: message
            };

            console.log("Sending EmailJS Request with params:", templateParams);

            // Execute Real EmailJS API call
            const response = await emailjs.send(serviceId, templateId, templateParams);
            console.log("EmailJS Success Response:", response);

            // Show exact required success message ONLY after confirmed response
            showToast("Message sent successfully! I'll get back to you soon.", "success");
            
            // Reset form ONLY on successful response
            form.reset();
            lastSubmissionTime = Date.now();

        } catch (error) {
            console.error("EmailJS Submission Error Details:", error);
            
            const errorText = error ? (error.text || error.message || JSON.stringify(error)) : "";
            
            if (errorText.includes("insufficient authentication scopes") || (error && error.status === 412)) {
                showToast("EmailJS Gmail Auth Error (412): Please reconnect your Gmail Service in EmailJS Dashboard and check 'Send email on your behalf' permission.", "danger");
            } else {
                showToast(`Failed to send message: ${errorText}. Please try again or reach out directly via WhatsApp.`, "danger");
            }
            
            // Do NOT reset form on error so user keeps their data
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    });
}

// 5. Helper Function: Show Toast Notification
function showToast(message, type = "info") {
    let container = document.getElementById("toastContainer");
    if (!container) {
        container = document.createElement("div");
        container.id = "toastContainer";
        container.className = "toast-container-custom";
        document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast-custom border-${type}`;

    let iconClass = "fa-circle-info text-info";
    if (type === "success") iconClass = "fa-circle-check text-success";
    if (type === "warning") iconClass = "fa-triangle-exclamation text-warning";
    if (type === "danger") iconClass = "fa-circle-xmark text-danger";

    toast.innerHTML = `
        <i class="fa-solid ${iconClass} fs-5"></i>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 400);
    }, 4500);
}

// 6. WhatsApp Message Helper
function getWhatsAppUrl(customMessage) {
    const baseNum = CONFIG.PERSONAL.whatsappFormatted;
    const defaultMsg = "Hello Abdullah, I found your portfolio and would like to discuss a project.";
    const text = encodeURIComponent(customMessage || defaultMsg);
    return `https://wa.me/${baseNum}?text=${text}`;
}
