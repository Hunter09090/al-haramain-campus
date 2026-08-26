

/* =====================================================
   AL-HARAMAIN-DIGITAL
   Main Database / Website JavaScript
   ===================================================== */


/* =========================
   FIREBASE
========================= */

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


/*
  আপনার Firebase Project তৈরি করার পর
  নিচের তথ্যগুলো Firebase Console থেকে বসাবেন।
*/

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.firebasestorage.app",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


/* Firebase চালু */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/* =========================
   BASIC WEBSITE SETTINGS
========================= */

const SITE = {
  name: "Al-haramain-digital",

  phone: "01XXXXXXXXX",

  email: "example@email.com",

  address: "আপনার মাদ্রাসার সম্পূর্ণ ঠিকানা",

  facebook: "#",

  map: "#"
};


/* =========================
   LOADING SCREEN
========================= */

document.body.classList.add("loading");

window.addEventListener("load", () => {

  setTimeout(() => {

    document.getElementById("loader")?.classList.add("hide");

    document.body.classList.remove("loading");

  }, 500);

});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});


/* Mobile menu click করলে বন্ধ হবে */

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });

});


/* =========================
   HERO IMAGE SLIDER
========================= */

const slides = document.querySelectorAll(".slide");
const sliderDots = document.getElementById("sliderDots");

let currentSlide = 0;


/* Dots তৈরি */

if (slides.length && sliderDots) {

  slides.forEach((_, index) => {

    const dot = document.createElement("button");

    dot.setAttribute("aria-label", `Slide ${index + 1}`);

    dot.addEventListener("click", () => {
      showSlide(index);
    });

    sliderDots.appendChild(dot);

  });

}


function showSlide(index) {

  if (!slides.length) return;

  currentSlide = index;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });

  document.querySelectorAll(".slider-dots button").forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

}


showSlide(0);


/* Auto slide */

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
   SCROLL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {
  observer.observe(element);
});


/* =========================
   CURRENT YEAR
========================= */

const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


/* =========================
   ADMISSION
========================= */

const admissionForm = document.getElementById("admission-form");

admissionForm?.addEventListener("submit", async event => {

  event.preventDefault();

  const message = document.getElementById("admissionMessage");

  const studentName =
    document.getElementById("studentName").value.trim();

  const fatherName =
    document.getElementById("fatherName").value.trim();

  const phone =
    document.getElementById("phone").value.trim();

  const department =
    document.getElementById("department").value;

  const address =
    document.getElementById("address").value.trim();


  if (!studentName || !fatherName || !phone || !department || !address) {

    message.textContent = "অনুগ্রহ করে সব তথ্য পূরণ করুন।";

    return;
  }


  try {

    /*
      Firebase Firestore-এ Application Save হবে।
    */

    await addDoc(collection(db, "admissions"), {

      studentName,
      fatherName,
      phone,
      department,
      address,

      createdAt: new Date().toISOString(),

      status: "pending"

    });


    message.textContent =
      "আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে।";


    admissionForm.reset();


  } catch (error) {

    console.error("Admission Error:", error);

    message.textContent =
      "আবেদন জমা দিতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।";

  }

});


/* =========================
   EMERGENCY NOTICE
========================= */

async function loadEmergencyNotice() {

  const element =
    document.getElementById("emergencyNotice");

  if (!element) return;


  try {

    const q = query(
      collection(db, "emergencyNotices"),
      orderBy("createdAt", "desc"),
      limit(1)
    );


    const snapshot = await getDocs(q);


    if (!snapshot.empty) {

      const data = snapshot.docs[0].data();

      element.textContent =
        data.text || "কোনো জরুরি নোটিশ নেই।";

    }

  } catch (error) {

    console.log("Emergency Notice:", error);

  }

}


/* =========================
   NORMAL NOTICES
========================= */

async function loadNotices() {

  const list =
    document.getElementById("noticeList");

  if (!list) return;


  try {

    const q = query(
      collection(db, "notices"),
      orderBy("createdAt", "desc"),
      limit(5)
    );


    const snapshot = await getDocs(q);


    if (snapshot.empty) return;


    list.innerHTML = "";


    snapshot.forEach(doc => {

      const data = doc.data();

      const article =
        document.createElement("article");

      article.className =
        "notice-card reveal show";


      article.innerHTML = `

        <div class="notice-date">
          <strong>${data.day || "--"}</strong>
          <span>${data.month || "---"}</span>
        </div>

        <div>
          <h3>${escapeHTML(data.title || "নোটিশ")}</h3>
          <p>${escapeHTML(data.description || "")}</p>
        </div>

      `;


      list.appendChild(article);

    });


  } catch (error) {

    console.log("Notice Error:", error);

  }

}


/* =========================
   RESULT
   Google Sheet Connection
   পরের ধাপে সম্পূর্ণ করা হবে
========================= */

const resultBtn =
  document.getElementById("resultBtn");


resultBtn?.addEventListener("click", () => {

  const roll =
    document.getElementById("resultRoll").value.trim();

  const resultBox =
    document.getElementById("resultBox");


  if (!roll) {

    resultBox.textContent =
      "অনুগ্রহ করে রোল নম্বর লিখুন।";

    return;

  }


  resultBox.textContent =
    "রেজাল্ট সিস্টেম Google Sheet-এর সাথে সংযুক্ত হলে এখানে ফলাফল দেখা যাবে।";

});


/* =========================
   STUDENT INFORMATION
   Google Sheet Connection
   পরের ধাপে সম্পূর্ণ করা হবে
========================= */

const studentBtn =
  document.getElementById("studentBtn");


studentBtn?.addEventListener("click", () => {

  const id =
    document.getElementById("studentId").value.trim();

  const studentBox =
    document.getElementById("studentBox");


  if (!id) {

    studentBox.textContent =
      "Student ID অথবা Roll লিখুন।";

    return;

  }


  studentBox.textContent =
    "Student Information Google Sheet-এর সাথে সংযুক্ত হলে এখানে তথ্য দেখা যাবে।";

});


/* =========================
   SAFE TEXT
========================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}


/* =========================
   START DATABASE DATA
========================= */

loadEmergencyNotice();
loadNotices();


/* =========================
   GLOBAL ACCESS
   Admin page থেকেও SITE ব্যবহার করা যাবে
========================= */

window.AL_HARAMAIN = {
  SITE,
  db
};
