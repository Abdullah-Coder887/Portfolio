/**
 * ABDULLAH BIN TABASSAM — CREATIVE WORK & AI VIDEO SHOWCASE DATA
 * Graphic Design Gallery & AI Video Production Modal Controller
 */

// Graphic Design Showcase Data
const GRAPHIC_DESIGN_DATA = [
    {
        id: "design-ai-1",
        title: "Futuristic AI Visual Concept",
        category: "Branding",
        categorySlug: "branding",
        icon: "fa-solid fa-wand-magic-sparkles",
        image: "assets/images/creative/ai-creative-1.png",
        desc: "AI-assisted visual art and futuristic concept design with high-fidelity lighting and composition."
    },
    {
        id: "design-ai-2",
        title: "Creative Digital Media Art",
        category: "Social Media",
        categorySlug: "social-media",
        icon: "fa-solid fa-palette",
        image: "assets/images/creative/ai-creative-2.png",
        desc: "Generative AI visual media artwork optimized for high-impact social campaigns."
    },
    {
        id: "design-ai-3",
        title: "AI Character & Media Art",
        category: "Branding",
        categorySlug: "branding",
        icon: "fa-solid fa-robot",
        image: "assets/images/creative/ai-creative-3.png",
        desc: "AI-generated digital artwork and creative concept graphics for modern media projects."
    },
    {
        id: "design-popcorn",
        title: "Chicken Popcorn Promo Poster",
        category: "Social Media",
        categorySlug: "social-media",
        icon: "fa-solid fa-utensils",
        image: "assets/images/creative/chicken-popcorn.png",
        desc: "High-converting food promotional social media ad design featuring vibrant typography, price highlights, and appetite appeal."
    },
    {
        id: "design-hotshot",
        title: "Hotshot Crispy Food Poster",
        category: "Social Media",
        categorySlug: "social-media",
        icon: "fa-solid fa-pepper-hot",
        image: "assets/images/creative/hotshot.png",
        desc: "Eye-catching social media campaign graphics for food product promotion with bold visual hierarchy and call-to-action branding."
    },
    {
        id: "design-p1",
        title: "Promotional Poster Design Vol. 1",
        category: "Posters",
        categorySlug: "posters",
        icon: "fa-solid fa-file-image",
        image: "assets/images/creative/p1.png",
        desc: "High-resolution promotional event poster with bold typography and creative layout composition."
    },
    {
        id: "design-p2",
        title: "Promotional Poster Design Vol. 2",
        category: "Posters",
        categorySlug: "posters",
        icon: "fa-solid fa-image",
        image: "assets/images/creative/p2.png",
        desc: "Creative marketing flyer design crafted for corporate and organizational events."
    },
    {
        id: "design-f2",
        title: "Food Campaign Banner Vol. 1",
        category: "Social Media",
        categorySlug: "social-media",
        icon: "fa-solid fa-burger",
        image: "assets/images/creative/f2.png",
        desc: "Vibrant food social media campaign post designed for high online engagement."
    },
    {
        id: "design-f3",
        title: "Food Campaign Banner Vol. 2",
        category: "Social Media",
        categorySlug: "social-media",
        icon: "fa-solid fa-pizza-slice",
        image: "assets/images/creative/f3.png",
        desc: "Appetizing food marketing banner graphic optimized for Instagram and Facebook ads."
    },
    {
        id: "design-stripes",
        title: "Brand Identity & Visuals",
        category: "Branding",
        categorySlug: "branding",
        icon: "fa-solid fa-vector-square",
        image: "assets/images/creative/stripes.png",
        desc: "Creative visual brand asset with modern geometric branding elements."
    },
    {
        id: "design-welcome",
        title: "Welcome Banner Graphic",
        category: "Branding",
        categorySlug: "branding",
        icon: "fa-solid fa-flag",
        image: "assets/images/creative/welcome.jpeg",
        desc: "Professional welcoming graphic banner designed for corporate announcements and onboarding."
    }
];

// AI Video Showcase Data
const AI_VIDEO_DATA = [
    {
        id: "video-asoo-1",
        title: " Promotional Commercial Vol. 1",
        category: "Promotional Video",
        desc: "AI-assisted dynamic commercial reel featuring modern video production and motion graphics.",
        icon: "fa-solid fa-wand-magic-sparkles",
        videoSrc: "assets/videos/asoo-v1.mp4"
    },
    {
        id: "video-asoo-2",
        title: " Promotional Commercial Vol. 2",
        category: "Promotional Video",
        desc: "High-engagement brand commercial optimized for marketing campaigns and social media.",
        icon: "fa-solid fa-clapperboard",
        videoSrc: "assets/videos/asoo-v2.mp4"
    },
    {
        id: "video-ehibsabkitab",
        title: "E-HibsabKitab Promotional Commercial",
        category: "Product Video Ad",
        desc: "Commercial video ad created for financial and business record management platform.",
        icon: "fa-solid fa-rectangle-ad",
        videoSrc: "assets/videos/ehibsabkitab-ad.mp4"
    },
    {
        id: "video-promo-design",
        title: "Creative Motion Design Reel",
        category: "Motion Graphics",
        desc: "Dynamic creative motion graphic advertisement video designed for high engagement.",
        icon: "fa-solid fa-film",
        videoSrc: "assets/videos/promo-design.mp4"
    }
];

