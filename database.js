/* =========================================================
   AL-HARAMAIN DIGITAL
   DATABASE.JS — FINAL VERSION
   Firebase + Homepage Dynamic Data
========================================================= */


/* =========================================================
   1. FIREBASE CONFIG
========================================================= */

const firebaseConfig = {

  apiKey:
    "AIzaSyDYKfabHaqiUrX7__NT-M1IwOREXlX9IBA",

  authDomain:
    "al-haramain-digital-campus.firebaseapp.com",

  projectId:
    "al-haramain-digital-campus",

  storageBucket:
    "al-haramain-digital-campus.firebasestorage.app",

  messagingSenderId:
    "306805947710",

  appId:
    "1:306805947710:web:d0ed996b453928767a406f",

  measurementId:
    "G-LSMDHF5TDY"

};


/* =========================================================
   2. FIREBASE IMPORT
========================================================= */

import {
  initializeApp
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";


import {
  getFirestore,
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  where
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


/* =========================================================
   3. INITIALIZE FIREBASE
========================================================= */

const app =
  initializeApp(firebaseConfig);


const db =
  getFirestore(app);


/* =========================================================
   4. HELPER
========================================================= */

function getElement(...ids) {

  for (const id of ids) {

    const element =
      document.getElementById(id);

    if (element) return element;

  }

  return null;

}


/* =========================================================
   5. SAFE HTML
========================================================= */

function escapeHTML(value) {

  return String(value ?? "")

    .replace(/&/g, "&amp;")

    .replace(/</g, "&lt;")

    .replace(/>/g, "&gt;")

    .replace(/"/g, "&quot;")

    .replace(/'/g, "&#039;");

}


/* =========================================================
   6. GOOGLE DRIVE IMAGE CONVERTER
========================================================= */

function convertDriveImage(url) {

  if (!url) return "";

  url = String(url).trim();


  /* Google Drive file ID */

  let match =
    url.match(
      /\/file\/d\/([a-zA-Z0-9_-]+)/
    );


  if (!match) {

    match =
      url.match(
        /[?&]id=([a-zA-Z0-9_-]+)/
      );

  }


  if (match && match[1]) {

    return (
      "https://drive.google.com/thumbnail?id=" +
      match[1] +
      "&sz=w1200"
    );

  }


  /* Direct image URL */

  return url;

}


/* =========================================================
   7. LOADING SCREEN
========================================================= */

function initLoader() {

  window.addEventListener(
    "load",
    () => {

      setTimeout(
        () => {

          const loader =
            document.getElementById(
              "loader"
            );

          if (loader) {

            loader.classList.add(
              "hide"
            );

          }

          document.body.classList.remove(
            "loading"
          );

        },
        700
      );

    }
  );

}


/* =========================================================
   8. LOAD HEADER
========================================================= */

async function loadHeader() {

  const header =
    document.getElementById(
      "header"
    );


  if (!header) return;


  try {

    const response =
      await fetch(
        "header.html"
      );


    if (!response.ok) {

      throw new Error(
        "Header loading failed"
      );

    }


    header.innerHTML =
      await response.text();


    initNavbar();


  } catch (error) {

    console.error(
      "Header Error:",
      error
    );

  }

}


/* =========================================================
   9. LOAD FOOTER
========================================================= */

async function loadFooter() {

  const footer =
    document.getElementById(
      "footer"
    );


  if (!footer) return;


  try {

    const response =
      await fetch(
        "footer.html"
      );


    if (!response.ok) {

      throw new Error(
        "Footer loading failed"
      );

    }


    footer.innerHTML =
      await response.text();


  } catch (error) {

    console.error(
      "Footer Error:",
      error
    );

  }

}


/* =========================================================
   10. MOBILE NAVIGATION
========================================================= */

function initNavbar() {

  const menuBtn =
    document.querySelector(
      ".menu-btn"
    );


  const navLinks =
    document.querySelector(
      ".nav-links"
    );


  if (
    !menuBtn ||
    !navLinks
  ) return;


  menuBtn.onclick = () => {

    navLinks.classList.toggle(
      "open"
    );

  };


  navLinks
    .querySelectorAll("a")
    .forEach(
      link => {

        link.addEventListener(
          "click",
          () => {

            navLinks.classList.remove(
              "open"
            );

          }
        );

      }
    );

}


/* =========================================================
   11. HERO SLIDER
========================================================= */

function initSlider() {

  const slides =
    document.querySelectorAll(
      ".slide"
    );


  const dots =
    document.querySelectorAll(
      ".slider-dots button"
    );


  if (!slides.length) return;


  let current =
    0;


  function showSlide(index) {

    slides.forEach(
      (slide, i) => {

        slide.classList.toggle(
          "active",
          i === index
        );

      }
    );


    dots.forEach(
      (dot, i) => {

        dot.classList.toggle(
          "active",
          i === index
        );

      }
    );

  }


  dots.forEach(
    (dot, index) => {

      dot.addEventListener(
        "click",
        () => {

          current =
            index;

          showSlide(
            current
          );

        }
      );

    }
  );


  showSlide(0);


  setInterval(
    () => {

      current++;

      if (
        current >=
        slides.length
      ) {

        current = 0;

      }

      showSlide(
        current
      );

    },
    5000
  );

}


/* =========================================================
   12. SCROLL ANIMATION
========================================================= */

function initScrollAnimation() {

  const elements =
    document.querySelectorAll(
      ".section, .section-title, .department-card, " +
      ".achievement-card, .notice-card, .gallery-item, " +
      ".director-card, .result-box, .student-card"
    );


  if (!elements.length) return;


  elements.forEach(
    element => {

      element.classList.add(
        "reveal"
      );

    }
  );


  const observer =
    new IntersectionObserver(
      entries => {

        entries.forEach(
          entry => {

            if (
              entry.isIntersecting
            ) {

              entry.target.classList.add(
                "show"
              );

              observer.unobserve(
                entry.target
              );

            }

          }
        );

      },
      {
        threshold: 0.08
      }
    );


  elements.forEach(
    element => {

      observer.observe(
        element
      );

    }
  );

}


/* =========================================================
   13. DEPARTMENTS
   Static content — intentionally inside index
========================================================= */

function initDepartments() {

  const container =
    getElement(
      "departmentList",
      "departmentsList",
      "departmentGrid"
    );


  if (!container) return;


  const departments = [

    {
      icon: "📖",
      name: "নুরানী বিভাগ",
      text:
        "শিশুদের কুরআন শিক্ষা, আরবি বর্ণমালা, আমপারা ও মৌলিক দ্বীনি শিক্ষার সুন্দর ভিত্তি গড়ে তোলা হয়।"
    },

    {
      icon: "🎓",
      name: "ইবতেদায়ী বিভাগ",
      text:
        "প্রাথমিক স্তরে সাধারণ শিক্ষা ও ইসলামী শিক্ষার সমন্বয়ে শিক্ষার্থীদের সুন্দরভাবে গড়ে তোলা হয়।"
    },

    {
      icon: "📚",
      name: "দাখিল বিভাগ",
      text:
        "দাখিল স্তরের শিক্ষার্থীদের জন্য নিয়মিত পাঠদান, পরীক্ষার প্রস্তুতি ও মানসম্মত শিক্ষা কার্যক্রম পরিচালিত হয়।"
    },

    {
      icon: "🕌",
      name: "মডেল হিফজ বিভাগ (বালক)",
      text:
        "বালক শিক্ষার্থীদের জন্য নিয়মতান্ত্রিক পরিবেশে পবিত্র কুরআন হিফজ ও দ্বীনি শিক্ষার ব্যবস্থা।"
    },

    {
      icon: "🕌",
      name: "মডেল হিফজ বিভাগ (বালিকা)",
      text:
        "বালিকা শিক্ষার্থীদের জন্য নিরাপদ ও উপযোগী পরিবেশে কুরআন হিফজ ও প্রয়োজনীয় ইসলামী শিক্ষার ব্যবস্থা।"
    },

    {
      icon: "🌙",
      name: "মডেল মক্তব বিভাগ",
      text:
        "শিশু-কিশোরদের জন্য কুরআন তিলাওয়াত, নামাজ, মাসআলা-মাসায়েল ও প্রয়োজনীয় দ্বীনি শিক্ষার ব্যবস্থা।"
    },

    {
      icon: "🌙",
      name: "মডেল মক্তব বিভাগ (বয়স্ক)",
      text:
        "বয়স্কদের জন্য সহজ পদ্ধতিতে কুরআন শিক্ষা, নামাজ ও প্রয়োজনীয় ইসলামী জ্ঞান অর্জনের সুযোগ।"
    }

  ];


  container.innerHTML =
    departments
      .map(
        department => `

          <article class="department-card">

            <div class="department-icon">
              ${department.icon}
            </div>

            <h3>
              ${escapeHTML(
                department.name
              )}
            </h3>

            <p>
              ${escapeHTML(
                department.text
              )}
            </p>

          </article>

        `
      )
      .join("");

}


/* =========================================================
   14. ACHIEVEMENTS
   Show latest 5
========================================================= */

async function loadAchievements() {

  const container =
    getElement(
      "achievementList",
      "achievementsList",
      "achievementGrid"
    );


  if (!container) return;


  container.innerHTML =
    '<div class="loading">অর্জনসমূহ লোড হচ্ছে...</div>';


  try {

    let snapshot;


    try {

      const q =
        query(
          collection(
            db,
            "achievements"
          ),
          orderBy(
            "createdAt",
            "desc"
          ),
          limit(5)
        );


      snapshot =
        await getDocs(q);


    } catch {

      snapshot =
        await getDocs(
          collection(
            db,
            "achievements"
          )
        );

    }


    if (snapshot.empty) {

      container.innerHTML =
        '<div class="empty">এখনো কোনো অর্জন যোগ করা হয়নি।</div>';

      return;

    }


    const docs =
      Array.from(
        snapshot.docs
      ).slice(0, 5);


    container.innerHTML =
      docs
        .map(
          achievement => {

            const data =
              achievement.data();


            const image =
              convertDriveImage(
                data.imageUrl ||
                data.image ||
                data.photo ||
                ""
              );


            return `

              <article class="achievement-card">

                ${
                  image
                  ? `
                    <div class="achievement-image">

                      <img
                        src="${escapeHTML(image)}"
                        alt="${escapeHTML(
                          data.title ||
                          "অর্জনের ছবি"
                        )}"
                        loading="lazy"
                        onerror="this.parentElement.style.display='none'"
                      >

                    </div>
                  `
                  : ""
                }


                <div class="achievement-content">

                  <h3>
                    ${escapeHTML(
                      data.title ||
                      data.name ||
                      "অর্জন"
                    )}
                  </h3>


                  <p>
                    ${escapeHTML(
                      data.description ||
                      data.details ||
                      ""
                    )}
                  </p>

                </div>

              </article>

            `;

          }
        )
        .join("");


  } catch (error) {

    console.error(
      "Achievement Error:",
      error
    );


    container.innerHTML =
      '<div class="empty">অর্জনসমূহ লোড করা যাচ্ছে না।</div>';

  }

}


/* =========================================================
   15. ALL ACHIEVEMENTS BUTTON
========================================================= */

function initAllAchievements() {

  const buttons =
    document.querySelectorAll(
      "#allAchievements, .all-achievements"
    );


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();

          window.location.href =
            "achievements.html";

        }
      );

    }
  );

}


