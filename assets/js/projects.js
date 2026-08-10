/**
 * ABDULLAH BIN TABASSAM — PROJECTS DATA & DYNAMIC RENDERER
 * Data Architecture for Portfolio Projects, Screenshots Showcase & Lightbox Modal Interactivity
 */

const PROJECTS_DATA = [
    {
        id: "ausia-welfare",
        title: "Ausia Welfare Management System",
        category: "NGO / Welfare Management",
        categorySlug: "business-systems",
        shortDesc: "A comprehensive digital management platform designed to help manage welfare activities, financial operations, beneficiaries, projects, donations, and organizational records from a centralized system.",
        fullDesc: "A centralized digital management platform developed to organize welfare operations, finance, projects, beneficiaries, and reporting. Brings multiple organizational workflows into one structured management platform.",
        technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Bootstrap 5", "HTML5/CSS3"],
        icon: "fa-solid fa-hand-holding-heart",
        cover: "assets/images/projects/ausia-welfare/finance-dashboard.png",
        liveUrl: "",
        githubUrl: "",
        features: [
            "Centralized Executive Finance Dashboard",
            "Donation & Donor Contribution Record Management",
            "Financial Income & Revenue Inflow Tracking",
            "Organizational Expense & Expenditure Control",
            "Centralized Beneficiary Support & Welfare Directory"
        ],
        screenshots: [
            {
                image: "assets/images/projects/ausia-welfare/finance-dashboard.png",
                title: "Finance Dashboard",
                description: "Centralized financial overview for monitoring organizational income, expenses and current financial position."
            },
            {
                image: "assets/images/projects/ausia-welfare/donations.png",
                title: "Donation Management",
                description: "Donation management for recording and monitoring contributions and donor-related financial information."
            },
            {
                image: "assets/images/projects/ausia-welfare/income.png",
                title: "Income Management",
                description: "Income management for recording and tracking organizational financial inflows."
            },
            {
                image: "assets/images/projects/ausia-welfare/expenses.png",
                title: "Expense Management",
                description: "Expense management for recording and monitoring organizational expenditures."
            },
            {
                image: "assets/images/projects/ausia-welfare/beneficiaries.png",
                title: "Beneficiaries Management",
                description: "Centralized beneficiary management for organizing and tracking welfare support records."
            }
        ]
    },
    {
        id: "food-ordering-system",
        title: "Food Ordering & Restaurant Management System",
        category: "Web Application / Food Ordering",
        categorySlug: "web-dev",
        role: "Full Stack Developer",
        shortDesc: "An interactive restaurant ordering platform designed to provide customers with a smooth food discovery, cart, checkout and order experience, supported by an organized management interface.",
        fullDesc: "Food Ordering & Restaurant Management System is a modern web-based platform designed to simplify the restaurant ordering experience. Customers can explore the menu, view food details, add items to their cart, complete checkout and place orders through a responsive interface, while the management side provides tools for handling menu items and orders.",
        technologies: ["React", "PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Bootstrap"],
        icon: "fa-solid fa-utensils",
        cover: "assets/images/projects/food-ordering/food-home.png",
        liveUrl: "",
        githubUrl: "",
        features: [
            "Restaurant Homepage & Interactive Food Menu",
            "Food Details, Customization & Quantity Management",
            "Cart Checkout & Customer Order Placement",
            "Order Confirmation & Real-time Status Tracking",
            "Executive Restaurant Admin Dashboard",
            "Order & Customer Record Management",
            "Menu Item & Pricing Control"
        ],
        screenshots: [
            {
                image: "assets/images/projects/food-ordering/food-home.png",
                title: "Restaurant Homepage",
                description: "Interactive restaurant homepage showing menu offerings and food discovery."
            },
            {
                image: "assets/images/projects/food-ordering/food-menu.png",
                title: "Food Menu & Ordering Interface",
                description: "Menu categories, food cards, prices, and instant ordering options."
            },
            {
                image: "assets/images/projects/food-ordering/food-details.png",
                title: "Food Details & Checkout",
                description: "Detailed food information, quantity selection, cart, and checkout flow."
            },
            {
                image: "assets/images/projects/food-ordering/food-admin-dashboard.png",
                title: "Restaurant Admin Dashboard",
                description: "Centralized restaurant management metrics, order totals, and performance KPIs."
            },
            {
                image: "assets/images/projects/food-ordering/food-orders.png",
                title: "Order Management",
                description: "Restaurant admin order fulfillment, status tracking, and kitchen logs."
            },
            {
                image: "assets/images/projects/food-ordering/food-customers.png",
                title: "Customer Records",
                description: "Customer database management and order history records."
            },
            {
                image: "assets/images/projects/food-ordering/food-menu-management.png",
                title: "Menu Item Management",
                description: "Admin product catalog control for updating dishes, prices, and availability."
            }
        ]
    },
    {
        id: "dispensary-mgmt",
        title: "Dispensary Management System",
        category: "Healthcare / Inventory",
        categorySlug: "business-systems",
        shortDesc: "Comprehensive healthcare & pharmacy operational system managing patient prescriptions, medicine inventory, and daily clinical logs.",
        fullDesc: "A specialized, production-grade healthcare web application engineered to digitize dispensary operations. Features patient registration, clinical visit tracking, medical purchasing, inventory stock management, and operational reporting.",
        technologies: ["Laravel", "PHP", "MySQL", "Blade", "JavaScript", "Bootstrap 5"],
        icon: "fa-solid fa-clinic-medical",
        cover: "assets/images/projects/dispensary/dashboard.png",
        liveUrl: "",
        githubUrl: "",
        features: [
            "Centralized Dispensary Executive Dashboard",
            "Digital Patient Registration & Clinical Visit History",
            "Medicine Inventory Purchasing & Stock Balance Tracking",
            "Daily Patient Log & Operational Distribution Reports",
            "Printable Patient Consultation Slips & Audit Trail"
        ],
        screenshots: [
            {
                image: "assets/images/projects/dispensary/dashboard.png",
                title: "Dispensary Dashboard",
                description: "Centralized overview of patients, medicines, stock and daily operations."
            },
            {
                image: "assets/images/projects/dispensary/patient-registration.png",
                title: "Patient Registration",
                description: "Digital patient registration and medical information management."
            },
            {
                image: "assets/images/projects/dispensary/patient-details.png",
                title: "Patient Records & Details",
                description: "Centralized patient directory and medical history records."
            },
            {
                image: "assets/images/projects/dispensary/medicine-inventory.png",
                title: "Medicine Inventory",
                description: "Medicine purchasing, stock quantities, and inventory logs."
            },
            {
                image: "assets/images/projects/dispensary/daily-patients.png",
                title: "Daily Patient Records",
                description: "Daily patient visit logs, operational tracking, and consultation details."
            }
        ]
    },
    {
        id: "quran-institute",
        title: "Quran Institute Website",
        category: "Education / Islamic Learning",
        categorySlug: "web-dev",
        shortDesc: "Modern responsive Quran learning platform built with the MERN stack.",
        fullDesc: "A modern Quran learning platform designed to present Quran courses, learning programs and institute information through a clean, engaging and responsive web experience.",
        technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Bootstrap"],
        icon: "fa-solid fa-book-quran",
        cover: "assets/images/projects/quran-institute/homepage.png",
        liveUrl: "",
        githubUrl: "",
        features: [
            "Modern Quran Institute Web Presentation",
            "Interactive Course Catalog & Program Presentation",
            "Structured Tajweed & Quranic Learning Programs",
            "Student Enrollment & Inquiry Form",
            "Administrator Management Portal"
        ],
        screenshots: [
            {
                image: "assets/images/projects/quran-institute/homepage.png",
                title: "Homepage & Hero Presentation",
                description: "Modern Quran learning platform homepage and hero presentation."
            },
            {
                image: "assets/images/projects/quran-institute/courses.png",
                title: "Course Catalog & Programs",
                description: "Course directory displaying Tajweed, recitation, and Islamic study programs."
            },
            {
                image: "assets/images/projects/quran-institute/about.png",
                title: "Institute Features & Methodology",
                description: "Educational approach, features, and institute overview."
            },
            {
                image: "assets/images/projects/quran-institute/contact.png",
                title: "Student Enrollment & Contact",
                description: "Interactive student enrollment form and contact details."
            },
            {
                image: "assets/images/projects/quran-institute/admin-dashboard.png",
                title: "Admin Management Portal",
                description: "Administrative portal for managing course content and student inquiries."
            }
        ]
    }
];

