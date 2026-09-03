/* =========================================================
   AL-HARAMAIN MODEL MADRASA
   Simple Premium Website
   JavaScript Configuration + Functions

   এখানে শুধু আপনার তথ্য ও Google Drive link পরিবর্তন করবেন।
   Firebase প্রয়োজন নেই।
========================================================= */


/* =========================================================
   1. ★★★ MAIN SETTINGS ★★★
========================================================= */

const SITE_CONFIG = {

    /* ---------- Madrasa Information ---------- */

    madrasaNameBn: "আল-হারামাইন মডেল মাদ্রাসা",

    madrasaNameEn: "Al Haramain Model Madrasa",

    tagline:
        "আদর্শ শিক্ষা, নৈতিকতা ও ইসলামী মূল্যবোধের সমন্বয়ে সুন্দর ভবিষ্যৎ গড়ার প্রত্যয়।",


    /* ---------- Logo ---------- */

    /*
       Google Drive share link এখানে বসান।

       Example:
       https://drive.google.com/file/d/FILE_ID/view?usp=sharing
    */

    logo:
        "PASTE_GOOGLE_DRIVE_LOGO_LINK_HERE",


    /* =====================================================
       2. ★★★ HERO SLIDER IMAGES ★★★

       এখানে ৫টি Google Drive image link দিন।
    ===================================================== */

    heroImages: [

        "PASTE_GOOGLE_DRIVE_HERO_IMAGE_1_HERE",

        "PASTE_GOOGLE_DRIVE_HERO_IMAGE_2_HERE",

        "PASTE_GOOGLE_DRIVE_HERO_IMAGE_3_HERE",

        "PASTE_GOOGLE_DRIVE_HERO_IMAGE_4_HERE",

        "PASTE_GOOGLE_DRIVE_HERO_IMAGE_5_HERE"

    ],


    /* =====================================================
       3. ★★★ DIRECTOR / PRINCIPAL ★★★
    ===================================================== */

    director: {

        name: "মুহতামিম / পরিচালক",

        designation: "পরিচালক",

        image:
            "PASTE_GOOGLE_DRIVE_DIRECTOR_IMAGE_LINK_HERE",

        message:
            "আমাদের লক্ষ্য হলো শিক্ষার্থীদের কুরআন-সুন্নাহর আলোকে নৈতিক, আদর্শ ও যোগ্য মানুষ হিসেবে গড়ে তোলা। আধুনিক শিক্ষার পাশাপাশি ইসলামী মূল্যবোধ, শৃঙ্খলা ও মানবিক গুণাবলির বিকাশের মাধ্যমে আমরা একটি সুন্দর ভবিষ্যৎ প্রজন্ম গড়ে তুলতে চাই।"

    },


    /* =====================================================
       4. ★★★ ACHIEVEMENTS ★★★

       ৩–৫টি অর্জন সরাসরি এখানে লিখে রাখতে পারবেন।
       Firebase/Admin Panel প্রয়োজন নেই।
    ===================================================== */

    achievements: [

        {
            number: "০১",
            title: "সুশৃঙ্খল শিক্ষা পরিবেশ",
            description:
                "ইসলামী আদর্শ ও আধুনিক শিক্ষার সমন্বয়ে সুন্দর ও সুশৃঙ্খল শিক্ষা পরিবেশ।",
            image:
                "PASTE_GOOGLE_DRIVE_ACHIEVEMENT_IMAGE_1_HERE"
        },

        {
            number: "০২",
            title: "অভিজ্ঞ শিক্ষক মণ্ডলী",
            description:
                "শিক্ষার্থীদের সঠিক দিকনির্দেশনা ও যত্নের জন্য দক্ষ ও দায়িত্বশীল শিক্ষকবৃন্দ।",
            image:
                "PASTE_GOOGLE_DRIVE_ACHIEVEMENT_IMAGE_2_HERE"
        },

        {
            number: "০৩",
            title: "ইসলামী ও নৈতিক শিক্ষা",
            description:
                "কুরআন-সুন্নাহর আলোকে শিক্ষার্থীদের নৈতিক ও আদর্শ জীবন গঠনে গুরুত্ব প্রদান।",
            image:
                "PASTE_GOOGLE_DRIVE_ACHIEVEMENT_IMAGE_3_HERE"
        },

        {
            number: "০৪",
            title: "হিফজ ও কুরআন শিক্ষা",
            description:
                "কুরআন মাজীদ সহীহভাবে শিক্ষা ও মুখস্থ করার জন্য বিশেষ ব্যবস্থা।",
            image:
                "PASTE_GOOGLE_DRIVE_ACHIEVEMENT_IMAGE_4_HERE"
        },

        {
            number: "০৫",
            title: "আদর্শ প্রজন্ম গড়ার প্রত্যয়",
            description:
                "জ্ঞান, চরিত্র, শৃঙ্খলা ও মানবিক মূল্যবোধসম্পন্ন প্রজন্ম গড়ে তোলাই আমাদের অঙ্গীকার।",
            image:
                "PASTE_GOOGLE_DRIVE_ACHIEVEMENT_IMAGE_5_HERE"
        }

    ],


    /* =====================================================
       5. ★★★ GALLERY ★★★

       যতগুলো ছবি চান এখানে রাখতে পারবেন।
    ===================================================== */

    galleryImages: [

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_1_HERE",

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_2_HERE",

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_3_HERE",

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_4_HERE",

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_5_HERE",

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_6_HERE",

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_7_HERE",

        "PASTE_GOOGLE_DRIVE_GALLERY_IMAGE_8_HERE"

    ],


    /* =====================================================
       6. ★★★ WHATSAPP ★★★
    ===================================================== */

    /*
       ব্যক্তিগত WhatsApp নম্বর:
       01884197276

       Group link-এ আপনার WhatsApp group-এর আসল invite link বসাবেন।
    */

    whatsapp: {

        phone: "01884197276",

        groupLink:
            "PASTE_YOUR_WHATSAPP_GROUP_INVITE_LINK_HERE"

    },


    /* =====================================================
       7. ★★★ CONTACT INFORMATION ★★★
    ===================================================== */

    contact: {

        phone: "01884197276",

        email: "",

        address:
            "আপনার মাদ্রাসার সম্পূর্ণ ঠিকানা এখানে লিখুন",

        /*
           Google Maps Embed URL এখানে বসাতে পারবেন।

           Google Maps → Share → Embed a map
           থেকে iframe-এর src URL paste করুন।
        */

        mapEmbed:
            "PASTE_GOOGLE_MAPS_EMBED_URL_HERE"

    },


    /* =====================================================
       8. ★★★ SOCIAL MEDIA ★★★
    ===================================================== */

    social: {

        facebook: "",

        youtube: "",

        instagram: ""

    },


    /* =====================================================
       9. ★★★ FOOTER DEVELOPER ★★★
    ===================================================== */

    developer: {

        name: "AKTER HOSSSEN",

        whatsapp: "01884197276"

    }

};