// Gallery Pagination State
let creativeShowLimit = 6;
let currentFilteredGraphicItems = GRAPHIC_DESIGN_DATA;

// Initializer
document.addEventListener("DOMContentLoaded", () => {
    renderGraphicDesignGallery(GRAPHIC_DESIGN_DATA);
    renderAIVideoShowcase(AI_VIDEO_DATA);
    setupCreativeFilters();
    setupCreativeLoadMore();
});

// Render Graphic Design Gallery Items with 6-item default pagination
function renderGraphicDesignGallery(items, isLoadMore = false) {
    const container = document.getElementById("creative-gallery-container");
    if (!container) return;

    currentFilteredGraphicItems = items;

    if (!isLoadMore) {
        creativeShowLimit = 6;
    }

    const visibleItems = items.slice(0, creativeShowLimit);

    if (visibleItems.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-4 text-secondary">
                No designs found in this category.
            </div>
        `;
    } else {
        container.innerHTML = visibleItems.map((item, index) => {
            const hasImage = item.image && item.image.trim() !== "";
            const imageMarkup = hasImage ? `
                <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" class="w-100 h-100 object-fit-cover transition-transform" style="object-position: center;">
            ` : `
                <div class="gallery-placeholder">
                    <i class="${item.icon}"></i>
                    <span class="small font-heading text-white mt-2">${item.title}</span>
                    <span class="badge bg-dark border border-secondary text-info mt-1">${item.category}</span>
                </div>
            `;

            const animateClass = isLoadMore && index >= 6 ? "creative-item-animate" : "creative-item-animate";

            return `
                <div class="col-lg-4 col-md-6 mb-4 creative-item ${animateClass}" data-category="${item.categorySlug}">
                    <div class="gallery-item" onclick="openGraphicModal('${item.id}')">
                        ${imageMarkup}
                        <div class="gallery-overlay">
                            <h4 class="gallery-title">${item.title}</h4>
                            <span class="gallery-cat">${item.category}</span>
                            <p class="small text-secondary mb-3">${item.desc}</p>
                            <span class="btn-neon-primary btn-sm"><i class="fa-solid fa-expand"></i> Preview Work</span>
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    updateLoadMoreButtonState(items.length);
}

// Update Load More Button Text & State
function updateLoadMoreButtonState(totalItems) {
    const loadMoreBtn = document.getElementById("creativeLoadMoreBtn");
    const wrapper = document.getElementById("creativeLoadMoreWrapper");
    if (!loadMoreBtn || !wrapper) return;

    if (totalItems <= 6) {
        wrapper.style.display = "none";
    } else {
        wrapper.style.display = "block";
        if (creativeShowLimit >= totalItems) {
            loadMoreBtn.innerHTML = `<i class="fa-solid fa-check me-1"></i> All Work Loaded`;
            loadMoreBtn.classList.add("disabled");
            loadMoreBtn.style.opacity = "0.6";
            loadMoreBtn.style.cursor = "default";
        } else {
            const remaining = totalItems - creativeShowLimit;
            loadMoreBtn.innerHTML = `<i class="fa-solid fa-square-plus me-1"></i> Load More Work (${remaining} remaining)`;
            loadMoreBtn.classList.remove("disabled");
            loadMoreBtn.style.opacity = "1";
            loadMoreBtn.style.cursor = "pointer";
        }
    }
}

// Setup Load More Click Interaction
function setupCreativeLoadMore() {
    const loadMoreBtn = document.getElementById("creativeLoadMoreBtn");
    if (!loadMoreBtn) return;

    loadMoreBtn.addEventListener("click", () => {
        if (creativeShowLimit >= currentFilteredGraphicItems.length) return;

        creativeShowLimit = currentFilteredGraphicItems.length;
        renderGraphicDesignGallery(currentFilteredGraphicItems, true);
    });
}

// Setup Creative Category Filters
function setupCreativeFilters() {
    const filterBtns = document.querySelectorAll(".creative-filter-btn");
    filterBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            filterBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const category = btn.getAttribute("data-filter");
            if (category === "all") {
                renderGraphicDesignGallery(GRAPHIC_DESIGN_DATA, false);
            } else {
                const filtered = GRAPHIC_DESIGN_DATA.filter(item => item.categorySlug === category);
                renderGraphicDesignGallery(filtered, false);
            }
        });
    });
}

