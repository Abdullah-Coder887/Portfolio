/**
 * Global Configuration for Abdullah Bin Tabassam's Portfolio
 * =========================================================
 * Modify personal info, student details, EmailJS keys, and social links here.
 */

const CONFIG = {
    // Personal Identity & Branding
    PERSONAL: {
        name: "Abdullah Bin Tabassam",
        title: "BS Artificial Intelligence Student | Full Stack Developer | Digital Creative",
        badge: "BS AI STUDENT • FULL STACK DEVELOPER • DIGITAL CREATIVE",
        headline: "Building Intelligent & Creative Digital Experiences.",
        subtext: "BS Artificial Intelligence student and Full Stack Developer passionate about building modern web applications, intelligent digital solutions, creative designs and AI-powered content.",
        profileImage: "assets/images/profile/abdullah-profile.jpeg",

        // Education Details (Easily editable)
        education: {
            degree: "BS Artificial Intelligence",
            status: "Currently Studying",
            semester: "4th Semester", // Change semester here as you progress
            intermediate: "Intermediate in ICS",
            intermediateStatus: "Completed"
        },

        email: "abdullahbintabassam@gmail.com",
        whatsapp: "+923100551936",
        whatsappFormatted: "923100551936", // Numbers only for wa.me link
        location: "Pakistan",
        status: "BS AI Student • Open for Projects & Collaborations"
    },

    // EmailJS Configuration
    // Replace these placeholders with your actual keys from https://www.emailjs.com/
    EMAILJS: {
        PUBLIC_KEY: "HP05HA8VI_8AnyJ6f",
        SERVICE_ID: "service_misz1aq",
        TEMPLATE_ID: "template_cnry1m7"
    },

    // Social Media Links (Replace placeholders as needed)
    SOCIAL: {
        github: "https://github.com/abdullahbintabassam",
        linkedin: "https://linkedin.com/in/abdullahbintabassam",
        whatsapp: "https://wa.me/923100551936",
        email: "mailto:abdullahbintabassam@gmail.com"
    },

    // Site Features & 3D Settings
    SETTINGS: {
        enableCustomCursor: true,
        enable3DHero: true,
        enable3DSkills: true,
        enableCardTilt: true,
        enableParallax: true,
        reducedMotionOverride: false
    }
};

// Freeze config object to prevent accidental modifications
Object.freeze(CONFIG);
