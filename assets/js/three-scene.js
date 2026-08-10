/**
 * ABDULLAH BIN TABASSAM — THREE.JS INTERACTIVE 3D HERO SYSTEM
 * High-performance futuristic WebGL canvas with connected nodes and floating geometry
 * Optimized with IntersectionObserver Viewport Lock & Mobile Pixel Ratio Throttle
 */

class Hero3DScene {
    constructor() {
        this.container = document.getElementById("hero-3d-container");
        if (!this.container) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.coreMesh = null;
        this.outerRing = null;
        this.particlesMesh = null;
        this.nodesGroup = null;

        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;

        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;

        this.isRendering = false;
        this.animationFrameId = null;

        this.init();
    }

    init() {
        if (typeof THREE === "undefined") {
            console.warn("Three.js library is not loaded.");
            return;
        }

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) {
            this.container.innerHTML = `<div class="d-flex align-items-center justify-content-center h-100 text-secondary"><i class="fa-solid fa-cube display-1 text-info opacity-50"></i></div>`;
            return;
        }

        const width = this.container.clientWidth;
        const height = this.container.clientHeight;
        const isMobile = window.innerWidth < 768;

        // 1. Create Scene & Camera
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        this.camera.position.z = 240;

        // 2. Create WebGL Renderer with Mobile Throttle
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: !isMobile,
            powerPreference: "high-performance"
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
        this.container.appendChild(this.renderer.domElement);

        // 3. Create Geometric Objects
        this.createCoreSphere(isMobile);
        this.createOuterRings();
        this.createParticleCloud(isMobile);
        this.createNetworkNodes(isMobile);

        // 4. Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        this.scene.add(ambientLight);

        const pointLight1 = new THREE.PointLight(0x00E5FF, 2, 300);
        pointLight1.position.set(100, 100, 100);
        this.scene.add(pointLight1);

        const pointLight2 = new THREE.PointLight(0x7C3AED, 2, 300);
        pointLight2.position.set(-100, -100, -100);
        this.scene.add(pointLight2);

        // 5. Event Listeners & Observer Lock
        window.addEventListener("resize", this.onWindowResize.bind(this));
        document.addEventListener("mousemove", this.onMouseMove.bind(this));

        this.setupViewportObserver();
    }

    setupViewportObserver() {
        const heroSection = document.getElementById("home");
        if (!heroSection) {
            this.isRendering = true;
            this.animate();
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!this.isRendering) {
                        this.isRendering = true;
                        this.animate();
                    }
                } else {
                    this.isRendering = false;
                    if (this.animationFrameId) {
                        cancelAnimationFrame(this.animationFrameId);
                    }
                }
            });
        }, { threshold: 0.05 });

        observer.observe(heroSection);
    }

    createCoreSphere(isMobile) {
        const detail = isMobile ? 1 : 2;
        const geometry = new THREE.IcosahedronGeometry(45, detail);
        const material = new THREE.MeshStandardMaterial({
            color: 0x00E5FF,
            wireframe: true,
            transparent: true,
            opacity: 0.75,
            roughness: 0.2,
            metalness: 0.8
        });

        this.coreMesh = new THREE.Mesh(geometry, material);
        this.scene.add(this.coreMesh);
    }

    createOuterRings() {
        const ringGeo = new THREE.TorusGeometry(70, 0.8, 12, 60);
        const ringMat = new THREE.MeshBasicMaterial({
            color: 0x7C3AED,
            transparent: true,
            opacity: 0.65,
            wireframe: true
        });

        this.outerRing = new THREE.Mesh(ringGeo, ringMat);
        this.outerRing.rotation.x = Math.PI / 3;
        this.scene.add(this.outerRing);
    }

    createParticleCloud(isMobile) {
        const particleCount = isMobile ? 100 : 250;

        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        const color1 = new THREE.Color(0x00E5FF);
        const color2 = new THREE.Color(0x7C3AED);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 220;
            positions[i + 1] = (Math.random() - 0.5) * 220;
            positions[i + 2] = (Math.random() - 0.5) * 220;

            const mixedColor = Math.random() > 0.5 ? color1 : color2;
            colors[i] = mixedColor.r;
            colors[i + 1] = mixedColor.g;
            colors[i + 2] = mixedColor.b;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: isMobile ? 2.0 : 2.2,
            vertexColors: true,
            transparent: true,
            opacity: 0.8
        });

        this.particlesMesh = new THREE.Points(geometry, material);
        this.scene.add(this.particlesMesh);
    }

    createNetworkNodes(isMobile) {
        const nodeGeo = new THREE.OctahedronGeometry(5, 0);
        const nodeMat = new THREE.MeshStandardMaterial({
            color: 0x00E5FF,
            emissive: 0x00E5FF,
            emissiveIntensity: 0.5,
            roughness: 0.1
        });

        this.nodesGroup = new THREE.Group();
        const nodeCount = isMobile ? 4 : 6;
        for (let i = 0; i < nodeCount; i++) {
            const mesh = new THREE.Mesh(nodeGeo, nodeMat);
            const angle = (i / nodeCount) * Math.PI * 2;
            mesh.position.x = Math.cos(angle) * 85;
            mesh.position.y = Math.sin(angle) * 85;
            mesh.position.z = (Math.random() - 0.5) * 40;
            this.nodesGroup.add(mesh);
        }
        this.scene.add(this.nodesGroup);
    }

    onMouseMove(event) {
        this.targetMouseX = (event.clientX - this.windowHalfX) * 0.0005;
        this.targetMouseY = (event.clientY - this.windowHalfY) * 0.0005;
    }

    onWindowResize() {
        if (!this.container || !this.renderer || !this.camera) return;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
        this.windowHalfX = window.innerWidth / 2;
        this.windowHalfY = window.innerHeight / 2;
    }

    animate() {
        if (!this.isRendering) return;

        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));

        // Smooth Mouse Parallax
        this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

        // Rotate Objects
        if (this.coreMesh) {
            this.coreMesh.rotation.x += 0.003 + this.mouseY * 0.05;
            this.coreMesh.rotation.y += 0.005 + this.mouseX * 0.05;
        }

        if (this.outerRing) {
            this.outerRing.rotation.z -= 0.004;
            this.outerRing.rotation.y += 0.002;
        }

        if (this.particlesMesh) {
            this.particlesMesh.rotation.y -= 0.001;
        }

        if (this.nodesGroup) {
            this.nodesGroup.rotation.z += 0.003;
        }

        this.renderer.render(this.scene, this.camera);
    }
}

// Instantiate on Page Load
document.addEventListener("DOMContentLoaded", () => {
    if (typeof CONFIG !== "undefined" && CONFIG.SETTINGS.enable3DHero) {
        new Hero3DScene();
    }
});