// Render AI Video Cards
function renderAIVideoShowcase(videos) {
    const container = document.getElementById("video-showcase-container");
    if (!container) return;

    container.innerHTML = videos.map(video => `
        <div class="col-lg-6 col-md-6 mb-4">
            <div class="video-card glass-card">
                <div class="video-thumb-container" onclick="openVideoModal('${video.id}')">
                    <div class="w-100 h-100 d-flex flex-column align-items-center justify-content-center" style="background: linear-gradient(135deg, #100826 0%, #1c103b 100%);">
                        <i class="${video.icon} display-3 mb-2" style="color: var(--accent-secondary);"></i>
                        <span class="badge bg-dark text-purple border border-purple">${video.category}</span>
                    </div>
                    <div class="play-btn-overlay">
                        <i class="fa-solid fa-play ms-1"></i>
                    </div>
                </div>
                <div class="p-3">
                    <h4 class="h6 text-white font-heading mb-1">${video.title}</h4>
                    <p class="small text-secondary mb-0">${video.desc}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Open Graphic Design Modal
function openGraphicModal(designId) {
    const item = GRAPHIC_DESIGN_DATA.find(d => d.id === designId);
    if (!item) return;

    const modalTitle = document.getElementById("graphicModalTitle");
    const modalBody = document.getElementById("graphicModalBody");

    if (modalTitle && modalBody) {
        modalTitle.textContent = item.title;

        const hasImage = item.image && item.image.trim() !== "";
        const previewContent = hasImage ? `
            <div class="text-center p-2 rounded-3 mb-3" style="background: #000; border: 1px solid var(--border-color);">
                <img src="${item.image}" alt="${item.title}" class="img-fluid rounded-3" style="max-height: 75vh; object-fit: contain;">
            </div>
        ` : `
            <div class="text-center p-5 rounded-3 mb-4" style="background: linear-gradient(135deg, #0b1324 0%, #152238 100%); border: 1px solid var(--border-color);">
                <i class="${item.icon} display-1 text-info mb-3"></i>
                <h4 class="text-white">${item.title}</h4>
                <p class="text-info font-monospace">${item.category}</p>
            </div>
        `;

        modalBody.innerHTML = `
            ${previewContent}
            <div class="d-flex align-items-center justify-content-between mb-2">
                <h5 class="text-white font-heading mb-0">${item.title}</h5>
                <span class="badge bg-dark border border-cyan text-info">${item.category}</span>
            </div>
            <p class="text-secondary small mb-0">${item.desc}</p>
        `;

        const modalElement = document.getElementById("graphicModal");
        if (modalElement && typeof bootstrap !== "undefined") {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();
        }
    }
}

// Open Video Modal & HTML5 Video Player
function openVideoModal(videoId) {
    const video = AI_VIDEO_DATA.find(v => v.id === videoId);
    if (!video) return;

    const modalTitle = document.getElementById("videoModalTitle");
    const modalBody = document.getElementById("videoModalBody");

    if (modalTitle && modalBody) {
        modalTitle.textContent = video.title;

        const hasVideo = video.videoSrc && video.videoSrc.trim() !== "";
        const videoContent = hasVideo ? `
            <div class="ratio ratio-16x9 mb-3 rounded-3 overflow-hidden" style="background: #000; border: 1px solid var(--border-color);">
                <video controls autoplay playsinline class="w-100 h-100 rounded-3">
                    <source src="${video.videoSrc}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </div>
        ` : `
            <div class="ratio ratio-16x9 mb-3 rounded-3 overflow-hidden" style="background: #000;">
                <div class="d-flex flex-column align-items-center justify-content-center text-center p-4">
                    <i class="${video.icon} display-1 text-purple mb-3"></i>
                    <h5 class="text-white">${video.title}</h5>
                    <p class="text-secondary small mb-0">${video.desc}</p>
                </div>
            </div>
        `;

        modalBody.innerHTML = `
            ${videoContent}
            <div class="d-flex align-items-center justify-content-between mb-2">
                <h5 class="text-white font-heading mb-0">${video.title}</h5>
                <span class="badge bg-dark border border-purple text-purple">${video.category}</span>
            </div>
            <p class="text-secondary small mb-0">${video.desc}</p>
        `;

        const modalElement = document.getElementById("videoModal");
        if (modalElement && typeof bootstrap !== "undefined") {
            const modal = new bootstrap.Modal(modalElement);
            modal.show();

            // Stop video playback when modal is closed
            modalElement.addEventListener('hidden.bs.modal', function handler() {
                const videoEl = modalBody.querySelector('video');
                if (videoEl) videoEl.pause();
                modalElement.removeEventListener('hidden.bs.modal', handler);
            });
        }
    }
}
