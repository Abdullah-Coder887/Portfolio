/**
 * ABDULLAH BIN TABASSAM — 3D CARD TILT ENGINE
 * Reusable 3D perspective tilt effect for cards across Hero, Services, Projects, Skills, and Contact
 */

function init3DCardTilt() {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    if (typeof CONFIG !== "undefined" && !CONFIG.SETTINGS.enableCardTilt) return;

    const tiltableCards = document.querySelectorAll(
        ".glass-card, .service-card, .stat-card, .project-card, .video-card, .hero-profile-container, .tilt-card"
    );

    tiltableCards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Maximum rotation around 6 degrees to remain subtle and premium
            const maxTilt = 6;
            const rotateX = ((y - centerY) / centerY) * -maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;

            // Apply 3D transform with depth translation
            card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(12px) translateY(-4px)`;
            
            // Adjust glowing radial accent tracking cursor
            const percentX = (x / rect.width) * 100;
            const percentY = (y / rect.height) * 100;
            card.style.backgroundImage = `radial-gradient(circle at ${percentX}% ${percentY}%, rgba(0, 229, 255, 0.08), rgba(255, 255, 255, 0.035) 70%)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) translateY(0px)";
            card.style.backgroundImage = "";
        });
    });
}

document.addEventListener("DOMContentLoaded", init3DCardTilt);