/* =========================================================
   16. NOTICES
   Show latest 5
========================================================= */

async function loadNotices() {

  const container =
    getElement(
      "noticeList",
      "noticesList",
      "noticeGrid"
    );


  if (!container) return;


  container.innerHTML =
    '<div class="loading">নোটিশ লোড হচ্ছে...</div>';


  try {

    let snapshot;


    try {

      const q =
        query(
          collection(
            db,
            "notices"
          ),
          orderBy(
            "createdAt",
            "desc"
          ),
          limit(5)
        );


      snapshot =
        await getDocs(q);


    } catch {

      snapshot =
        await getDocs(
          collection(
            db,
            "notices"
          )
        );

    }


    if (snapshot.empty) {

      container.innerHTML =
        '<div class="empty">এখনো কোনো নোটিশ প্রকাশ করা হয়নি।</div>';

      return;

    }


    const docs =
      Array.from(
        snapshot.docs
      ).slice(0, 5);


    container.innerHTML =
      docs
        .map(
          notice => {

            const data =
              notice.data();


            return `

              <article class="notice-card">

                <div class="notice-date">

                  <strong>
                    ${escapeHTML(
                      data.day || "--"
                    )}
                  </strong>

                  <span>
                    ${escapeHTML(
                      data.month || "---"
                    )}
                  </span>

                </div>


                <div class="notice-content">

                  <h3>
                    ${escapeHTML(
                      data.title ||
                      "নোটিশ"
                    )}
                  </h3>


                  <p>
                    ${escapeHTML(
                      data.description ||
                      data.text ||
                      ""
                    )}
                  </p>

                </div>

              </article>

            `;

          }
        )
        .join("");


  } catch (error) {

    console.error(
      "Notice Error:",
      error
    );


    container.innerHTML =
      '<div class="empty">নোটিশ লোড করা যাচ্ছে না।</div>';

  }

}