/* =========================================================
   GOOGLE DRIVE IMAGE CONVERTER
========================================================= */

/*
   আপনি যেকোনো সাধারণ Google Drive share link দিলেই
   এটি automatically thumbnail image URL বানাবে।

   Supported:

   /file/d/FILE_ID/view
   /open?id=FILE_ID
   /uc?id=FILE_ID
   /thumbnail?id=FILE_ID
   ?id=FILE_ID
*/

function driveImageUrl(url, size = "w1600") {

    if (!url) return "";

    url = String(url).trim();

    if (!url) return "";

    /*
       Placeholder হলে image দেখাব না।
    */

    if (
        url.includes("PASTE_") ||
        url.includes("YOUR_") ||
        url.includes("_HERE")
    ) {
        return "";
    }


    /*
       যদি Google Drive না হয়,
       তাহলে URL 그대로 ব্যবহার করবে।
    */

    if (!url.includes("drive.google.com")) {
        return url;
    }


    let fileId = "";


    /* /file/d/FILE_ID/ */

    let match = url.match(/\/file\/d\/([^\/?]+)/);

    if (match) {
        fileId = match[1];
    }


    /* ?id=FILE_ID */

    if (!fileId) {

        match = url.match(/[?&]id=([^&]+)/);

        if (match) {
            fileId = match[1];
        }

    }


    /* /uc?id=FILE_ID */

    if (!fileId) {

        match = url.match(/\/uc\?id=([^&]+)/);

        if (match) {
            fileId = match[1];
        }

    }


    /* /thumbnail?id=FILE_ID */

    if (!fileId) {

        match = url.match(/\/thumbnail\?id=([^&]+)/);

        if (match) {
            fileId = match[1];
        }

    }


    if (!fileId) {
        return url;
    }


    return `https://drive.google.com/thumbnail?id=${fileId}&sz=${size}`;
}


/* =========================================================
   SAFE TEXT
========================================================= */

