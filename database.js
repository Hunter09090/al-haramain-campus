/* =====================================================
   AL-HARAMAIN DIGITAL
   Database + Main JavaScript
===================================================== */


/* =====================================================
   1. FIREBASE CONFIGURATION
   -----------------------------------------------------
   আপনার Firebase Console থেকে এই তথ্যগুলো বসাবেন।
===================================================== */

const firebaseConfig = {

  apiKey: "YOUR_API_KEY",

  authDomain: "YOUR_PROJECT.firebaseapp.com",

  projectId: "YOUR_PROJECT_ID",

  storageBucket: "YOUR_PROJECT.firebasestorage.app",

  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",

  appId: "YOUR_APP_ID"

};


/* =====================================================
   2. FIREBASE IMPORT
===================================================== */

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  query,
  where,
  limit
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


/* =====================================================
   3. INITIALIZE FIREBASE
===================================================== */

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


/* =====================================================
   4. LOADING SCREEN
===================================================== */

window.addEventListener("load", () => {

  setTimeout(() => {

    const loader = document.getElementById("loader");

    if (loader) {

      loader.classList.add("hide");

    }

    document.body.classList.remove("loading");

  }, 700);

});


/* =====================================================
   5. LOAD HEADER
===================================================== */

async function loadHeader() {

  const header = document.getElementById("header");

  if (!header) return;

  try {

    const response = await fetch("header.html");

    if (!response.ok) {
      throw new Error("Header could not be loaded.");
    }

    header.innerHTML = await response.text();

    initNavbar();

  } catch (error) {

    console.error("Header Error:", error);

  }

}


/* =====================================================
   6. LOAD FOOTER
===================================================== */

async function loadFooter() {

  const footer = document.getElementById("footer");

  if (!footer) return;

  try {

    const response = await fetch("footer.html");

    if (!response.ok) {
      throw new Error("Footer could not be loaded.");
    }

    footer.innerHTML = await response.text();

  } catch (error) {

    console.error("Footer Error:", error);

  }

}


/* =====================================================
   7. MOBILE NAVIGATION
===================================================== */

function initNavbar() {

  const menuBtn =
    document.querySelector(".menu-btn");

  const navLinks =
    document.querySelector(".nav-links");


  if (!menuBtn || !navLinks) return;


  menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("open");

  });


  navLinks.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

    });

  });

}


/* =====================================================
   8. HERO PHOTO SLIDER
===================================================== */

function initSlider() {

  const slides =
    document.querySelectorAll(".slide");

  const dots =
    document.querySelectorAll(".slider-dots button");


  if (!slides.length) return;


  let currentSlide = 0;


  function showSlide(index) {

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


  function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {

      currentSlide = 0;

    }

    showSlide(currentSlide);

  }


  dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

      currentSlide = index;

      showSlide(currentSlide);

    });

  });


  showSlide(0);


  setInterval(nextSlide, 5000);

}


/* =====================================================
   9. SCROLL ANIMATION
===================================================== */

function initScrollAnimation() {

  const sections =
    document.querySelectorAll(
      ".section, .director-card, .info-card, .stat-box, .notice-card, .gallery-item"
    );


  if (!sections.length) return;


  sections.forEach(item => {

    item.classList.add("reveal");

  });


  const observer =
    new IntersectionObserver(

      entries => {

        entries.forEach(entry => {

          if (entry.isIntersecting) {

            entry.target.classList.add("show");

            observer.unobserve(
              entry.target
            );

          }

        });

      },

      {
        threshold: 0.08
      }

    );


  sections.forEach(item => {

    observer.observe(item);

  });

}


/* =====================================================
   10. ADMISSION FORM
===================================================== */

function initAdmissionForm() {

  const form =
    document.getElementById(
      "admission-form"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const message =
        document.getElementById(
          "admissionMessage"
        );


      const studentName =
        document.getElementById(
          "studentName"
        ).value.trim();


      const fatherName =
        document.getElementById(
          "fatherName"
        ).value.trim();


      const phone =
        document.getElementById(
          "phone"
        ).value.trim();


      const department =
        document.getElementById(
          "department"
        ).value;


      const address =
        document.getElementById(
          "address"
        ).value.trim();


      if (
        !studentName ||
        !fatherName ||
        !phone ||
        !department ||
        !address
      ) {

        message.textContent =
          "অনুগ্রহ করে সব তথ্য পূরণ করুন।";

        return;

      }


      message.textContent =
        "আবেদন জমা দেওয়া হচ্ছে...";


      try {

        await addDoc(
          collection(
            db,
            "admissions"
          ),
          {

            studentName,

            fatherName,

            phone,

            department,

            address,

            status: "pending",

            createdAt:
              new Date().toISOString()

          }
        );


        message.textContent =
          "আলহামদুলিল্লাহ! আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে।";


        form.reset();


      } catch (error) {

        console.error(
          "Admission Error:",
          error
        );


        message.textContent =
          "দুঃখিত, আবেদন জমা দেওয়া যায়নি। পরে আবার চেষ্টা করুন।";

      }

    }
  );

}


/* =====================================================
   11. LOAD NOTICES
===================================================== */