/* =========================================================
   17. ALL NOTICES BUTTON
========================================================= */

function initAllNotices() {

  const buttons =
    document.querySelectorAll(
      "#allNotices, .all-notices"
    );


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();

          window.location.href =
            "notices.html";

        }
      );

    }
  );

}


/* =========================================================
   18. RESULT SEARCH
========================================================= */

function initResultSearch() {

  const button =
    getElement(
      "resultBtn",
      "searchResultBtn"
    );


  const resultBox =
    getElement(
      "resultBox",
      "resultResult"
    );


  const rollInput =
    getElement(
      "resultRoll",
      "roll"
    );


  const classInput =
    getElement(
      "resultClass",
      "resultClassName",
      "className"
    );


  const yearInput =
    getElement(
      "resultYear",
      "academicYear"
    );


  const examInput =
    getElement(
      "resultExam",
      "examType"
    );


  if (
    !button ||
    !resultBox
  ) return;


  button.addEventListener(
    "click",
    async () => {

      const roll =
        rollInput?.value.trim() ||
        "";


      const className =
        classInput?.value.trim() ||
        "";


      const academicYear =
        yearInput?.value.trim() ||
        "";


      const examType =
        examInput?.value.trim() ||
        "";


      if (
        !roll ||
        !className ||
        !academicYear ||
        !examType
      ) {

        resultBox.innerHTML =
          `<p class="error">
             রোল, শ্রেণী, শিক্ষাবর্ষ এবং পরীক্ষার ফলাফল নির্বাচন করুন।
           </p>`;

        return;

      }


      resultBox.innerHTML =
        '<p class="loading">রেজাল্ট খোঁজা হচ্ছে...</p>';


      try {

        const q =
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
            where(
              "className",
              "==",
              className
            ),
            where(
              "academicYear",
              "==",
              academicYear
            ),
            where(
              "examType",
              "==",
              examType
            ),
            limit(1)
          );


        const snapshot =
          await getDocs(q);


        if (snapshot.empty) {

          resultBox.innerHTML =
            `<p class="error">
               এই তথ্য অনুযায়ী কোনো রেজাল্ট পাওয়া যায়নি।
             </p>`;

          return;

        }


        const data =
          snapshot.docs[0].data();


        resultBox.innerHTML = `

          <div class="result-card">

            <h3>
              ${escapeHTML(
                data.studentName ||
                "শিক্ষার্থী"
              )}
            </h3>


            <div class="result-info">

              <p>
                <strong>রোল:</strong>
                ${escapeHTML(
                  data.roll || roll
                )}
              </p>

              <p>
                <strong>শ্রেণী:</strong>
                ${escapeHTML(
                  data.className ||
                  className
                )}
              </p>

              <p>
                <strong>শিক্ষাবর্ষ:</strong>
                ${escapeHTML(
                  data.academicYear ||
                  academicYear
                )}
              </p>

              <p>
                <strong>পরীক্ষা:</strong>
                ${escapeHTML(
                  data.examType ||
                  examType
                )}
              </p>

              <p>
                <strong>ফলাফল:</strong>
                ${escapeHTML(
                  data.result ||
                  data.grade ||
                  data.gpa ||
                  "-"
                )}
              </p>

            </div>

          </div>

        `;


      } catch (error) {

        console.error(
          "Result Search Error:",
          error
        );


        resultBox.innerHTML =
          `<p class="error">
             রেজাল্ট খুঁজতে সমস্যা হয়েছে।
             তথ্যগুলো সঠিকভাবে নির্বাচন করুন।
           </p>`;

      }

    }
  );

}


