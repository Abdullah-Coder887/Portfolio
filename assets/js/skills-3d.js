/**
 * ABDULLAH BIN TABASSAM — 3D SKILLS UNIVERSE & ANIMATED SKILL PROGRESS LIST
 * Master Skills Data, 3-Orbit Three.js WebGL Engine, 5 Category Tabs, Search & Animated Progress List
 */

const SKILLS_DATA_SET = [
    // --- DEVELOPMENT ---
    {
        id: "html5",
        name: "HTML5",
        logo: "assets/icons/skills/html5.svg",
        category: "dev",
        subcategory: "Frontend",
        orbit: "inner",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Semantic web structure, accessibility, and modern HTML5 document elements.",
        usedFor: "Frontend architecture and responsive web layouts.",
        links: ["css3", "javascript", "bootstrap"]
    },
    {
        id: "css3",
        name: "CSS3",
        logo: "assets/icons/skills/css3.svg",
        category: "dev",
        subcategory: "Frontend",
        orbit: "inner",
        percentage: 88,
        levelLabel: "Strong",
        desc: "Modern CSS Grid, Flexbox layouts, glassmorphic UI, animations, and custom styling.",
        usedFor: "Futuristic visual styling and responsive UI design system.",
        links: ["html5", "bootstrap", "ui-design"]
    },
    {
        id: "javascript",
        name: "JavaScript",
        logo: "assets/icons/skills/javascript.svg",
        category: "dev",
        subcategory: "Frontend",
        orbit: "inner",
        percentage: 82,
        levelLabel: "Proficient",
        desc: "Dynamic DOM manipulation, ES6+ features, asynchronous fetch, and interactive UI logic.",
        usedFor: "Interactive client-side web components and application logic.",
        links: ["html5", "css3", "rest-api"]
    },
    {
        id: "bootstrap",
        name: "Bootstrap 5",
        logo: "assets/icons/skills/bootstrap.svg",
        category: "dev",
        subcategory: "Frontend",
        orbit: "inner",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Responsive grid systems, mobile navigation components, and utility classes.",
        usedFor: "Rapid responsive interface prototyping and layout structuring.",
        links: ["html5", "css3", "responsive-design"]
    },
    {
        id: "php",
        name: "PHP",
        logo: "assets/icons/skills/php.svg",
        category: "dev",
        subcategory: "Backend",
        orbit: "inner",
        percentage: 80,
        levelLabel: "Proficient",
        desc: "Server-side scripting, OOP architecture, database integration, and sessions.",
        usedFor: "Backend server logic and custom web applications.",
        links: ["laravel", "mysql"]
    },
    {
        id: "laravel",
        name: "Laravel",
        logo: "assets/icons/skills/laravel.svg",
        category: "dev",
        subcategory: "Backend",
        orbit: "inner",
        percentage: 85,
        levelLabel: "Strong",
        desc: "Elegant MVC framework, routing, Eloquent ORM, middleware, and Blade templating.",
        usedFor: "Commercial business systems, inventory portals, and web APIs.",
        links: ["php", "mysql", "rest-api"]
    },
    {
        id: "mysql",
        name: "MySQL",
        logo: "assets/icons/skills/mysql.svg",
        category: "dev",
        subcategory: "Database",
        orbit: "inner",
        percentage: 82,
        levelLabel: "Proficient",
        desc: "Relational database design, SQL queries, relational indexing, and data management.",
        usedFor: "Persistent data storage for web portals and management applications.",
        links: ["php", "laravel", "database-mgmt"]
    },
    {
        id: "git",
        name: "Git",
        logo: "assets/icons/skills/git.svg",
        category: "dev",
        subcategory: "Tools",
        orbit: "middle",
        percentage: 75,
        levelLabel: "Intermediate",
        desc: "Distributed version control, branch management, commit history, and code tracking.",
        usedFor: "Source code versioning and development workflows.",
        links: ["github", "vscode"]
    },
    {
        id: "github",
        name: "GitHub",
        logo: "assets/icons/skills/github.svg",
        category: "dev",
        subcategory: "Tools",
        orbit: "middle",
        percentage: 78,
        levelLabel: "Intermediate",
        desc: "Cloud repository hosting, open-source collaboration, and project deployment.",
        usedFor: "Hosting code repositories and portfolio project showcases.",
        links: ["git", "laravel"]
    },
    {
        id: "rest-api",
        name: "REST APIs",
        logo: "assets/icons/skills/vscode.svg",
        category: "dev",
        subcategory: "Backend",
        orbit: "middle",
        percentage: 75,
        levelLabel: "Intermediate",
        desc: "Designing and consuming JSON web services and asynchronous HTTP endpoints.",
        usedFor: "Connecting frontend interfaces to database backend services.",
        links: ["javascript", "laravel", "php"]
    },
    {
        id: "responsive-design",
        name: "Responsive Design",
        logo: "assets/icons/skills/css3.svg",
        category: "dev",
        subcategory: "Frontend",
        orbit: "middle",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Designing adaptable multi-breakpoint layouts for mobile, tablet, and desktop screens.",
        usedFor: "Flawless cross-device display and user experience.",
        links: ["bootstrap", "css3"]
    },
    {
        id: "ui-implementation",
        name: "UI Implementation",
        logo: "assets/icons/skills/html5.svg",
        category: "dev",
        subcategory: "Frontend",
        orbit: "middle",
        percentage: 85,
        levelLabel: "Strong",
        desc: "Converting visual UI designs into pixel-perfect responsive HTML/CSS web code.",
        usedFor: "High-fidelity frontend layout implementation.",
        links: ["html5", "css3", "bootstrap"]
    },

    // --- AI & EMERGING TECH ---
    {
        id: "ai-core",
        name: "Artificial Intelligence",
        logo: "assets/icons/skills/ai.svg",
        category: "ai",
        subcategory: "Artificial Intelligence",
        orbit: "outer",
        percentage: 70,
        levelLabel: "Learning",
        desc: "Academic study of AI concepts, neural networks, logic systems, and intelligent agent design.",
        usedFor: "BS Artificial Intelligence coursework and intelligent application experimentation.",
        links: ["prompt-eng", "ai-tools", "ai-content"]
    },
    {
        id: "prompt-eng",
        name: "Prompt Engineering",
        logo: "assets/icons/skills/ai.svg",
        category: "ai",
        subcategory: "Generative AI",
        orbit: "outer",
        percentage: 82,
        levelLabel: "Building With",
        desc: "Structuring precise natural language prompts for LLMs and generative AI tools.",
        usedFor: "Optimizing AI code assistance, script writing, and creative content generation.",
        links: ["ai-core", "ai-image", "ai-video"]
    },
    {
        id: "ai-image",
        name: "AI Image Generation",
        logo: "assets/icons/skills/photoshop.svg",
        category: "ai",
        subcategory: "Generative AI",
        orbit: "outer",
        percentage: 85,
        levelLabel: "Building With",
        desc: "Generating visual graphics and artistic concepts using AI image generation models.",
        usedFor: "Creative asset design, visual prototyping, and graphic media.",
        links: ["prompt-eng", "graphic-design"]
    },
    {
        id: "ai-video",
        name: "AI Video Generation",
        logo: "assets/icons/skills/ai.svg",
        category: "ai",
        subcategory: "Generative AI",
        orbit: "outer",
        percentage: 82,
        levelLabel: "Building With",
        desc: "AI-assisted video generation, avatars, motion synthesis, and promotional video reels.",
        usedFor: "Promotional, educational, and social media video production.",
        links: ["prompt-eng", "ai-content"]
    },
    {
        id: "ai-content",
        name: "AI Content Creation",
        logo: "assets/icons/skills/ai.svg",
        category: "ai",
        subcategory: "Generative AI",
        orbit: "outer",
        percentage: 85,
        levelLabel: "Building With",
        desc: "Synthesizing text, promotional copy, and multimedia content using AI workflows.",
        usedFor: "Digital marketing copy, explainer scripts, and creative media.",
        links: ["ai-core", "ai-video"]
    },
    {
        id: "machine-learning",
        name: "Machine Learning",
        logo: "assets/icons/skills/ai.svg",
        category: "ai",
        subcategory: "Learning / Exploration",
        orbit: "outer",
        percentage: 60,
        levelLabel: "Exploring",
        desc: "Fundamental supervised & unsupervised learning models and data preprocessing.",
        usedFor: "Academic AI algorithms and predictive modeling study.",
        links: ["ai-core"]
    },
    {
        id: "ai-app-dev",
        name: "AI App Development",
        logo: "assets/icons/skills/ai.svg",
        category: "ai",
        subcategory: "Learning / Exploration",
        orbit: "outer",
        percentage: 65,
        levelLabel: "Learning",
        desc: "Integrating intelligent API tools and AI models into web applications.",
        usedFor: "Smart web tools and automated assistant integration.",
        links: ["ai-core", "javascript"]
    },

    // --- DESIGN & CREATIVE ---
    {
        id: "graphic-design",
        name: "Graphic Design",
        logo: "assets/icons/skills/photoshop.svg",
        category: "design",
        subcategory: "Graphic Design",
        orbit: "outer",
        percentage: 82,
        levelLabel: "Proficient",
        desc: "Creating visual brand assets, social media posts, certificates, posters, and banners.",
        usedFor: "Digital marketing collateral and visual communications.",
        links: ["canva", "photoshop", "branding"]
    },
    {
        id: "ui-design",
        name: "UI Design",
        logo: "assets/icons/skills/html5.svg",
        category: "design",
        subcategory: "UI / Web Design",
        orbit: "middle",
        percentage: 85,
        levelLabel: "Strong",
        desc: "Crafting modern user interfaces, dashboard wireframes, and landing page layouts.",
        usedFor: "User-focused visual interface layouts and web prototypes.",
        links: ["responsive-design", "css3"]
    },
    {
        id: "canva",
        name: "Canva Pro",
        logo: "assets/icons/skills/canva.svg",
        category: "design",
        subcategory: "Design Tools",
        orbit: "outer",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Rapid social media post creation, brand templates, and presentation graphics.",
        usedFor: "Quick digital graphic production and promotional visuals.",
        links: ["graphic-design", "branding"]
    },
    {
        id: "photoshop",
        name: "Adobe Photoshop",
        logo: "assets/icons/skills/photoshop.svg",
        category: "design",
        subcategory: "Design Tools",
        orbit: "outer",
        percentage: 72,
        levelLabel: "Intermediate",
        desc: "Image editing, photo manipulation, background removal, and graphic asset design.",
        usedFor: "High-resolution graphic creation and photo retouching.",
        links: ["graphic-design", "canva"]
    },
    {
        id: "branding",
        name: "Branding",
        logo: "assets/icons/skills/canva.svg",
        category: "design",
        subcategory: "Graphic Design",
        orbit: "outer",
        percentage: 75,
        levelLabel: "Intermediate",
        desc: "Logo design, color schemes, typography, and visual brand identity.",
        usedFor: "Brand presence for personal and commercial projects.",
        links: ["graphic-design", "canva"]
    },
    {
        id: "social-media-design",
        name: "Social Media Design",
        logo: "assets/icons/skills/canva.svg",
        category: "design",
        subcategory: "Graphic Design",
        orbit: "outer",
        percentage: 88,
        levelLabel: "Strong",
        desc: "Eye-catching post designs, stories, cover banners, and promotional templates.",
        usedFor: "Social media engagement campaigns.",
        links: ["graphic-design", "canva"]
    },
    {
        id: "certificate-design",
        name: "Certificate Design",
        logo: "assets/icons/skills/canva.svg",
        category: "design",
        subcategory: "Graphic Design",
        orbit: "outer",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Official appreciation certificates and corporate award document templates.",
        usedFor: "Organization and institutional award programs.",
        links: ["graphic-design"]
    },
    {
        id: "poster-design",
        name: "Poster Design",
        logo: "assets/icons/skills/photoshop.svg",
        category: "design",
        subcategory: "Graphic Design",
        orbit: "outer",
        percentage: 88,
        levelLabel: "Strong",
        desc: "High-resolution event posters, promotional flyers, and digital marketing graphics.",
        usedFor: "Event promotion and print collateral.",
        links: ["graphic-design", "photoshop"]
    },
    {
        id: "video-editing",
        name: "Video Editing",
        logo: "assets/icons/skills/ai.svg",
        category: "design",
        subcategory: "Video / Creative",
        orbit: "outer",
        percentage: 75,
        levelLabel: "Intermediate",
        desc: "Trimming, transitions, audio sync, and video content assembly.",
        usedFor: "Promotional reels and video media content.",
        links: ["ai-video"]
    },

    // --- DATA & PRODUCTIVITY ---
    {
        id: "excel",
        name: "Microsoft Excel",
        logo: "assets/icons/skills/excel.svg",
        category: "data",
        subcategory: "Productivity",
        orbit: "outer",
        percentage: 85,
        levelLabel: "Strong",
        desc: "Spreadsheet management, formulas, data formatting, cleaning, and tracking.",
        usedFor: "Commercial data management, reports, and structured spreadsheets.",
        links: ["data-entry", "data-cleaning"]
    },
    {
        id: "data-entry",
        name: "Data Entry",
        logo: "assets/icons/skills/excel.svg",
        category: "data",
        subcategory: "Data",
        orbit: "outer",
        percentage: 95,
        levelLabel: "Expert",
        desc: "Accurate digital record keeping, data transcription, and database entry.",
        usedFor: "Organizing client databases and business record logs.",
        links: ["excel", "data-cleaning"]
    },
    {
        id: "data-cleaning",
        name: "Data Cleaning",
        logo: "assets/icons/skills/excel.svg",
        category: "data",
        subcategory: "Data",
        orbit: "outer",
        percentage: 85,
        levelLabel: "Strong",
        desc: "Standardizing dataset formats, removing duplicate entries, and data validation.",
        usedFor: "Preparing structured datasets for database import.",
        links: ["excel", "database-mgmt"]
    },
    {
        id: "web-research",
        name: "Web Research",
        logo: "assets/icons/skills/excel.svg",
        category: "data",
        subcategory: "Data",
        orbit: "outer",
        percentage: 85,
        levelLabel: "Strong",
        desc: "Gathering, verifying, and organizing structured information from online sources.",
        usedFor: "Business intelligence and database population.",
        links: ["data-entry"]
    },
    {
        id: "database-mgmt",
        name: "Database Management",
        logo: "assets/icons/skills/mysql.svg",
        category: "data",
        subcategory: "Data",
        orbit: "middle",
        percentage: 80,
        levelLabel: "Proficient",
        desc: "Database record maintenance, backups, and relational integrity.",
        usedFor: "Maintaining application data storage and safety.",
        links: ["mysql", "data-cleaning"]
    },
    {
        id: "document-formatting",
        name: "Document Formatting",
        logo: "assets/icons/skills/excel.svg",
        category: "data",
        subcategory: "Productivity",
        orbit: "outer",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Professional layout design for business reports, spreadsheets, and PDFs.",
        usedFor: "Clean corporate documentation and reports.",
        links: ["excel"]
    },
    {
        id: "pdf-to-excel",
        name: "PDF to Excel",
        logo: "assets/icons/skills/excel.svg",
        category: "data",
        subcategory: "Productivity",
        orbit: "outer",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Extracting tabular data from PDF files and converting into clean Excel sheets.",
        usedFor: "Data conversion and digital archiving.",
        links: ["excel", "data-entry"]
    },

    // --- TOOLS & WORKFLOW ---
    {
        id: "vscode",
        name: "VS Code",
        logo: "assets/icons/skills/vscode.svg",
        category: "tools",
        subcategory: "Development Tools",
        orbit: "middle",
        percentage: 90,
        levelLabel: "Strong",
        desc: "Primary IDE for full-stack code development, extensions, and debugging.",
        usedFor: "Daily code writing, refactoring, and project development.",
        links: ["git", "github"]
    }
];