// Initialize and Render Projects
document.addEventListener("DOMContentLoaded", () => {
    renderProjects(PROJECTS_DATA);
    setupProjectFilters();
});

// Render Project Cards
function renderProjects(projects) {
    const container = document.getElementById("projects-container");
    if (!container) return;

    if (projects.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-secondary">No projects found in this category.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = projects.map(project => {
        const hasCover = project.cover && project.cover.trim() !== "";
        const isMern = project.technologies.includes("React.js") || project.technologies.includes("MongoDB");
        const isReactPhp = project.technologies.includes("React") && project.technologies.includes("PHP");

        const imageContent = hasCover ? `
            <img src="${project.cover}" alt="${project.title}" loading="lazy" decoding="async" class="w-100 h-100 object-fit-cover transition-transform" style="object-position: top center;">
        ` : `
            <div class="project-img-placeholder">
                <i class="${project.icon}"></i>
                <span class="small font-monospace">${project.category}</span>
            </div>
        `;

        let badgeTag = '';
        if (isMern) {
            badgeTag = `<span class="badge bg-dark border border-cyan text-info font-heading ms-2" style="font-size: 0.68rem; letter-spacing: 1px;">MERN STACK</span>`;
        } else if (isReactPhp) {
            badgeTag = `<span class="badge bg-dark border border-purple text-purple font-heading ms-2" style="font-size: 0.68rem; letter-spacing: 1px;">REACT + PHP</span>`;
        }

        const displayedTechs = project.technologies.slice(0, 4);
        const remainingCount = project.technologies.length - 4;
        const techTagsHTML = displayedTechs.map(tech => `<span class="tech-tag">${tech}</span>`).join('') +
            (remainingCount > 0 ? `<span class="tech-tag tech-tag-more">+${remainingCount} More</span>` : '');

        return `
            <div class="col-lg-4 col-md-6 mb-4 project-item" data-category="${project.categorySlug}">
                <div class="project-card">
                    <div class="project-img-wrapper">
                        ${imageContent}
                        <span class="project-category-badge">${project.category}${badgeTag}</span>
                    </div>
                    <div class="project-body">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.shortDesc}</p>
                        <div class="tech-tags mb-3">
                            ${techTagsHTML}
                        </div>
                        <div class="project-footer-btns">
                            <button class="btn-project-action btn-neon-primary w-100" onclick="openProjectModal('${project.id}')">
                                <i class="fa-solid fa-circle-info me-1"></i> View Details & Screenshots
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Setup Project Filter Controls
function setupProjectFilters() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter");
            if (filterValue === "all") {
                renderProjects(PROJECTS_DATA);
            } else {
                const filtered = PROJECTS_DATA.filter(p => p.categorySlug === filterValue);
                renderProjects(filtered);
            }
        });
    });
}

// Open Project Details & Screenshot Gallery Modal
function openProjectModal(projectId) {
    const project = PROJECTS_DATA.find(p => p.id === projectId);
    if (!project) return;

    const modalTitle = document.getElementById("projectModalTitle");
    const modalBody = document.getElementById("projectModalBody");

    if (modalTitle && modalBody) {
        modalTitle.textContent = project.title;

        const hasScreenshots = project.screenshots && project.screenshots.length > 0;
        const isMern = project.technologies.includes("React.js") || project.technologies.includes("MongoDB");
        const isReactPhp = project.technologies.includes("React") && project.technologies.includes("PHP");

        const galleryHTML = hasScreenshots ? `
            <h5 class="text-white mb-3 font-heading"><i class="fa-solid fa-images text-info me-2"></i> Application Screenshots</h5>
            <div class="row g-3 mb-4">
                ${project.screenshots.map(shot => `
                    <div class="col-md-6">
                        <div class="glass-card p-2 h-100" style="cursor: pointer;" onclick="openLightbox('${shot.image}', '${shot.title}')">
                            <div class="ratio ratio-16x9 rounded-3 overflow-hidden mb-2" style="background: #000;">
                                <img src="${shot.image}" alt="${shot.title}" loading="lazy" decoding="async" class="w-100 h-100 object-fit-cover hover-zoom">
                            </div>
                            <h6 class="text-white mb-1 font-heading" style="font-size: 0.9rem;">${shot.title}</h6>
                            <p class="small text-secondary mb-0" style="font-size: 0.78rem;">${shot.description}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        ` : '';

        let badgeHTML = '';
        if (isMern) {
            badgeHTML = `<span class="badge bg-dark border border-cyan text-info font-heading px-2 py-1" style="font-size: 0.75rem;">MERN STACK</span>`;
        } else if (isReactPhp) {
            badgeHTML = `<span class="badge bg-dark border border-purple text-purple font-heading px-2 py-1" style="font-size: 0.75rem;">REACT + PHP</span>`;
        }

        modalBody.innerHTML = `
            <div class="mb-4 text-center p-4 rounded-3" style="background: rgba(0, 229, 255, 0.05); border: 1px solid var(--border-color);">
                ${project.cover ? `
                    <div class="ratio ratio-16x9 rounded-3 overflow-hidden mb-3 border border-secondary border-opacity-25">
                        <img src="${project.cover}" alt="${project.title}" loading="lazy" decoding="async" class="w-100 h-100 object-fit-cover" style="object-position: top center;">
                    </div>
                ` : `
                    <i class="${project.icon} display-3 mb-2" style="color: var(--accent-primary);"></i>
                `}
                <div class="d-flex align-items-center justify-content-center gap-2">
                    <h5 class="text-secondary font-monospace mb-0">${project.category}</h5>
                    ${badgeHTML}
                </div>
            </div>
            
            <h5 class="text-white mb-2 font-heading">Overview</h5>
            <p class="text-secondary mb-4">${project.fullDesc}</p>
            
            <h5 class="text-white mb-2 font-heading">Key Features</h5>
            <ul class="text-secondary mb-4 ps-3">
                ${project.features.map(f => `<li class="mb-1">${f}</li>`).join('')}
            </ul>

            ${galleryHTML}
            
            <h5 class="text-white mb-2 font-heading">Technologies Used</h5>
            <div class="tech-tags mb-4">
                ${project.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>

            <div class="d-flex flex-wrap gap-2 pt-2 border-top border-secondary border-opacity-25">
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="btn-neon-primary"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
                ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn-neon-secondary"><i class="fa-brands fa-github"></i> GitHub Code</a>` : ''}
                <a href="${CONFIG.SOCIAL.whatsapp}?text=Hello Abdullah, I am interested in your project: ${encodeURIComponent(project.title)}" target="_blank" class="btn-whatsapp">
                    <i class="fa-brands fa-whatsapp"></i> Inquire via WhatsApp
                </a>
            </div>
        `;

        const modalElement = document.getElementById("projectModal");
        if (modalElement && typeof bootstrap !== "undefined") {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        }
    }
}

// Lightbox Viewer Handler
function openLightbox(imgSrc, title) {
    let lightbox = document.getElementById("projectLightboxModal");
    if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.id = "projectLightboxModal";
        lightbox.className = "modal fade";
        lightbox.innerHTML = `
            <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content modal-content-glass">
                    <div class="modal-header">
                        <h5 class="modal-title font-heading" id="lightboxTitle">Screenshot View</h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-2 text-center" style="background: #000;">
                        <img id="lightboxImage" src="" class="img-fluid rounded-3" style="max-height: 80vh; object-fit: contain;">
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(lightbox);
    }

    const imgEl = document.getElementById("lightboxImage");
    const titleEl = document.getElementById("lightboxTitle");
    if (imgEl && titleEl) {
        imgEl.src = imgSrc;
        titleEl.textContent = title;

        if (typeof bootstrap !== "undefined") {
            const bsModal = new bootstrap.Modal(lightbox);
            bsModal.show();
        }
    }
}