/* =========================================================
   19. STUDENT INFORMATION SEARCH
========================================================= */

function initStudentSearch() {

  const button =
    getElement(
      "studentBtn",
      "searchStudentBtn"
    );


  const box =
    getElement(
      "studentBox",
      "studentResult"
    );


  const rollInput =
    getElement(
      "studentRoll",
      "studentId"
    );


  const classInput =
    getElement(
      "studentClass",
      "studentClassName"
    );


  const yearInput =
    getElement(
      "studentYear",
      "studentAcademicYear"
    );


  if (
    !button ||
    !box
  ) return;


  button.addEventListener(
    "click",
    async () => {

      const roll =
        rollInput?.value.trim() ||
        "";


      const className =
        classInput?.value.trim() ||
        "";


      const academicYear =
        yearInput?.value.trim() ||
        "";


      if (
        !roll ||
        !className ||
        !academicYear
      ) {

        box.innerHTML =
          `<p class="error">
             রোল, শ্রেণী ও শিক্ষাবর্ষ নির্বাচন করুন।
           </p>`;

        return;

      }


      box.innerHTML =
        '<p class="loading">শিক্ষার্থীর তথ্য খোঁজা হচ্ছে...</p>';


      try {

        const q =
          query(
            collection(
              db,
              "students"
            ),
            where(
              "roll",
              "==",
              roll
            ),
            where(
              "className",
              "==",
              className
            ),
            where(
              "academicYear",
              "==",
              academicYear
            ),
            limit(1)
          );


        const snapshot =
          await getDocs(q);


        if (snapshot.empty) {

          box.innerHTML =
            `<p class="error">
               এই তথ্য অনুযায়ী কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি।
             </p>`;

          return;

        }


        const data =
          snapshot.docs[0].data();


        const photo =
          convertDriveImage(
            data.photo ||
            data.photoUrl ||
            data.image ||
            ""
          );


        box.innerHTML = `

          <div
            class="student-card"
            id="digitalStudentCard"
          >

            <div class="student-card-header">

              <strong>
                AL-HARAMAIN DIGITAL
              </strong>

              <span>
                STUDENT ID CARD
              </span>

            </div>


            <div class="student-photo">

              ${
                photo
                ? `
                  <img
                    src="${escapeHTML(photo)}"
                    alt="Student Photo"
                  >
                `
                : `
                  <div class="no-photo">
                    👨‍🎓
                  </div>
                `
              }

            </div>


            <h3>
              ${escapeHTML(
                data.name ||
                data.studentName ||
                "শিক্ষার্থী"
              )}
            </h3>


            <div class="student-details">

              <p>
                <strong>রোল:</strong>
                ${escapeHTML(
                  data.roll ||
                  roll
                )}
              </p>


              <p>
                <strong>শ্রেণী:</strong>
                ${escapeHTML(
                  data.className ||
                  className
                )}
              </p>


              <p>
                <strong>শিক্ষাবর্ষ:</strong>
                ${escapeHTML(
                  data.academicYear ||
                  academicYear
                )}
              </p>


              ${
                data.studentId
                ? `
                  <p>
                    <strong>Student ID:</strong>
                    ${escapeHTML(
                      data.studentId
                    )}
                  </p>
                `
                : ""
              }

            </div>


            <div class="student-motto">
              সফলতা তোমার অপেক্ষায়
            </div>


            <div class="student-qr">

              <div
                class="qr-code"
                data-url="${escapeHTML(
                  window.location.href
                )}"
              ></div>

              <small>
                Al-Haramain Digital
              </small>

            </div>

          </div>


          <button
            type="button"
            id="downloadStudentPDF"
            class="download-pdf-btn"
          >
            📥 Digital ID Card Download
          </button>

        `;


        generateQRCode();


        initStudentPDF();


      } catch (error) {

        console.error(
          "Student Search Error:",
          error
        );


        box.innerHTML =
          `<p class="error">
             শিক্ষার্থীর তথ্য খুঁজতে সমস্যা হয়েছে।
           </p>`;

      }

    }
  );

}