class Skills3DUniverseEngine {
    constructor() {
        this.container = document.getElementById("skills-3d-canvas-container");
        if (!this.container) return;

        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.coreMesh = null;
        this.logoSprites = [];
        this.activeCategory = "dev";
        this.searchQuery = "";

        this.mouseX = 0;
        this.mouseY = 0;
        this.targetMouseX = 0;
        this.targetMouseY = 0;

        this.isRendering = false;
        this.animationFrameId = null;

        this.init();
    }

    init() {
        if (typeof THREE === "undefined") return;

        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        const width = this.container.clientWidth;
        const height = this.container.clientHeight || 450;
        const isMobile = window.innerWidth < 768;

        // 1. Scene & Camera
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
        this.camera.position.z = 280;

        // 2. WebGL Renderer
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
        this.container.appendChild(this.renderer.domElement);

        // 3. Central 3D Core Sphere
        const coreGeo = new THREE.IcosahedronGeometry(30, isMobile ? 1 : 2);
        const coreMat = new THREE.MeshStandardMaterial({
            color: 0x00E5FF,
            wireframe: true,
            transparent: true,
            opacity: 0.65
        });
        this.coreMesh = new THREE.Mesh(coreGeo, coreMat);
        this.scene.add(this.coreMesh);

        // 4. Lights
        const light1 = new THREE.PointLight(0x00E5FF, 2.5, 400);
        light1.position.set(120, 120, 120);
        this.scene.add(light1);

        const light2 = new THREE.PointLight(0x7C3AED, 2.5, 400);
        light2.position.set(-120, -120, -120);
        this.scene.add(light2);

        // 5. Create 3 Orbits & Logo Sprites
        this.createOrbitsAndSprites();

        // 6. Event Listeners & Observer Lock
        window.addEventListener("resize", this.onResize.bind(this));
        document.addEventListener("mousemove", (e) => {
            const rect = this.container.getBoundingClientRect();
            this.targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 0.4;
            this.targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 0.4;
        });

        this.setupViewportObserver();
    }

