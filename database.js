/* =====================================================
   AL-HARAMAIN DIGITAL
   Main JavaScript
===================================================== */


/* =========================
   LOADING SCREEN
========================= */

document.body.classList.add("loading");

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader")?.classList.add("hide");

    document.body.classList.remove("loading");

  }, 600);

});


/* =========================
   LOAD COMMON HEADER
========================= */

async function loadHeader() {

  const header = document.getElementById("header");

  if (!header) return;

  try {

    const response = await fetch("header.html");

    if (!response.ok) {
      throw new Error("Header file not found");
    }

    header.innerHTML = await response.text();

    initMenu();

  } catch (error) {

    console.error("Header Error:", error);

  }

}


/* =========================
   MOBILE MENU
========================= */

function initMenu() {

  const menuBtn =
    document.getElementById("menuBtn");

  const navLinks =
    document.getElementById("navLinks");


  if (!menuBtn || !navLinks) return;


  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    menuBtn.textContent =
      navLinks.classList.contains("open")
        ? "✕"
        : "☰";

  });


  document.querySelectorAll(".nav-links a")
    .forEach(link => {

      link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.textContent = "☰";

      });

    });

}


/* =========================
   HERO SLIDER
========================= */

const slides =
  document.querySelectorAll(".slide");

const dots =
  document.querySelectorAll(".slider-dots button");

let currentSlide = 0;


function showSlide(index) {

  if (!slides.length) return;


  currentSlide = index;


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


/* Dot Click */

dots.forEach((dot, index) => {

  dot.addEventListener("click", () => {

    showSlide(index);

  });

});


/* Auto Slider */

if (slides.length > 1) {

  setInterval(() => {

    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    showSlide(currentSlide);

  }, 4500);

}


/* =========================
   START
========================= */

showSlide(0);

loadHeader();