function setText(selector, text) {

    const element = document.querySelector(selector);

    if (!element) return;

    element.textContent = text || "";

}


/* =========================================================
   SET IMAGE
========================================================= */

function setImage(selector, imageUrl, alt = "") {

    const element = document.querySelector(selector);

    if (!element) return;

    const finalUrl = driveImageUrl(imageUrl);

    if (!finalUrl) {

        element.style.display = "none";

        return;
    }

    element.src = finalUrl;

    element.alt = alt;

}


/* =========================================================
   WHATSAPP LINK
========================================================= */

function whatsappNumberUrl(number) {

    if (!number) return "#";

    let clean = number.replace(/\D/g, "");

    /*
       Bangladesh:
       01884197276
       →
       8801884197276
    */

    if (clean.startsWith("0")) {
        clean = "880" + clean.substring(1);
    }

    return `https://wa.me/${clean}`;
}


/* =========================================================
   APPLY BASIC INFORMATION
========================================================= */

function applySiteInformation() {

    /* Madrasa Name */

    document
        .querySelectorAll("[data-madrasa-name]")
        .forEach(element => {

            element.textContent = SITE_CONFIG.madrasaNameBn;

        });


    /* English Name */

    document
        .querySelectorAll("[data-madrasa-name-en]")
        .forEach(element => {

            element.textContent = SITE_CONFIG.madrasaNameEn;

        });


    /* Tagline */

    document
        .querySelectorAll("[data-tagline]")
        .forEach(element => {

            element.textContent = SITE_CONFIG.tagline;

        });


    /* Logo */

    document
        .querySelectorAll("[data-logo]")
        .forEach(element => {

            const image = driveImageUrl(
                SITE_CONFIG.logo,
                "w500"
            );

            if (image) {
                element.src = image;
            }

        });


    /* Address */

    document
        .querySelectorAll("[data-address]")
        .forEach(element => {

            element.textContent =
                SITE_CONFIG.contact.address;

        });


    /* Phone */

    document
        .querySelectorAll("[data-phone]")
        .forEach(element => {

            element.textContent =
                SITE_CONFIG.contact.phone;

        });


    /* Email */

    document
        .querySelectorAll("[data-email]")
        .forEach(element => {

            element.textContent =
                SITE_CONFIG.contact.email;

        });

}


/* =========================================================
   DIRECTOR SECTION
========================================================= */

function renderDirector() {

    const image =
        driveImageUrl(
            SITE_CONFIG.director.image,
            "w1000"
        );


    document
        .querySelectorAll("[data-director-image]")
        .forEach(element => {

            if (image) {

                element.src = image;

                element.alt =
                    SITE_CONFIG.director.name;

            } else {

                element.style.display = "none";

            }

        });


    document
        .querySelectorAll("[data-director-name]")
        .forEach(element => {

            element.textContent =
                SITE_CONFIG.director.name;

        });


    document
        .querySelectorAll("[data-director-designation]")
        .forEach(element => {

            element.textContent =
                SITE_CONFIG.director.designation;

        });


    document
        .querySelectorAll("[data-director-message]")
        .forEach(element => {

            element.textContent =
                SITE_CONFIG.director.message;

        });

}


/* =========================================================
   HERO SLIDER
========================================================= */

function renderHeroSlider() {

    const slider =
        document.querySelector("#heroSlider");

    if (!slider) return;


    const images =
        SITE_CONFIG.heroImages
            .map(url => driveImageUrl(url, "w1800"))
            .filter(Boolean);


    if (!images.length) return;


    slider.innerHTML = "";


    images.forEach((image, index) => {

        const slide =
            document.createElement("div");

        slide.className =
            "hero-slide";


        if (index === 0) {
            slide.classList.add("active");
        }


        slide.innerHTML = `
            <img
                class="hero-image"
                src="${image}"
                alt="${SITE_CONFIG.madrasaNameBn}"
            >
            <div class="hero-overlay"></div>
        `;


        slider.appendChild(slide);

    });


    createHeroDots(images.length);

    startHeroSlider();

}


/* =========================================================
   HERO DOTS
========================================================= */

let heroCurrent = 0;

let heroTimer = null;


function createHeroDots(total) {

    const dotsContainer =
        document.querySelector("#heroDots");

    if (!dotsContainer) return;


    dotsContainer.innerHTML = "";


    for (let i = 0; i < total; i++) {

        const dot =
            document.createElement("button");

        dot.className = "slider-dot";


        if (i === 0) {
            dot.classList.add("active");
        }


        dot.setAttribute(
            "aria-label",
            `Slide ${i + 1}`
        );


        dot.addEventListener("click", () => {

            showHeroSlide(i);

            restartHeroSlider();

        });


        dotsContainer.appendChild(dot);

    }

}


