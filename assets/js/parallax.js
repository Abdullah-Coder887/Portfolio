/**
 * ABDULLAH BIN TABASSAM — MOUSE PARALLAX ENGINE
 * Multi-layer mouse parallax for profile frames, background Orbs, and floating elements
 */

class MouseParallaxEngine {
    constructor() {
        this.layers = [];
        this.mouseX = 0;
        this.mouseY = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;

        this.init();
    }

    init() {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouch) return;

        if (typeof CONFIG !== "undefined" && !CONFIG.SETTINGS.enableParallax) return;

        // Select elements tagged for parallax
        const layer1Els = document.querySelectorAll(".parallax-subtle");
        const layer2Els = document.querySelectorAll(".parallax-medium");
        const layer3Els = document.querySelectorAll(".parallax-strong");

        layer1Els.forEach(el => this.layers.push({ element: el, speed: 0.015 }));
        layer2Els.forEach(el => this.layers.push({ element: el, speed: 0.035 }));
        layer3Els.forEach(el => this.layers.push({ element: el, speed: 0.06 }));

        if (this.layers.length === 0) return;

        window.addEventListener("mousemove", (e) => {
            this.targetX = (e.clientX - this.windowHalfX);
            this.targetY = (e.clientY - this.windowHalfY);
        });

        window.addEventListener("resize", () => {
            this.windowHalfX = window.innerWidth / 2;
            this.windowHalfY = window.innerHeight / 2;
        });

        this.animate();
    }

    animate() {
        this.mouseX += (this.targetX - this.mouseX) * 0.05;
        this.mouseY += (this.targetY - this.mouseY) * 0.05;

        this.layers.forEach(item => {
            const moveX = this.mouseX * item.speed;
            const moveY = this.mouseY * item.speed;
            item.element.style.transform = `translate3d(${moveX.toFixed(2)}px, ${moveY.toFixed(2)}px, 0px)`;
        });

        requestAnimationFrame(this.animate.bind(this));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new MouseParallaxEngine();
});
