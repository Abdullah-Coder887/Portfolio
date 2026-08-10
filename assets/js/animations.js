/**
 * ABDULLAH BIN TABASSAM — ANIMATION ENGINE & UI INTERACTIVITY
 * Scroll reveals, 3D tilt, counter animations, and progress bar
 */

document.addEventListener("DOMContentLoaded", () => {
    initScrollProgressBar();
    initScrollRevealObserver();
    initGlassCard3DTilt();
    initCounterAnimations();
});

// 1. Top Scroll Progress Bar
function initScrollProgressBar() {
    const progressBar = document.getElementById("scroll-progress");
    if (!progressBar) return;

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const progress = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}

// 2. Intersection Observer for Scroll Reveals
function initScrollRevealObserver() {
    const revealElements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                obs.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => observer.observe(el));
}

// 3. Subtle 3D Card Tilt Effect on Hover
function initGlassCard3DTilt() {
    const cards = document.querySelectorAll(".glass-card, .service-card, .stat-card, .project-card");
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (isTouchDevice) return;

    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -5; // Max -5 to 5 deg
            const rotateY = ((x - centerX) / centerX) * 5;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)";
        });
    });
}

// 4. Counter Animation for Stat Metrics
function initCounterAnimations() {
    const counters = document.querySelectorAll(".counter-val");
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.getAttribute("data-target"), 10);
                if (isNaN(target)) return;

                let count = 0;
                const speed = Math.ceil(target / 40);
                const updateCounter = () => {
                    count += speed;
                    if (count >= target) {
                        entry.target.textContent = target + "+";
                    } else {
                        entry.target.textContent = count + "+";
                        setTimeout(updateCounter, 30);
                    }
                };
                updateCounter();
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}