/* =========================================================
   20. QR CODE
========================================================= */

function generateQRCode() {

  const qr =
    document.querySelector(
      ".qr-code"
    );


  if (!qr) return;


  const url =
    encodeURIComponent(
      window.location.href
    );


  qr.innerHTML = `

    <img
      src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${url}"
      alt="Website QR Code"
      loading="lazy"
    >

  `;

}


/* =========================================================
   21. DIGITAL ID PDF
========================================================= */

function initStudentPDF() {

  const button =
    document.getElementById(
      "downloadStudentPDF"
    );


  const card =
    document.getElementById(
      "digitalStudentCard"
    );


  if (
    !button ||
    !card
  ) return;


  button.addEventListener(
    "click",
    async () => {

      button.disabled =
        true;


      button.textContent =
        "PDF তৈরি হচ্ছে...";


      try {

        if (
          typeof window.jspdf ===
          "undefined"
        ) {

          const script =
            document.createElement(
              "script"
            );


          script.src =
            "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";


          document.head.appendChild(
            script
          );


          await new Promise(
            resolve => {

              script.onload =
                resolve;

              script.onerror =
                resolve;

            }
          );

        }


        if (
          typeof window.jspdf ===
          "undefined"
        ) {

          throw new Error(
            "PDF library unavailable"
          );

        }


        const {
          jsPDF
        } =
          window.jspdf;


        const pdf =
          new jsPDF(
            "p",
            "mm",
            "a4"
          );


        pdf.setFontSize(18);

        pdf.text(
          "AL-HARAMAIN DIGITAL",
          105,
          25,
          {
            align: "center"
          }
        );


        pdf.setFontSize(14);

        pdf.text(
          "STUDENT DIGITAL ID CARD",
          105,
          34,
          {
            align: "center"
          }
        );


        let y =
          55;


        const name =
          card.querySelector(
            "h3"
          )?.textContent.trim() ||
          "Student";


        const details =
          Array.from(
            card.querySelectorAll(
              ".student-details p"
            )
          );


        pdf.setFontSize(12);


        pdf.text(
          "Name: " + name,
          25,
          y
        );


        y += 10;


        details.forEach(
          item => {

            pdf.text(
              item.textContent
                .trim()
                .replace(
                  /\s+/g,
                  " "
                ),
              25,
              y
            );

            y += 9;

          }
        );


        y += 10;


        pdf.setFontSize(14);

        pdf.text(
          "সফলতা তোমার অপেক্ষায়",
          105,
          y,
          {
            align: "center"
          }
        );


        y += 20;


        pdf.setFontSize(10);

        pdf.text(
          "Website:",
          25,
          y
        );


        y += 7;


        pdf.text(
          window.location.origin,
          25,
          y
        );


        pdf.save(
          "Al-Haramain-Student-ID.pdf"
        );


      } catch (error) {

        console.error(
          "PDF Error:",
          error
        );


        alert(
          "PDF তৈরি করা যায়নি।"
        );

      }


      button.disabled =
        false;


      button.textContent =
        "📥 Digital ID Card Download";

    }
  );

}