    setupViewportObserver() {
        const skillsSection = document.getElementById("skills");
        if (!skillsSection) {
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

        observer.observe(skillsSection);
    }

    createOrbitsAndSprites() {
        const textureLoader = new THREE.TextureLoader();

        SKILLS_DATA_SET.forEach((skill, index) => {
            let radius = 65;
            if (skill.orbit === "middle") radius = 105;
            if (skill.orbit === "outer") radius = 145;

            const angle = (index / SKILLS_DATA_SET.length) * Math.PI * 2;
            const elevation = (Math.sin(index * 1.5) * 45);

            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;
            const y = elevation;

            textureLoader.load(skill.logo, (texture) => {
                const spriteMat = new THREE.SpriteMaterial({
                    map: texture,
                    transparent: true,
                    opacity: 0.95
                });
                const sprite = new THREE.Sprite(spriteMat);
                sprite.position.set(x, y, z);
                sprite.scale.set(22, 22, 1);
                sprite.userData = { skillId: skill.id, data: skill, origPos: { x, y, z } };

                this.scene.add(sprite);
                this.logoSprites.push(sprite);
            }, undefined, () => {
                const fallbackGeo = new THREE.SphereGeometry(6, 16, 16);
                const fallbackMat = new THREE.MeshStandardMaterial({ color: 0x00E5FF });
                const mesh = new THREE.Mesh(fallbackGeo, fallbackMat);
                mesh.position.set(x, y, z);
                mesh.userData = { skillId: skill.id, data: skill, origPos: { x, y, z } };

                this.scene.add(mesh);
                this.logoSprites.push(mesh);
            });
        });
    }

    onResize() {
        if (!this.container || !this.renderer || !this.camera) return;
        const width = this.container.clientWidth;
        const height = this.container.clientHeight || 450;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
    }

    animate() {
        if (!this.isRendering) return;

        this.animationFrameId = requestAnimationFrame(this.animate.bind(this));

        this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
        this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

        if (this.coreMesh) {
            this.coreMesh.rotation.y += 0.003 + this.mouseX * 0.02;
            this.coreMesh.rotation.x += 0.002 + this.mouseY * 0.02;
        }

        const time = Date.now() * 0.001;
        this.logoSprites.forEach((sprite, i) => {
            if (sprite.userData && sprite.userData.origPos) {
                const orig = sprite.userData.origPos;
                sprite.position.y = orig.y + Math.sin(time + i) * 4;
            }
        });

        this.renderer.render(this.scene, this.camera);
    }

    filterCategory(category) {
        this.activeCategory = category;
        this.applyFilters();
    }

    searchSkills(query) {
        this.searchQuery = query.toLowerCase().trim();
        this.applyFilters();
    }

    applyFilters() {
        this.logoSprites.forEach(sprite => {
            const skill = sprite.userData.data;
            let matchesCategory = (this.activeCategory === "all" || skill.category === this.activeCategory);
            let matchesSearch = (!this.searchQuery || skill.name.toLowerCase().includes(this.searchQuery) || skill.desc.toLowerCase().includes(this.searchQuery));

            if (matchesCategory && matchesSearch) {
                sprite.scale.set(24, 24, 1);
                if (sprite.material) sprite.material.opacity = 1.0;
            } else {
                sprite.scale.set(12, 12, 1);
                if (sprite.material) sprite.material.opacity = 0.2;
            }
        });
    }

    highlightSkill(skillId) {
        const targetSkill = SKILLS_DATA_SET.find(s => s.id === skillId);
        if (!targetSkill) return;

        const linkedIds = [skillId, ...targetSkill.links];

        this.logoSprites.forEach(sprite => {
            const id = sprite.userData.skillId;
            if (linkedIds.includes(id)) {
                sprite.scale.set(30, 30, 1);
                if (sprite.material) sprite.material.opacity = 1.0;
            } else {
                sprite.scale.set(12, 12, 1);
                if (sprite.material) sprite.material.opacity = 0.25;
            }
        });
    }

    resetHighlight() {
        this.applyFilters();
    }
}

let skillsUniverseInstance = null;
let skillsAnimated = false;

document.addEventListener("DOMContentLoaded", () => {
    updateDynamicSkillCounter();
    skillsUniverseInstance = new Skills3DUniverseEngine();
    renderSkillProgressList("dev");
    setupSkillTabs();
    setupSkillSearch();
    initSkillsObserver();
});

function updateDynamicSkillCounter() {
    const counterEl = document.getElementById("skillsDynamicCounter");
    if (counterEl) {
        counterEl.textContent = `${SKILLS_DATA_SET.length}+ Skills & Tools`;
    }
}

// Render Skill Progress Items in a 2-Column Grid
function renderSkillProgressList(category = "all") {
    const container = document.getElementById("skillsProgressListContainer");
    if (!container) return;

    let filtered = SKILLS_DATA_SET;
    if (category !== "all") {
        filtered = SKILLS_DATA_SET.filter(s => s.category === category);
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="col-12 text-center py-4 text-secondary">No skills found in this category.</div>`;
        return;
    }

    // Split into 2 columns for desktop
    const midIndex = Math.ceil(filtered.length / 2);
    const col1 = filtered.slice(0, midIndex);
    const col2 = filtered.slice(midIndex);

    const renderColumnItems = (items) => items.map(skill => `
        <div class="skill-progress-item-wrapper mb-3" data-skill-id="${skill.id}">
            <div class="skill-progress-card glass-card p-3" onclick="showSkillInfoPanel('${skill.id}')">
                <div class="d-flex align-items-center justify-content-between mb-2">
                    <div class="d-flex align-items-center gap-2">
                        <img src="${skill.logo}" alt="${skill.name}" class="skill-progress-icon" onerror="this.src='assets/icons/skills/ai.svg'">
                        <span class="skill-progress-name">${skill.name}</span>
                        <span class="badge bg-dark border border-secondary text-info font-heading ms-1" style="font-size: 0.68rem;">${skill.subcategory}</span>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                        <span class="badge bg-dark border border-purple text-purple small font-heading" style="font-size: 0.72rem;">${skill.levelLabel}</span>
                        <span class="skill-progress-percent font-heading" data-target="${skill.percentage}">0%</span>
                    </div>
                </div>

                <div class="skill-progress-track">
                    <div class="skill-progress-bar" data-target-width="${skill.percentage}%" style="width: 0%;">
                        <div class="skill-progress-glow-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="col-lg-6">
            ${renderColumnItems(col1)}
        </div>
        <div class="col-lg-6">
            ${renderColumnItems(col2)}
        </div>
    `;

    // Re-attach hover listeners
    const wrappers = container.querySelectorAll(".skill-progress-item-wrapper");
    wrappers.forEach(wrapper => {
        const skillId = wrapper.getAttribute("data-skill-id");
        const card = wrapper.querySelector(".skill-progress-card");

        card.addEventListener("mouseenter", () => {
            highlightRelationships(skillId);
            if (skillsUniverseInstance) skillsUniverseInstance.highlightSkill(skillId);
        });

        card.addEventListener("mouseleave", () => {
            resetRelationships();
            if (skillsUniverseInstance) skillsUniverseInstance.resetHighlight();
        });
    });

    // Trigger animations for the newly rendered cards
    setTimeout(() => {
        animateSkillProgressBars();
    }, 50);
}

// Animate Progress Bars & Percentage Numbers
function animateSkillProgressBars() {
    const bars = document.querySelectorAll(".skill-progress-bar");
    const percents = document.querySelectorAll(".skill-progress-percent");

    bars.forEach(bar => {
        const targetWidth = bar.getAttribute("data-target-width");
        bar.style.width = targetWidth;
    });

    percents.forEach(el => {
        const targetVal = parseInt(el.getAttribute("data-target"), 10);
        if (isNaN(targetVal)) return;

        let current = 0;
        const duration = 1200;
        const stepTime = Math.max(Math.floor(duration / targetVal), 15);

        const counter = setInterval(() => {
            current += 1;
            if (current >= targetVal) {
                el.textContent = `${targetVal}%`;
                clearInterval(counter);
            } else {
                el.textContent = `${current}%`;
            }
        }, stepTime);
    });
}

// IntersectionObserver for viewport entrance trigger
function initSkillsObserver() {
    const section = document.getElementById("skills");
    if (!section) return;

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !skillsAnimated) {
                skillsAnimated = true;
                animateSkillProgressBars();
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(section);
}

// Setup Category Tabs
function setupSkillTabs() {
    const tabs = document.querySelectorAll(".skills-tab-btn");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const cat = tab.getAttribute("data-category");
            renderSkillProgressList(cat);
            if (skillsUniverseInstance) skillsUniverseInstance.filterCategory(cat);
        });
    });
}

// Setup Search Filter
function setupSkillSearch() {
    const searchInput = document.getElementById("skillSearchInput");
    if (!searchInput) return;

    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();

        if (skillsUniverseInstance) skillsUniverseInstance.searchSkills(query);

        const wrappers = document.querySelectorAll(".skill-progress-item-wrapper");
        wrappers.forEach(wrapper => {
            const skillId = wrapper.getAttribute("data-skill-id");
            const skill = SKILLS_DATA_SET.find(s => s.id === skillId);
            if (skill && (skill.name.toLowerCase().includes(query) || skill.desc.toLowerCase().includes(query))) {
                wrapper.style.display = "block";
            } else {
                wrapper.style.display = "none";
            }
        });
    });
}

// Highlight Linked Skill Relationships
function highlightRelationships(skillId) {
    const targetSkill = SKILLS_DATA_SET.find(s => s.id === skillId);
    if (!targetSkill) return;

    const activeIds = [skillId, ...targetSkill.links];
    const wrappers = document.querySelectorAll(".skill-progress-item-wrapper");

    wrappers.forEach(wrapper => {
        const id = wrapper.getAttribute("data-skill-id");
        const card = wrapper.querySelector(".skill-progress-card");
        if (activeIds.includes(id)) {
            card.classList.add("highlighted-link");
            card.classList.remove("dimmed-link");
        } else {
            card.classList.add("dimmed-link");
            card.classList.remove("highlighted-link");
        }
    });
}

function resetRelationships() {
    const cards = document.querySelectorAll(".skill-progress-card");
    cards.forEach(card => {
        card.classList.remove("highlighted-link", "dimmed-link");
    });
}

// Show Glass Info Modal
function showSkillInfoPanel(skillId) {
    const skill = SKILLS_DATA_SET.find(s => s.id === skillId);
    if (!skill) return;

    let panel = document.getElementById("skillInfoPanel");
    if (!panel) {
        panel = document.createElement("div");
        panel.id = "skillInfoPanel";
        panel.className = "modal fade";
        panel.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content modal-content-glass">
                    <div class="modal-header">
                        <h5 class="modal-title font-heading" id="skillInfoTitle">Skill Details</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4" id="skillInfoBody"></div>
                </div>
            </div>
        `;
        document.body.appendChild(panel);
    }

    const titleEl = document.getElementById("skillInfoTitle");
    const bodyEl = document.getElementById("skillInfoBody");

    if (titleEl && bodyEl) {
        titleEl.textContent = skill.name;
        bodyEl.innerHTML = `
            <div class="d-flex align-items-center gap-3 mb-4 p-3 rounded-3" style="background: rgba(0, 229, 255, 0.05); border: 1px solid var(--border-color);">
                <img src="${skill.logo}" alt="${skill.name}" style="width: 44px; height: 44px;" onerror="this.src='assets/icons/skills/ai.svg'">
                <div>
                    <h4 class="text-white font-heading mb-0">${skill.name}</h4>
                    <span class="badge bg-dark border border-cyan text-info">${skill.subcategory}</span>
                    <span class="badge bg-dark border border-purple text-purple ms-1">${skill.percentage}% • ${skill.levelLabel}</span>
                </div>
            </div>

            <h5 class="h6 text-white font-heading mb-1">Overview</h5>
            <p class="text-secondary small mb-3">${skill.desc}</p>

            <h5 class="h6 text-white font-heading mb-1">Primary Application</h5>
            <p class="text-secondary small mb-4">${skill.usedFor}</p>

            <h5 class="h6 text-white font-heading mb-2">Connected Skill Graph</h5>
            <div class="d-flex flex-wrap gap-2">
                ${skill.links.map(linkId => {
                    const linkedSkill = SKILLS_DATA_SET.find(s => s.id === linkId);
                    return linkedSkill ? `<span class="badge bg-dark border border-purple text-purple p-2"><i class="fa-solid fa-link me-1"></i>${linkedSkill.name}</span>` : '';
                }).join('')}
            </div>
        `;

        if (typeof bootstrap !== "undefined") {
            const bsModal = new bootstrap.Modal(panel);
            bsModal.show();
        }
    }
}