function showHeroSlide(index) {

    const slides =
        document.querySelectorAll(".hero-slide");

    const dots =
        document.querySelectorAll(".slider-dot");


    if (!slides.length) return;


    if (index >= slides.length) {
        index = 0;
    }


    if (index < 0) {
        index = slides.length - 1;
    }


    heroCurrent = index;


    slides.forEach((slide, i) => {

        slide.classList.toggle(
            "active",
            i === index
        );

    });


    dots.forEach((dot, i) => {

        dot.classList.toggle(
            "active",
            i === index
        );

    });

}


function startHeroSlider() {

    clearInterval(heroTimer);


    heroTimer = setInterval(() => {

        showHeroSlide(heroCurrent + 1);

    }, 5000);

}


function restartHeroSlider() {

    startHeroSlider();

}


/* =========================================================
   HERO PREVIOUS / NEXT BUTTON
========================================================= */

function setupHeroButtons() {

    const next =
        document.querySelector(
            ".slider-next"
        );

    const previous =
        document.querySelector(
            ".slider-prev"
        );


    if (next) {

        next.addEventListener(
            "click",
            () => {

                showHeroSlide(
                    heroCurrent + 1
                );

                restartHeroSlider();

            }
        );

    }


    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                showHeroSlide(
                    heroCurrent - 1
                );

                restartHeroSlider();

            }
        );

    }

}


/* =========================================================
   ACHIEVEMENTS
========================================================= */

function renderAchievements() {

    const container =
        document.querySelector(
            "#achievementList"
        );


    if (!container) return;


    container.innerHTML = "";


    SITE_CONFIG.achievements
        .forEach((item, index) => {

            const image =
                driveImageUrl(
                    item.image,
                    "w1000"
                );


            const card =
                document.createElement("article");

            card.className =
                "achievement-card";


            card.innerHTML = `

                ${
                    image
                    ? `
                    <div class="achievement-image">
                        <img
                            src="${image}"
                            alt="${item.title}"
                            loading="lazy"
                        >
                    </div>
                    `
                    : ""
                }

                <div class="achievement-content">

                    <span class="achievement-number">
                        ${item.number || String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.description}
                    </p>

                </div>

            `;


            container.appendChild(card);

        });

}


/* =========================================================
   GALLERY
========================================================= */

function renderGallery() {

    const container =
        document.querySelector(
            "#galleryList"
        );


    if (!container) return;


    container.innerHTML = "";


    SITE_CONFIG.galleryImages
        .forEach((url, index) => {

            const image =
                driveImageUrl(url, "w1200");


            if (!image) return;


            const item =
                document.createElement("button");


            item.type = "button";

            item.className =
                "gallery-item";


            item.innerHTML = `

                <img
                    src="${image}"
                    alt="${SITE_CONFIG.madrasaNameBn} - ছবি ${index + 1}"
                    loading="lazy"
                >

                <span class="gallery-overlay">
                    <span>+</span>
                </span>

            `;


            item.addEventListener(
                "click",
                () => openLightbox(image)
            );


            container.appendChild(item);

        });

}


/* =========================================================
   LIGHTBOX
========================================================= */

function openLightbox(image) {

    const lightbox =
        document.querySelector(
            "#lightbox"
        );


    const lightboxImage =
        document.querySelector(
            "#lightboxImage"
        );


    if (!lightbox || !lightboxImage) {
        return;
    }


    lightboxImage.src = image;

    lightbox.classList.add("active");

    document.body.classList.add(
        "lightbox-open"
    );

}


function closeLightbox() {

    const lightbox =
        document.querySelector(
            "#lightbox"
        );


    if (!lightbox) return;


    lightbox.classList.remove(
        "active"
    );


    document.body.classList.remove(
        "lightbox-open"
    );

}


function setupLightbox() {

    const closeButton =
        document.querySelector(
            "#lightboxClose"
        );


    const lightbox =
        document.querySelector(
            "#lightbox"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );

    }


    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target === lightbox
                ) {

                    closeLightbox();

                }

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape"
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   WHATSAPP
========================================================= */

function setupWhatsApp() {

    const personalUrl =
        whatsappNumberUrl(
            SITE_CONFIG.whatsapp.phone
        );


    /*
       ব্যক্তিগত WhatsApp
    */

    docume