/* =========================================================
   22. PHOTO GALLERY
   Show latest 5
========================================================= */

async function loadGallery() {

  const container =
    getElement(
      "galleryList",
      "galleryGrid",
      "photoGallery"
    );


  if (!container) return;


  container.innerHTML =
    '<div class="loading">ছবি লোড হচ্ছে...</div>';


  try {

    let snapshot;


    try {

      const q =
        query(
          collection(
            db,
            "gallery"
          ),
          orderBy(
            "createdAt",
            "desc"
          ),
          limit(5)
        );


      snapshot =
        await getDocs(q);


    } catch {

      snapshot =
        await getDocs(
          collection(
            db,
            "gallery"
          )
        );

    }


    if (snapshot.empty) {

      container.innerHTML =
        '<div class="empty">এখনো কোনো ছবি যোগ করা হয়নি।</div>';

      return;

    }


    const docs =
      Array.from(
        snapshot.docs
      ).slice(0, 5);


    container.innerHTML =
      docs
        .map(
          galleryDoc => {

            const data =
              galleryDoc.data();


            const image =
              convertDriveImage(
                data.imageUrl ||
                data.image ||
                data.photo ||
                data.url ||
                ""
              );


            if (!image) return "";


            return `

              <div class="gallery-item">

                <img
                  src="${escapeHTML(image)}"
                  alt="${escapeHTML(
                    data.title ||
                    "Al-Haramain Gallery"
                  )}"
                  loading="lazy"
                >


                ${
                  data.title
                  ? `
                    <div class="gallery-caption">
                      ${escapeHTML(
                        data.title
                      )}
                    </div>
                  `
                  : ""
                }

              </div>

            `;

          }
        )
        .join("");


  } catch (error) {

    console.error(
      "Gallery Error:",
      error
    );


    container.innerHTML =
      '<div class="empty">ফটো গ্যালারি লোড করা যাচ্ছে না।</div>';

  }

}