async function loadNotices() {

  const noticeList =
    document.getElementById(
      "noticeList"
    );


  if (!noticeList) return;


  try {

    const noticeQuery =
      query(
        collection(
          db,
          "notices"
        ),
        limit(10)
      );


    const snapshot =
      await getDocs(
        noticeQuery
      );


    if (snapshot.empty) {

      return;

    }


    noticeList.innerHTML = "";


    snapshot.forEach(doc => {

      const data = doc.data();


      const article =
        document.createElement(
          "article"
        );


      article.className =
        "notice-card";


      article.innerHTML = `

        <div class="notice-date">

          <strong>
            ${data.day || "--"}
          </strong>

          <span>
            ${data.month || "---"}
          </span>

        </div>


        <div class="notice-content">

          <h3>
            ${data.title || "নোটিশ"}
          </h3>

          <p>
            ${data.description || ""}
          </p>

        </div>

      `;


      noticeList.appendChild(
        article
      );

    });


  } catch (error) {

    console.error(
      "Notice Error:",
      error
    );

  }

}


/* =====================================================
   12. EMERGENCY NOTICE
===================================================== */

async function loadEmergencyNotice() {

  const notice =
    document.getElementById(
      "emergencyNotice"
    );


  if (!notice) return;


  try {

    const noticeQuery =
      query(
        collection(
          db,
          "emergencyNotices"
        ),
        limit(1)
      );


    const snapshot =
      await getDocs(
        noticeQuery
      );


    if (!snapshot.empty) {

      snapshot.forEach(doc => {

        const data =
          doc.data();


        notice.textContent =
          data.text ||
          "নতুন জরুরি নোটিশ এখানে প্রদর্শিত হবে...";

      });

    }

  } catch (error) {

    console.error(
      "Emergency Notice Error:",
      error
    );

  }

}


/* =====================================================
   13. RESULT SEARCH
===================================================== */

function initResultSearch() {

  const button =
    document.getElementById(
      "resultBtn"
    );

  const input =
    document.getElementById(
      "resultRoll"
    );

  const resultBox =
    document.getElementById(
      "resultBox"
    );


  if (
    !button ||
    !input ||
    !resultBox
  ) return;


  button.addEventListener(
    "click",
    async () => {

      const roll =
        input.value.trim();


      if (!roll) {

        resultBox.textContent =
          "রোল নম্বর লিখুন।";

        return;

      }


      resultBox.textContent =
        "রেজাল্ট খোঁজা হচ্ছে...";


      try {

        const resultQuery =
          query(
            collection(
              db,
              "results"
            ),
            where(
              "roll",
              "==",
              roll
            ),
            limit(1)
          );


        const snapshot =
          await getDocs(
            resultQuery
          );


        if (snapshot.empty) {

          resultBox.textContent =
            "এই রোল নম্বরের কোনো রেজাল্ট পাওয়া যায়নি।";

          return;

        }


        let resultHTML = "";


        snapshot.forEach(doc => {

          const data =
            doc.data();


          resultHTML = `

            <div>

              <strong>
                ${data.studentName || "শিক্ষার্থী"}
              </strong>

              <br>

              রোল:
              ${data.roll || "-"}

              <br>

              শ্রেণি:
              ${data.className || "-"}

              <br>

              ফলাফল:
              ${data.result || "-"}

            </div>

          `;

        });


        resultBox.innerHTML =
          resultHTML;


      } catch (error) {

        console.error(
          "Result Error:",
          error
        );


        resultBox.textContent =
          "রেজাল্ট খুঁজতে সমস্যা হয়েছে।";

      }

    }
  );

}


/* =====================================================
   14. STUDENT INFORMATION SEARCH
===================================================== */

function initStudentSearch() {

  const button =
    document.getElementById(
      "studentBtn"
    );

  const input =
    document.getElementById(
      "studentId"
    );

  const box =
    document.getElementById(
      "studentBox"
    );


  if (
    !button ||
    !input ||
    !box
  ) return;


  button.addEventListener(
    "click",
    async () => {

      const studentId =
        input.value.trim();


      if (!studentId) {

        box.textContent =
          "Student ID অথবা Roll লিখুন।";

        return;

      }


      box.textContent =
        "শিক্ষার্থীর তথ্য খোঁজা হচ্ছে...";


      try {

        const studentQuery =
          query(
            collection(
              db,
              "students"
            ),
            where(
              "studentId",
              "==",
              studentId
            ),
            limit(1)
          );


        const snapshot =
          await getDocs(
            studentQuery
          );


        if (snapshot.empty) {

          box.textContent =
            "এই ID-এর কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি।";

          return;

        }


        snapshot.forEach(doc => {

          const data =
            doc.data();


          box.innerHTML = `

            <div>

              <strong>
                ${data.name || "নাম নেই"}
              </strong>

              <br>

              Student ID:
              ${data.studentId || "-"}

              <br>

              শ্রেণি:
              ${data.className || "-"}

              <br>

              রোল:
              ${data.roll || "-"}

            </div>

          `;

        });


      } catch (error) {

        console.error(
          "Student Search Error:",
          error
        );


        box.textContent =
          "তথ্য খুঁজতে সমস্যা হয়েছে।";

      }

    }
  );

}


/* =====================================================
   15. GOOGLE MAP
===================================================== */

function initMap() {

  /*
    Google Maps Embed API ব্যবহার করার সময়
    এখানে আপনার Embed URL বসানো যাবে।

    আপাতত Google Maps-এর share link
    আলাদা button হিসেবে কাজ করছে।
  */

}


/* =====================================================
   16. START EVERYTHING
===================================================== */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    await loadHeader();

    await loadFooter();

    initSlider();

    initScrollAnimation();

    initAdmissionForm();

    initResultSearch();

    initStudentSearch();

    initMap();

    await loadNotices();

    await loadEmergencyNotice();

  }
);


/* =====================================================
   17. GLOBAL ACCESS
   Admin dashboard বা অন্য JS file থেকে
   প্রয়োজনে ব্যবহার করা যাবে।
===================================================== */

window.AlHaramain = {

  firebaseApp: app,

  database: db,

  authentication: auth

};
