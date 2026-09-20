/**
 * ABDULLAH BIN TABASSAM — MAIN CORE SCRIPT
 * Preloader, Navbar Scroll Effects, Active Link Observer, Back-To-Top & Custom Cursor
 */

document.addEventListener("DOMContentLoaded", () => {
    bindConfigData();
    initPreloader();
    initNavbarEffects();
    initActiveNavHighlight();
    initCustomCursor();
    initWhatsAppLinks();
    initMobileNavClose();
    initBackToTopButton();
});

// Bind Config Data to DOM
function bindConfigData() {
    if (typeof CONFIG === "undefined") return;

    const eduSemesterEl = document.getElementById("eduSemester");
    if (eduSemesterEl && CONFIG.PERSONAL.education && CONFIG.PERSONAL.education.semester) {
        eduSemesterEl.textContent = CONFIG.PERSONAL.education.semester;
    }
}

// 1. Fast Preloader Handler (Instant dismissal on load, no blocking delay)
function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    const dismissPreloader = () => {
        if (preloader.classList.contains("fade-out")) return;
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
        }, 300);
    };

    if (document.readyState === "complete") {
        setTimeout(dismissPreloader, 100);
    } else {
        window.addEventListener("load", () => {
            setTimeout(dismissPreloader, 150);
        });
        // Safeguard timeout (max 600ms) so slow network doesn't trap the user
        setTimeout(dismissPreloader, 600);
    }
}

// 2. Navbar Scroll Styling
function initNavbarEffects() {
    const navbar = document.querySelector(".navbar-custom");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// 3. Active Nav Link Scroll Highlighting
function initActiveNavHighlight() {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${currentSectionId}`) {
                link.classList.add("active");
            }
        });
    });
}

// 4. Custom Glowing Cursor (Desktop Only)
function initCustomCursor() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch || (typeof CONFIG !== "undefined" && !CONFIG.SETTINGS.enableCustomCursor)) return;

    let dot = document.querySelector(".custom-cursor-dot");
    let ring = document.querySelector(".custom-cursor-ring");

    if (!dot) {
        dot = document.createElement("div");
        dot.className = "custom-cursor-dot";
        document.body.appendChild(dot);
    }

    if (!ring) {
        ring = document.createElement("div");
        ring.className = "custom-cursor-ring";
        document.body.appendChild(ring);
    }

    window.addEventListener("mousemove", (e) => {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
        
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
    });

    // Hover effect on interactive elements
    const interactiveEls = document.querySelectorAll("a, button, input, select, textarea, .glass-card, .filter-btn, .gallery-item, .skill-interactive-card");
    interactiveEls.forEach(el => {
        el.addEventListener("mouseenter", () => document.body.classList.add("cursor-hover"));
        el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-hover"));
    });
}

// 5. WhatsApp Link Dynamic Wiring
function initWhatsAppLinks() {
    const whatsappBtns = document.querySelectorAll(".btn-whatsapp-dynamic");
    whatsappBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const serviceMsg = btn.getAttribute("data-service");
            let msg = "Hello Abdullah, I found your portfolio and would like to discuss a project.";
            if (serviceMsg) {
                msg = `Hello Abdullah, I am interested in ${serviceMsg} services.`;
            }
            window.open(getWhatsAppUrl(msg), "_blank");
        });
    });
}

// 6. Mobile Nav Auto-Close on Item Click
function initMobileNavClose() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarCollapse && navbarCollapse.classList.contains("show")) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });
}

// 7. Back-To-Top Button Controller
function initBackToTopButton() {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (!backToTopBtn) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 350) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
