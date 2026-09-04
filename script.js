/* =========================================================
   AL-HARAMAIN MODEL MADRASA
   Main JavaScript
   No Firebase • No Admin • No Result Search
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  /* =======================================================
     SITE CONFIG
     -------------------------------------------------------
     Google Drive-এর share link সরাসরি এখানে বসাতে পারবেন।
     Script নিজে থেকে displayable thumbnail URL বানাবে।
     ======================================================= */

  const SITE_CONFIG = {
    madrasa: {
      nameBn: "আল-হারামাইন মডেল মাদ্রাসা",
      nameEn: "Al Haramain Model Madrasa",

      tagline:
        "আধুনিক শিক্ষা, নৈতিকতা ও ইসলামী আদর্শের সমন্বয়ে একটি সুন্দর ভবিষ্যৎ গড়ার প্রত্যয়।",

      logo:
        "https://drive.google.com/thumbnail?id=1sEPJXs7VAlU3LVMT2cSXeEytQ8Cc870X&sz=w500",

      established: "২০১৩",
      location: "সোনার পাড়া, উখিয়া, কক্সবাজার",

      phone: "01884197276",
      email: "alharamainidealnoraniacademy@gmail.com",

      address:
        "আল-হারামাইন মডেল মাদ্রাসা, সোনার পাড়া, উখিয়া, কক্সবাজার"
    },

    /* =====================================================
       HERO SLIDER
       Google Drive share links এখানে বসাবেন
       ===================================================== */

    heroImages: [
      {
        image:
          "https://drive.google.com/thumbnail?id=1sEPJXs7VAlU3LVMT2cSXeEytQ8Cc870X&sz=w1600",
        title: "আল-হারামাইন মডেল মাদ্রাসা",
        subtitle:
          "ইসলামী মূল্যবোধ ও আধুনিক শিক্ষার সমন্বয়ে আলোকিত প্রজন্ম গড়ার প্রত্যয়।"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1YbDQtjP-DY1ogLM3w5_EC4WcyQt6qStB&sz=w1600",
        title: "জ্ঞান • নৈতিকতা • আদর্শ",
        subtitle:
          "শিক্ষার্থীদের জ্ঞান, চরিত্র ও নেতৃত্বের গুণাবলি বিকাশে আমাদের নিরলস প্রচেষ্টা।"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1GlKbDIjmjqTJ0kybdPyKXeZsswPInAxw&sz=w1600",
        title: "সুন্দর পরিবেশে শিক্ষা",
        subtitle:
          "নিরাপদ, পরিচ্ছন্ন ও শিক্ষাবান্ধব পরিবেশে মানসম্মত শিক্ষা কার্যক্রম।"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1zGEYElVhA1R_ngt4iqjpjfzsuqRt9bK0&sz=w1600",
        title: "ভবিষ্যতের জন্য প্রস্তুতি",
        subtitle:
          "দ্বীনি শিক্ষার পাশাপাশি প্রয়োজনীয় আধুনিক জ্ঞান ও দক্ষতা অর্জনের সুযোগ।"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1mAlWegRbwWaT14-ZnZV2MHYtWF2DQBBR&sz=w1600",
        title: "আমাদের অঙ্গীকার",
        subtitle:
          "প্রতিটি শিক্ষার্থীর সম্ভাবনাকে বিকশিত করে একটি আলোকিত সমাজ গড়ে তোলা।"
      }
    ],

    /* =====================================================
       DIRECTOR
       ===================================================== */

    director: {
      name: "মাওঃ মোঃ জুনাইদ বোগদাদী",
      designation: "পরিচালক",
      image:
        "https://drive.google.com/thumbnail?id=1sEPJXs7VAlU3LVMT2cSXeEytQ8Cc870X&sz=w800",

      message:
        "শিক্ষা মানুষের জীবনকে আলোকিত করে। আমাদের লক্ষ্য হলো প্রতিটি শিক্ষার্থীকে ইসলামী মূল্যবোধ, নৈতিকতা, জ্ঞান ও দক্ষতার সমন্বয়ে একজন আদর্শ মানুষ হিসেবে গড়ে তোলা।"
    },

    /* =====================================================
       ACHIEVEMENTS
       ===================================================== */

    achievements: [
      {
        title: "শিক্ষার্থীদের ধারাবাহিক সাফল্য",
        description:
          "শিক্ষার্থীরা বিভিন্ন শ্রেণি ও পাবলিক পরীক্ষায় নিয়মিতভাবে ভালো ফলাফল অর্জন করছে।",
        image:
          "https://drive.google.com/thumbnail?id=1YbDQtjP-DY1ogLM3w5_EC4WcyQt6qStB&sz=w1200"
      },

      {
        title: "হিফজ ও কুরআন শিক্ষায় অগ্রগতি",
        description:
          "কুরআন শিক্ষা, নাজেরা ও হিফজ কার্যক্রমে শিক্ষার্থীদের জন্য বিশেষ গুরুত্ব দেওয়া হয়।",
        image:
          "https://drive.google.com/thumbnail?id=1GlKbDIjmjqTJ0kybdPyKXeZsswPInAxw&sz=w1200"
      },

      {
        title: "নৈতিকতা ও শৃঙ্খলা",
        description:
          "শিক্ষার্থীদের আদব, আখলাক, শৃঙ্খলা ও সামাজিক দায়বদ্ধতার প্রতি বিশেষভাবে উৎসাহিত করা হয়।",
        image:
          "https://drive.google.com/thumbnail?id=1zGEYElVhA1R_ngt4iqjpjfzsuqRt9bK0&sz=w1200"
      },

      {
        title: "সহশিক্ষা কার্যক্রম",
        description:
          "শিক্ষার্থীদের সৃজনশীলতা ও আত্মবিশ্বাস বৃদ্ধির জন্য বিভিন্ন সহশিক্ষা কার্যক্রম পরিচালনা করা হয়।",
        image:
          "https://drive.google.com/thumbnail?id=1mAlWegRbwWaT14-ZnZV2MHYtWF2DQBBR&sz=w1200"
      },

      {
        title: "আধুনিক শিক্ষার সমন্বয়",
        description:
          "দ্বীনি শিক্ষার পাশাপাশি সময়োপযোগী সাধারণ শিক্ষা ও প্রযুক্তিগত জ্ঞান অর্জনে গুরুত্ব দেওয়া হয়।",
        image:
          "https://drive.google.com/thumbnail?id=1eAGdWLkRvvwvU6Y_ElfXwP-YkVK6tOrz&sz=w1200"
      }
    ],

    /* =====================================================
       GALLERY
       ===================================================== */

    gallery: [
      {
        image:
          "https://drive.google.com/thumbnail?id=1sEPJXs7VAlU3LVMT2cSXeEytQ8Cc870X&sz=w1600",
        title: "মাদ্রাসা ক্যাম্পাস"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1YbDQtjP-DY1ogLM3w5_EC4WcyQt6qStB&sz=w1600",
        title: "শিক্ষার্থীদের কার্যক্রম"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1GlKbDIjmjqTJ0kybdPyKXeZsswPInAxw&sz=w1600",
        title: "শিক্ষা কার্যক্রম"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1zGEYElVhA1R_ngt4iqjpjfzsuqRt9bK0&sz=w1600",
        title: "ক্লাসরুম"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1mAlWegRbwWaT14-ZnZV2MHYtWF2DQBBR&sz=w1600",
        title: "শিক্ষার্থীদের মুহূর্ত"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1eAGdWLkRvvwvU6Y_ElfXwP-YkVK6tOrz&sz=w1600",
        title: "মাদ্রাসার পরিবেশ"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1YbDQtjP-DY1ogLM3w5_EC4WcyQt6qStB&sz=w1600",
        title: "শিক্ষা ও শৃঙ্খলা"
      },

      {
        image:
          "https://drive.google.com/thumbnail?id=1GlKbDIjmjqTJ0kybdPyKXeZsswPInAxw&sz=w1600",
        title: "আমাদের কার্যক্রম"
      }
    ],

    /* =====================================================
       WHATSAPP
       ===================================================== */

    whatsapp: {
      personal: "8801884197276",

      group:
        "https://chat.whatsapp.com/REPLACE_WITH_YOUR_GROUP_LINK"
    },

    /* =====================================================
       SOCIAL / CONTACT
       ===================================================== */

    social: {
      facebook:
        "https://www.facebook.com/",

      youtube:
        "https://www.youtube.com/",

      whatsapp:
        "https://wa.me/8801884197276"
    },

    /* =====================================================
       GOOGLE MAP
       ===================================================== */

    map: {
      embed:
        "https://maps.app.goo.gl/WeTLJ1xUvPcTFkh3A"
    },

    /* =====================================================
       DEVELOPER
       ===================================================== */

    developer: {
      name: "AKTER HOSSEN",
      whatsapp: "8801884197276"
    }
  };


  /* =======================================================
     HELPER FUNCTIONS
     ======================================================= */

  function $(selector, parent = document) {
    return parent.querySelector(selector);
  }

  function $$(selector, parent = document) {
    return Array.from(parent.querySelectorAll(selector));
  }

  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }


  /* =======================================================
     GOOGLE DRIVE IMAGE CONVERTER
     -------------------------------------------------------
     Supports:

     https://drive.google.com/file/d/FILE_ID/view
     https://drive.google.com/open?id=FILE_ID
     https://drive.google.com/uc?id=FILE_ID
     https://drive.google.com/thumbnail?id=FILE_ID

     ======================================================= */

  function getGoogleDriveId(url) {
    if (!url || typeof url !== "string") {
      return null;
    }

    const patterns = [
      /\/file\/d\/([a-zA-Z0-9_-]+)/,
      /[?&]id=([a-zA-Z0-9_-]+)/,
      /\/d\/([a-zA-Z0-9_-]+)/
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);

      if (match && match[1]) {
        return match[1];
      }
    }

    return null;
  }


  function driveImage(url, size = "w1600") {
    if (!url) {
      return "";
    }

    const cleanURL = String(url).trim();

    const id = getGoogleDriveId(cleanURL);

    if (!id) {
      return cleanURL;
    }

    return `https://drive.google.com/thumbnail?id=${encodeURIComponent(
      id
    )}&sz=${size}`;
  }


  function prepareDriveImages() {
    $$("img").forEach((img) => {
      const source =
        img.dataset.drive ||
        img.dataset.image ||
        img.getAttribute("src");

      if (!source) {
        return;
      }

      const converted = driveImage(source);

      if (converted) {
        img.src = converted;
      }

      img.addEventListener(
        "error",
        () => {
          img.classList.add("image-error");

          /*
           * Prevent infinite error loops.
           */
          if (!img.dataset.errorHandled) {
            img.dataset.errorHandled = "true";

            img.src =
              "data:image/svg+xml;charset=UTF-8," +
              encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg"
                     width="800"
                     height="500"
                     viewBox="0 0 800 500">
                  <rect width="800" height="500" fill="#eef2f5"/>
                  <text x="400"
                        y="245"
                        text-anchor="middle"
                        font-family="Arial"
                        font-size="26"
                        fill="#64748b">
                    Image unavailable
                  </text>
                </svg>
              `);
          }
        },
        { once: false }
      );
    });
  }


  /* =======================================================
     BASIC SITE INFORMATION
     ======================================================= */

  function setText(selector, value) {
    const element = $(selector);

    if (element && value !== undefined && value !== null) {
      element.textContent = value;
    }
  }


  function setAttribute(selector, attribute, value) {
    const element = $(selector);

    if (element && value) {
      element.setAttribute(attribute, value);
    }
  }


  function setSiteInformation() {
    setText("[data-madrasa-name]", SITE_CONFIG.madrasa.nameBn);
    setText("[data-madrasa-name-bn]", SITE_CONFIG.madrasa.nameBn);
    setText("[data-madrasa-name-en]", SITE_CONFIG.madrasa.nameEn);

    setText("[data-madrasa-tagline]", SITE_CONFIG.madrasa.tagline);
    setText("[data-established]", SITE_CONFIG.madrasa.established);
    setText("[data-location]", SITE_CONFIG.madrasa.location);

    setText("[data-phone]", SITE_CONFIG.madrasa.phone);
    setText("[data-email]", SITE_CONFIG.madrasa.email);
    setText("[data-address]", SITE_CONFIG.madrasa.address);

    setAttribute(
      "[data-logo]",
      "src",
      driveImage(SITE_CONFIG.madrasa.logo, "w500")
    );
  }


  /* =======================================================
     HERO SLIDER
     ======================================================= */

  let currentSlide = 0;
  let heroTimer = null;
  let heroIsPaused = false;

  function renderHero() {
    const slider = $("#heroSlider");

    if (!slider) {
      return;
    }

    const existingSlides = $$(".hero-slide", slider);

    /*
     * If HTML already contains hero slides,
     * only prepare images and don't overwrite them.
     */
    if (existingSlides.length > 0) {
      existingSlides.forEach((slide) => {
        const image = $(".hero-image", slide);

        if (image) {
          image.src = driveImage(
            image.dataset.drive ||
              image.dataset.image ||
              image.getAttribute("src"),
            "w1600"
          );
        }
      });

      setupExistingHero();
      return;
    }

    slider.innerHTML = SITE_CONFIG.heroImages
      .map(
        (item, index) => `
          <article class="hero-slide ${
            index === 0 ? "active" : ""
          }" data-slide="${index}">

            <img
              class="hero-image"
              src="${escapeHTML(driveImage(item.image, "w1600"))}"
              alt="${escapeHTML(item.title)}"
              loading="${index === 0 ? "eager" : "lazy"}"
            >

            <div class="hero-overlay"></div>

            <div class="hero-content">

              <span class="hero-badge">
                ${escapeHTML(SITE_CONFIG.madrasa.nameBn)}
              </span>

              <h1>${escapeHTML(item.title)}</h1>

              <p>${escapeHTML(item.subtitle)}</p>

              <div class="hero-buttons">

                <a
                  href="#admission"
                  class="btn btn-primary">
                  ভর্তি তথ্য
                </a>

                <a
                  href="${escapeHTML(SITE_CONFIG.whatsapp.group)}"
                  class="btn btn-outline"
                  target="_blank"
                  rel="noopener">
                  আমাদের সাথে যোগাযোগ
                </a>

              </div>

            </div>
          </article>
        `
      )
      .join("");

    setupHeroControls();
    updateHero();
  }


  function setupExistingHero() {
    setupHeroControls();
    updateHero();
  }


  function setupHeroControls() {
    const slider = $("#heroSlider");

    if (!slider) {
      return;
    }

    const slides = $$(".hero-slide", slider);

    if (slides.length <= 1) {
      return;
    }

    const dotsContainer = $("#heroDots");

    if (dotsContainer) {
      dotsContainer.innerHTML = slides
        .map(
          (_, index) => `
            <button
              class="slider-dot ${
                index === 0 ? "active" : ""
              }"
              type="button"
              aria-label="Slide ${index + 1}"
              data-slide-to="${index}">
            </button>
          `
        )
        .join("");

      $$(".slider-dot", dotsContainer).forEach((dot) => {
        dot.addEventListener("click", () => {
          const index = Number(dot.dataset.slideTo);

          if (!Number.isNaN(index)) {
            goToSlide(index);
            restartHeroAutoplay();
          }
        });
      });
    }

    const previous = $(".slider-prev");
    const next = $(".slider-next");

    if (previous) {
      previous.addEventListener("click", () => {
        goToSlide(currentSlide - 1);
        restartHeroAutoplay();
      });
    }

    if (next) {
      next.addEventListener("click", () => {
        goToSlide(currentSlide + 1);
        restartHeroAutoplay();
      });
    }

    slider.addEventListener("mouseenter", () => {
      heroIsPaused = true;
    });

    slider.addEventListener("mouseleave", () => {
      heroIsPaused = false;
    });

    slider.addEventListener(
      "touchstart",
      () => {
        heroIsPaused = true;
      },
      { passive: true }
    );

    slider.addEventListener(
      "touchend",
      () => {
        setTimeout(() => {
          heroIsPaused = false;
        }, 1500);
      },
      { passive: true }
    );

    startHeroAutoplay();
  }


  function updateHero() {
    const slider = $("#heroSlider");

    if (!slider) {
      return;
    }

    const slides = $$(".hero-slide", slider);

    if (!slides.length) {
      return;
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentSlide);
      slide.setAttribute(
        "aria-hidden",
        index === currentSlide ? "false" : "true"
      );
    });

    $$(".slider-dot").forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
      dot.setAttribute(
        "aria-current",
        index === currentSlide ? "true" : "false"
      );
    });
  }


  function goToSlide(index) {
    const slider = $("#heroSlider");

    if (!slider) {
      return;
    }

    const slides = $$(".hero-slide", slider);

    if (!slides.length) {
      return;
    }

    currentSlide = index;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    updateHero();
  }


  function startHeroAutoplay() {
    stopHeroAutoplay();

    heroTimer = window.setInterval(() => {
      if (!heroIsPaused && !document.hidden) {
        goToSlide(currentSlide + 1);
      }
    }, 5500);
  }


  function stopHeroAutoplay() {
    if (heroTimer) {
      clearInterval(heroTimer);
      heroTimer = null;
    }
  }


  function restartHeroAutoplay() {
    startHeroAutoplay();
  }


  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopHeroAutoplay();
    } else {
      startHeroAutoplay();
    }
  });


  /* =======================================================
     DIRECTOR
     ======================================================= */

  function setDirector() {
    const image = $("[data-director-image]");

    if (image) {
      image.src = driveImage(
        SITE_CONFIG.director.image,
        "w800"
      );

      image.alt = SITE_CONFIG.director.name;
    }

    setText(
      "[data-director-name]",
      SITE_CONFIG.director.name
    );

    setText(
      "[data-director-designation]",
      SITE_CONFIG.director.designation
    );

    setText(
      "[data-director-message]",
      SITE_CONFIG.director.message
    );
  }


  /* =======================================================
     ACHIEVEMENTS
     ======================================================= */

  function renderAchievements() {
    const container = $("#achievementList");

    if (!container) {
      return;
    }

    /*
     * If HTML already contains cards,
     * don't overwrite manually written content.
     */
    if (container.children.length > 0) {
      prepareDriveImages();
      return;
    }

    container.innerHTML = SITE_CONFIG.achievements
      .map(
        (item) => `
          <article class="achievement-card reveal">

            <div class="achievement-image">

              <img
                src="${escapeHTML(
                  driveImage(item.image, "w1200")
                )}"
                alt="${escapeHTML(item.title)}"
                loading="lazy"
              >

            </div>

            <div class="achievement-content">

              <h3>
                ${escapeHTML(item.title)}
              </h3>

              <p>
                ${escapeHTML(item.description)}
              </p>

            </div>

          </article>
        `
      )
      .join("");
  }


  /* =======================================================
     GALLERY
     ======================================================= */

  let galleryImages = [];
  let currentGalleryIndex = 0;

  function renderGallery() {
    const container = $("#galleryList");

    if (!container) {
      return;
    }

    /*
     * Use existing HTML gallery if present.
     */
    if (container.children.length > 0) {
      const existingImages = $$("img", container);

      galleryImages = existingImages.map((img) => ({
        src: driveImage(
          img.dataset.drive ||
            img.dataset.image ||
            img.getAttribute("src"),
          "w1600"
        ),
        title:
          img.dataset.title ||
          img.alt ||
          "মাদ্রাসার ছবি"
      }));

      existingImages.forEach((img, index) => {
        img.dataset.galleryIndex = String(index);
      });

      attachGalleryEvents();
      return;
    }

    galleryImages = SITE_CONFIG.gallery.map((item) => ({
      src: driveImage(item.image, "w1600"),
      title: item.title
    }));

    container.innerHTML = galleryImages
      .map(
        (item, index) => `
          <button
            class="gallery-item ${
              index === 0 ? "gallery-item-large" : ""
            } reveal"
            type="button"
            data-gallery-index="${index}"
            aria-label="${escapeHTML(
              item.title
            )}">

            <img
              src="${escapeHTML(item.src)}"
              alt="${escapeHTML(item.title)}"
              loading="lazy"
            >

            <span class="gallery-overlay">
              <span>
                ${escapeHTML(item.title)}
              </span>
            </span>

          </button>
        `
      )
      .join("");

    attachGalleryEvents();
  }


  function attachGalleryEvents() {
    $$(".gallery-item").forEach((item) => {
      item.addEventListener("click", () => {
        const index = Number(item.dataset.galleryIndex);

        if (!Number.isNaN(index)) {
          openLightbox(index);
        }
      });
    });

    $$("[data-gallery-index]").forEach((item) => {
      if (item.tagName !== "BUTTON") {
        item.addEventListener("click", () => {
          const index = Number(item.dataset.galleryIndex);

          if (!Number.isNaN(index)) {
            openLightbox(index);
          }
        });
      }
    });
  }


  /* =======================================================
     LIGHTBOX
     ======================================================= */

  function getLightboxElements() {
    return {
      lightbox: $("#lightbox"),
      image: $("#lightboxImage"),
      close: $("#lightboxClose"),
      previous: $(".lightbox-prev"),
      next: $(".lightbox-next")
    };
  }


  function openLightbox(index) {
    const elements = getLightboxElements();

    if (!elements.lightbox) {
      return;
    }

    if (!galleryImages.length) {
      return;
    }

    currentGalleryIndex = index;

    if (currentGalleryIndex >= galleryImages.length) {
      currentGalleryIndex = 0;
    }

    if (currentGalleryIndex < 0) {
      currentGalleryIndex = galleryImages.length - 1;
    }

    updateLightbox();

    elements.lightbox.classList.add("active");
    elements.lightbox.setAttribute("aria-hidden", "false");

    document.body.classList.add("lightbox-open");
  }


  function updateLightbox() {
    const elements = getLightboxElements();

    if (!elements.image || !galleryImages.length) {
      return;
    }

    const item = galleryImages[currentGalleryIndex];

    elements.image.src = item.src;
    elements.image.alt = item.title;

    elements.image.onerror = () => {
      elements.image.removeAttribute("src");
    };
  }


  function closeLightbox() {
    const elements = getLightboxElements();

    if (!elements.lightbox) {
      return;
    }

    elements.lightbox.classList.remove("active");
    elements.lightbox.setAttribute("aria-hidden", "true");

    document.body.classList.remove("lightbox-open");
  }


  function changeGalleryImage(direction) {
    if (!galleryImages.length) {
      return;
    }

    currentGalleryIndex += direction;

    if (currentGalleryIndex >= galleryImages.length) {
      currentGalleryIndex = 0;
    }

    if (currentGalleryIndex < 0) {
      currentGalleryIndex = galleryImages.length - 1;
    }

    updateLightbox();
  }


  function setupLightbox() {
    const elements = getLightboxElements();

    if (elements.close) {
      elements.close.addEventListener("click", closeLightbox);
    }

    if (elements.previous) {
      elements.previous.addEventListener("click", () => {
        changeGalleryImage(-1);
      });
    }

    if (elements.next) {
      elements.next.addEventListener("click", () => {
        changeGalleryImage(1);
      });
    }

    if (elements.lightbox) {
      elements.lightbox.addEventListener("click", (event) => {
        if (event.target === elements.lightbox) {
          closeLightbox();
        }
      });
    }

    document.addEventListener("keydown", (event) => {
      if (!elements.lightbox?.classList.contains("active")) {
        return;
      }

      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        changeGalleryImage(-1);
      }

      if (event.key === "ArrowRight") {
        changeGalleryImage(1);
      }
    });
  }


  /* =======================================================
     WHATSAPP
     ======================================================= */

  function setupWhatsApp() {
    const personalURL =
      `https://wa.me/${SITE_CONFIG.whatsapp.personal}`;

    $$("[data-whatsapp-personal]").forEach((element) => {
      element.href = personalURL;
      element.target = "_blank";
      element.rel = "noopener";
    });

    $$("[data-whatsapp-group]").forEach((element) => {
      element.href = SITE_CONFIG.whatsapp.group;
      element.target = "_blank";
      element.rel = "noopener";
    });

    /*
     * Developer WhatsApp
     */
    $$("[data-developer-whatsapp]").forEach((element) => {
      element.href =
        `https://wa.me/${SITE_CONFIG.developer.whatsapp}`;

      element.target = "_blank";
      element.rel = "noopener";
    });
  }


  /* =======================================================
     CONTACT + MAP
     ======================================================= */

  function setupContact() {
    const map = $("#googleMap");

    if (map) {
      map.src = SITE_CONFIG.map.embed;
      map.loading = "lazy";
      map.referrerPolicy = "no-referrer-when-downgrade";
    }

    $$("[data-facebook]").forEach((element) => {
      element.href = SITE_CONFIG.social.facebook;
    });

    $$("[data-youtube]").forEach((element) => {
      element.href = SITE_CONFIG.social.youtube;
    });

    $$("[data-social-whatsapp]").forEach((element) => {
      element.href = SITE_CONFIG.social.whatsapp;
    });
  }


  /* =======================================================
     MOBILE MENU
     ======================================================= */

  function setupMobileMenu() {
    const menuButton = $(".mobile-menu-btn");
    const navigation = $(".main-nav");

    if (!menuButton || !navigation) {
      return;
    }

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", (event) => {
      event.stopPropagation();

      const isOpen =
        navigation.classList.toggle("active");

      menuButton.classList.toggle("active", isOpen);

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      document.body.classList.toggle(
        "menu-open",
        isOpen
      );
    });

    $$(".nav-link", navigation).forEach((link) => {
      link.addEventListener("click", () => {
        closeMobileMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (
        !navigation.contains(event.target) &&
        !menuButton.contains(event.target)
      ) {
        closeMobileMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeMobileMenu();
      }
    });
  }


  function closeMobileMenu() {
    const menuButton = $(".mobile-menu-btn");
    const navigation = $(".main-nav");

    if (!navigation) {
      return;
    }

    navigation.classList.remove("active");

    if (menuButton) {
      menuButton.classList.remove("active");
      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );
    }

    document.body.classList.remove("menu-open");
  }


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

  function setupHeader() {
    const header = $(".site-header");

    if (!header) {
      return;
    }

    const updateHeader = () => {
      header.classList.toggle(
        "scrolled",
        window.scrollY > 30
      );
    };

    updateHeader();

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );
  }


  /* =======================================================
     ACTIVE NAVIGATION
     ======================================================= */

  function setupActiveNavigation() {
    const sections = $$("section[id]");
    const navLinks = $$(".nav-link");

    if (!sections.length || !navLinks.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const id = entry.target.id;

          navLinks.forEach((link) => {
            const href =
              link.getAttribute("href");

            link.classList.toggle(
              "active",
              href === `#${id}`
            );
          });
        });
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }


  /* =======================================================
     SMOOTH SCROLL
     ======================================================= */

  function setupSmoothScroll() {
    $$('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const href =
          link.getAttribute("href");

        if (
          !href ||
          href === "#" ||
          href.startsWith("#!")
        ) {
          return;
        }

        const target = $(href);

        if (!target) {
          return;
        }

        event.preventDefault();

        const header = $(".site-header");

        const headerHeight =
          header?.offsetHeight || 0;

        const targetTop =
          target.getBoundingClientRect().top +
          window.scrollY -
          headerHeight -
          10;

        window.scrollTo({
          top: Math.max(0, targetTop),
          behavior: "smooth"
        });
      });
    });
  }


  /* =======================================================
     REVEAL ANIMATION
     -------------------------------------------------------
     Important:
     .reveal is visible by default in CSS.

     JS adds .js-ready only after the script has loaded.
     If observer fails, fallback reveals everything.
     ======================================================= */

  function setupRevealAnimations() {
    document.documentElement.classList.add("js-ready");

    const elements = $$(".reveal");

    if (!elements.length) {
      return;
    }

    let revealedCount = 0;

    const revealElement = (element) => {
      if (!element.classList.contains("revealed")) {
        element.classList.add("revealed");
        revealedCount++;
      }
    };

    if ("IntersectionObserver" in window) {
      const observer =
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                revealElement(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.08,
            rootMargin: "0px 0px -40px 0px"
          }
        );

      elements.forEach((element) => {
        observer.observe(element);
      });

      /*
       * Absolute fallback:
       * Nothing remains invisible forever.
       */
      window.setTimeout(() => {
        elements.forEach((element) => {
          revealElement(element);
        });
      }, 2200);

    } else {
      elements.forEach((element) => {
        revealElement(element);
      });
    }
  }


  /* =======================================================
     STATISTICS COUNT UP
     -------------------------------------------------------
     HTML example:

     <span class="stat-number"
           data-count="15"
           data-suffix="+">0</span>

     ======================================================= */

  function setupStatistics() {
    const counters = $$(".stat-number");

    if (!counters.length) {
      return;
    }

    const animateCounter = (element) => {
      if (element.dataset.counted === "true") {
        return;
      }

      const target = Number(
        element.dataset.count
      );

      if (!Number.isFinite(target)) {
        return;
      }

      element.dataset.counted = "true";

      const suffix =
        element.dataset.suffix || "";

      const prefix =
        element.dataset.prefix || "";

      const duration = 1300;
      const startTime = performance.now();

      function update(currentTime) {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        );

        /*
         * Smooth ease-out
         */
        const eased =
          1 - Math.pow(1 - progress, 3);

        const value = Math.round(
          target * eased
        );

        element.textContent =
          `${prefix}${value}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent =
            `${prefix}${target}${suffix}`;
        }
      }

      requestAnimationFrame(update);
    };


    /*
     * If HTML has no data-count,
     * don't blank the statistic.
     */
    counters.forEach((counter) => {
      if (!counter.dataset.count) {
        counter.dataset.count =
          counter.textContent
            .replace(/[^\d.]/g, "") || "0";

        counter.dataset.suffix =
          counter.dataset.suffix ||
          counter.textContent.replace(
            /[\d.]/g,
            ""
          );
      }
    });


    if ("IntersectionObserver" in window) {
      const observer =
        new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.25
          }
        );

      counters.forEach((counter) => {
        observer.observe(counter);
      });

      /*
       * Fallback — counters will still work.
       */
      setTimeout(() => {
        counters.forEach((counter) => {
          animateCounter(counter);
        });
      }, 2500);

    } else {
      counters.forEach((counter) => {
        animateCounter(counter);
      });
    }
  }


  /* =======================================================
     BACK TO TOP
     ======================================================= */

  function setupBackToTop() {
    const button = $("#backToTop");

    if (!button) {
      return;
    }

    const updateButton = () => {
      button.classList.toggle(
        "show",
        window.scrollY > 500
      );
    };

    updateButton();

    window.addEventListener(
      "scroll",
      updateButton,
      { passive: true }
    );

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  function setFooterInformation() {
    $$("[data-current-year]").forEach(
      (element) => {
        element.textContent =
          new Date().getFullYear();
      }
    );

    $$("[data-developer-name]").forEach(
      (element) => {
        element.textContent =
          SITE_CONFIG.developer.name;
      }
    );

    $$("[data-developer-whatsapp]").forEach(
      (element) => {
        element.href =
          `https://wa.me/${SITE_CONFIG.developer.whatsapp}`;

        element.target = "_blank";
        element.rel = "noopener";
      }
    );
  }


  /* =======================================================
     IMAGE LAZY LOADING FALLBACK
     ======================================================= */

  function setupImageFallbacks() {
    $$("img").forEach((img) => {
      img.addEventListener("error", () => {
        if (img.dataset.fallbackUsed === "true") {
          return;
        }

        img.dataset.fallbackUsed = "true";

        /*
         * Do not keep changing the src forever.
         */
        img.style.opacity = "0.65";
      });
    });
  }


  /* =======================================================
     DISABLE BROKEN PLACEHOLDER LINKS
     ======================================================= */

  function preventPlaceholderLinks() {
    $$('a[href="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
      });
    });
  }


  /* =======================================================
     PAGE LOADING SAFETY
     -------------------------------------------------------
     No loader is required.
     This only makes sure content is visible.
     ======================================================= */

  function ensureEverythingVisible() {
    /*
     * Never leave reveal elements hidden.
     */
    setTimeout(() => {
      $$(".reveal").forEach((element) => {
        element.classList.add("revealed");
      });
    }, 3000);

    /*
     * Images should never remain in an unusable state
     * because JavaScript failed.
     */
    document.body.classList.add("page-ready");
  }


  /* =======================================================
     INIT
     ======================================================= */

  function init() {
    /*
     * Basic information
     */
    setSiteInformation();

    /*
     * Dynamic content
     */
    renderHero();
    setDirector();
    renderAchievements();
    renderGallery();

    /*
     * Components
     */
    setupLightbox();
    setupWhatsApp();
    setupContact();

    /*
     * Navigation
     */
    setupMobileMenu();
    setupHeader();
    setupActiveNavigation();
    setupSmoothScroll();

    /*
     * Animations
     */
    setupStatistics();
    setupRevealAnimations();

    /*
     * Utilities
     */
    setupBackToTop();
    setFooterInformation();

    /*
     * Images
     */
    prepareDriveImages();
    setupImageFallbacks();

    /*
     * Safety
     */
    preventPlaceholderLinks();
    ensureEverythingVisible();
  }


  /* =======================================================
     RUN
     ======================================================= */

  try {
    init();
  } catch (error) {
    /*
     * If one optional component fails,
     * the entire website must NOT become blank.
     */
    console.error(
      "Al Haramain website initialization warning:",
      error
    );

    document.documentElement.classList.add(
      "js-ready"
    );

    $$(".reveal").forEach((element) => {
      element.classList.add("revealed");
    });

    document.body.classList.add("page-ready");
  }

});