/* =========================================================
   23. ALL GALLERY BUTTON
========================================================= */

function initAllGallery() {

  const buttons =
    document.querySelectorAll(
      "#allGallery, .all-gallery"
    );


  buttons.forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.preventDefault();

          window.location.href =
            "gallery.html";

        }
      );

    }
  );

}


/* =========================================================
   24. EMERGENCY NOTICE
========================================================= */

async function loadEmergencyNotice() {

  const element =
    getElement(
      "emergencyNotice",
      "emergencyText"
    );


  if (!element) return;


  try {

    const q =
      query(
        collection(
          db,
          "emergencyNotices"
        ),
        limit(1)
      );


    const snapshot =
      await getDocs(q);


    if (
      !snapshot.empty
    ) {

      const data =
        snapshot.docs[0].data();


      element.textContent =
        data.text ||
        data.title ||
        "নতুন জরুরি নোটিশ এখানে প্রকাশিত হবে।";

    }

  } catch (error) {

    console.error(
      "Emergency Notice Error:",
      error
    );

  }

}


/* =========================================================
   25. ADMISSION FORM
========================================================= */

function initAdmissionForm() {

  const form =
    getElement(
      "admission-form",
      "admissionForm"
    );


  if (!form) return;


  form.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const message =
        getElement(
          "admissionMessage"
        );


      const getValue =
        (...ids) => {

          const element =
            getElement(...ids);

          return (
            element?.value.trim() ||
            ""
          );

        };


      const studentName =
        getValue(
          "studentName"
        );


      const fatherName =
        getValue(
          "fatherName"
        );


      const phone =
        getValue(
          "phone"
        );


      const department =
        getValue(
          "department"
        );


      const address =
        getValue(
          "address"
        );


      if (
        !studentName ||
        !fatherName ||
        !phone ||
        !department ||
        !address
      ) {

        if (message) {

          message.textContent =
            "অনুগ্রহ করে সব তথ্য পূরণ করুন।";

        }

        return;

      }


      if (message) {

        message.textContent =
          "আবেদন জমা হচ্ছে...";

      }


      try {

        const {
          addDoc
        } =
        await import(
          "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
        );


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

            status:
              "pending",

            createdAt:
              new Date()
                .toISOString()

          }
        );


        if (message) {

          message.textContent =
            "আলহামদুলিল্লাহ! আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে।";

        }


        form.reset();


      } catch (error) {

        console.error(
          "Admission Error:",
          error
        );


        if (message) {

          message.textContent =
            "আবেদন জমা দেওয়া যায়নি। পরে আবার চেষ্টা করুন।";

        }

      }

    }
  );

}


/* =========================================================
   26. GOOGLE MAP
========================================================= */

function initMap() {

  const map =
    document.getElementById(
      "map"
    );


  if (!map) return;


  /*
    এখানে Google Maps Embed URL দিলে
    সরাসরি iframe-এ দেখানো যাবে।
  */

  const mapUrl =
    map.dataset.mapUrl ||
    "";


  if (
    mapUrl &&
    map.tagName === "IFRAME"
  ) {

    map.src =
      mapUrl;

  }

}


/* =========================================================
   27. SMOOTH SCROLL
========================================================= */

function initSmoothScroll() {

  document
    .querySelectorAll(
      'a[href^="#"]'
    )
    .forEach(
      link => {

        link.addEventListener(
          "click",
          event => {

            const targetId =
              link
                .getAttribute(
                  "href"
                )
                .substring(1);


            const target =
              document.getElementById(
                targetId
              );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
              behavior:
                "smooth"
            });

          }
        );

      }
    );

}


/* =========================================================
   28. START WEBSITE
========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  async () => {

    initLoader();


    await loadHeader();


    await loadFooter();


    initSlider();


    initDepartments();


    initScrollAnimation();


    initAdmissionForm();


    initResultSearch();


    initStudentSearch();


    initMap();


    initSmoothScroll();


    initAllAchievements();


    initAllNotices();


    initAllGallery();


    await loadAchievements();


    await loadNotices();


    await loadGallery();


    await loadEmergencyNotice();

  }
);


/* =========================================================
   29. GLOBAL ACCESS
========================================================= */

window.AlHaramain = {

  app,

  db,

  convertDriveImage,

  loadAchievements,

  loadNotices,

  loadGallery,

  loadEmergencyNotice

};
