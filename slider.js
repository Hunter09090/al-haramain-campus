
/* ==========================================================
   AL HARAMAIN MODEL MADRASA
   HERO SLIDER
   Version : 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".slider-dots span");

    const prevBtn = document.querySelector(".slider-prev");
    const nextBtn = document.querySelector(".slider-next");

    const progress = document.querySelector(".slider-progress span");

    let current = 0;
    let interval;

    const duration = 5000;

    function resetProgress() {

        progress.style.transition = "none";
        progress.style.width = "0%";

        setTimeout(() => {

            progress.style.transition = `width ${duration}ms linear`;
            progress.style.width = "100%";

        }, 50);

    }

    function showSlide(index) {

        slides.forEach(slide => {

            slide.classList.remove("active");

        });

        dots.forEach(dot => {

            dot.classList.remove("active");

        });

        slides[index].classList.add("active");
        dots[index].classList.add("active");

        current = index;

        resetProgress();

    }

    function nextSlide() {

        current++;

        if (current >= slides.length) {

            current = 0;

        }

        showSlide(current);

    }

    function prevSlide() {

        current--;

        if (current < 0) {

            current = slides.length - 1;

        }

        showSlide(current);

    }

    function startSlider() {

        clearInterval(interval);

        interval = setInterval(() => {

            nextSlide();

        }, duration);

    }

    nextBtn.addEventListener("click", () => {

        nextSlide();

        startSlider();

    });

    prevBtn.addEventListener("click", () => {

        prevSlide();

        startSlider();

    });

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            startSlider();

        });

    });

    /* ========= Keyboard ========= */

    document.addEventListener("keydown", e => {

        if (e.key === "ArrowRight") {

            nextSlide();
            startSlider();

        }

        if (e.key === "ArrowLeft") {

            prevSlide();
            startSlider();

        }

    });

    /* ========= Pause On Hover ========= */

    const hero = document.querySelector(".hero");

    hero.addEventListener("mouseenter", () => {

        clearInterval(interval);

    });

    hero.addEventListener("mouseleave", () => {

        startSlider();

    });

    /* ========= Touch Swipe ========= */

    let startX = 0;

    hero.addEventListener("touchstart", e => {

        startX = e.touches[0].clientX;

    });

    hero.addEventListener("touchend", e => {

        let endX = e.changedTouches[0].clientX;

        if (startX - endX > 60) {

            nextSlide();

            startSlider();

        }

        if (endX - startX > 60) {

            prevSlide();

            startSlider();

        }

    });

    showSlide(0);

    startSlider();

});
