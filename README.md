# Personal Portfolio — Abdullah Bin Tabassam

Welcome to the personal 3D portfolio website for **Abdullah Bin Tabassam**, BS Artificial Intelligence Student and Full Stack Developer.

Built with **HTML5, CSS3, Vanilla JavaScript, Bootstrap 5, Three.js, and EmailJS**.

---

## Table of Contents
1. [Key Features & Upgrades](#key-features--upgrades)
2. [File & Modular Structure](#file--modular-structure)
3. [How to Edit Identity & Education Semester](#how-to-edit-identity--education-semester)
4. [How to Edit Profile Photo](#how-to-edit-profile-photo)
5. [3D Skills Universe & Relationships](#3d-skills-universe--relationships)
6. [EmailJS Setup Guide](#emailjs-setup-guide)
7. [Adding Projects & Creative Media](#adding-projects--creative-media)
8. [Free Deployment Guide](#free-deployment-guide)

---

## Key Features & Upgrades

- **Integrated Profile Photo**: Features Abdullah's photo (`abdullah-profile.jpeg`) presented inside glowing 3D glassmorphic frames with animated light rings and mouse parallax depth.
- **Authentic Student Positioning**: Tailored for Abdullah as a BS Artificial Intelligence student, continuous learner, personal project builder, and digital creative.
- **Interactive 3D Skills Universe**: Three.js 3D neural core with floating skill nodes. Hovering or clicking a skill highlights linked technology relationships (e.g. `Laravel` $\rightarrow$ `PHP` $\rightarrow$ `MySQL` $\rightarrow$ `REST API`, `AI` $\rightarrow$ `Prompt Engineering` $\rightarrow$ `AI Content`).
- **3D Card Tilt & Mouse Parallax**: Multi-depth $X/Y$ mouse tilt engine (`card-tilt.js`) and smooth parallax layers (`parallax.js`).
- **Education Timeline & Currently Exploring**: Visually interactive education path (ICS $\rightarrow$ BS Artificial Intelligence) with an editable semester field.

---

## File & Modular Structure

```
portfolio/
├── index.html                           # Main portfolio page
├── config/
│   └── config.js                        # Editable identity, semester, EmailJS & WhatsApp settings
├── assets/
│   ├── css/
│   │   ├── style.css                    # Glassmorphism, 3D card tilt & timeline styling
│   │   └── responsive.css               # Responsive media queries (360px - 1920px+)
│   ├── js/
│   │   ├── main.js                      # Core initializer & semester DOM binder
│   │   ├── three-scene.js               # Hero 3D background WebGL scene
│   │   ├── skills-3d.js                 # Three.js 3D Skills Universe & graph visualizer
│   │   ├── card-tilt.js                 # Reusable 3D mouse card tilt engine
│   │   ├── parallax.js                  # Multi-layer mouse parallax engine
│   │   ├── animations.js                # Top scroll progress bar & scroll reveal observer
│   │   ├── projects.js                  # Dynamic project data architecture & modal renderer
│   │   ├── creative.js                  # Graphic design & AI video showcase modules
│   │   └── contact.js                   # EmailJS contact form handler & WhatsApp link generator
│   └── images/
│       └── profile/
│           └── abdullah-profile.jpeg    # Profile photo
└── README.md
```

---

## How to Edit Identity & Education Semester

All personal branding details, student identity, and education semester settings are centralized in `config/config.js`:

```javascript
PERSONAL: {
    name: "Abdullah Bin Tabassam",
    title: "BS Artificial Intelligence Student | Full Stack Developer | Digital Creative",
    badge: "BS AI STUDENT • FULL STACK DEVELOPER • DIGITAL CREATIVE",
    
    // Education Details (Editable semester)
    education: {
        degree: "BS Artificial Intelligence",
        status: "Currently Studying",
        semester: "4th Semester",  // Update semester here as you progress!
        intermediate: "Intermediate in ICS",
        intermediateStatus: "Completed"
    },

    email: "abdullahbintabassam@gmail.com",
    whatsapp: "+923100551936",
    whatsappFormatted: "923100551936"
}
```

---

## How to Edit Profile Photo

Your profile photo is located at:
`assets/images/profile/abdullah-profile.jpeg`

To replace your photo, simply overwrite `abdullah-profile.jpeg` with your new image file using the same filename.

---

## 3D Skills Universe & Relationships

Skills are defined in `assets/js/skills-3d.js` in the `SKILLS_DATA_SET` array. Each skill specifies its name, category, description, and connected `links`:

```javascript
{ 
    id: "laravel", 
    name: "Laravel", 
    category: "dev", 
    desc: "MVC web applications, routing, and Eloquent ORM.", 
    links: ["php", "mysql", "rest-api"] 
}
```
Hovering over a skill card highlights all related linked technology cards while dimming unrelated cards.

---

## EmailJS Setup Guide

To receive contact form submissions directly at `abdullahbintabassam@gmail.com`:

1. Sign up at [https://www.emailjs.com/](https://www.emailjs.com/).
2. Add a Gmail Email Service (`abdullahbintabassam@gmail.com`) and note the **Service ID**.
3. Create an Email Template with `{{from_name}}`, `{{from_email}}`, `{{selected_service}}`, `{{message}}` and note the **Template ID**.
4. Copy your **Public Key** from Account settings.
5. Update `config/config.js`:
```javascript
EMAILJS: {
    PUBLIC_KEY: "YOUR_ACTUAL_PUBLIC_KEY",
    SERVICE_ID: "YOUR_ACTUAL_SERVICE_ID",
    TEMPLATE_ID: "YOUR_ACTUAL_TEMPLATE_ID"
}
```

---

## Adding Projects & Creative Media

- **Projects**: Add objects to `PROJECTS_DATA` inside `assets/js/projects.js`.
- **Graphic Design**: Add objects to `GRAPHIC_DESIGN_DATA` inside `assets/js/creative.js`.
- **AI Videos**: Add objects to `AI_VIDEO_DATA` inside `assets/js/creative.js`.

---

## Free Deployment Guide

This is a pure client-side application. Deploy for **100% free** on:
- **GitHub Pages**: Push repo, enable Pages under Repository Settings > Pages.
- **Netlify**: Drag and drop the `portfolio` folder to [https://app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel**: Import repository and click Deploy.

---

## License & Copyright
© 2026 Abdullah Bin Tabassam. All rights reserved.
