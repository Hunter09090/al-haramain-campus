/* =========================================================
   AL-HARAMAIN DIGITAL
   DATABASE.JS — FINAL VERSION
   Firebase + Departments + Achievements + Notices
   Admission + Results + Students + Gallery
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
  addDoc,
  query,
  where,
  orderBy,
  limit,
  serverTimestamp
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


import {
  getAuth
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


/* =========================================================
   3. INITIALIZE FIREBASE
========================================================= */

const app =
  initializeApp(firebaseConfig);


const db =
  getFirestore(app);


const auth =
  getAuth(app);


/* =========================================================
   4. GOOGLE DRIVE IMAGE CONVERTER
========================================================= */

function driveImageURL(url) {

  if (!url) return "";

  url = url.trim();

  let match =
    url.match(
      /\/d\/([a-zA-Z0-9_-]+)/
    );

  if (!match) {

    match =
      url.match(
        /id=([a-zA-Z0-9_-]+)/
      );

  }

  if (match && match[1]) {

    return `https://drive.google.com/uc?export=view&id=${match[1]}`;

  }

  return url;

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
   6. LOADING SCREEN
========================================================= */

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


/* =========================================================
   7. HEADER
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
        "Header load failed"
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
   8. FOOTER
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
        "Footer load failed"
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
   9. NAVBAR
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


  if (!menuBtn || !navLinks)
    return;


  menuBtn.addEventListener(
    "click",
    () => {

      navLinks.classList.toggle(
        "open"
      );

    }
  );


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
   10. HERO SLIDER
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


  if (!slides.length)
    return;


  let currentSlide = 0;


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


  function nextSlide() {

    currentSlide++;

    if (
      currentSlide >=
      slides.length
    ) {

      currentSlide = 0;

    }

    showSlide(
      currentSlide
    );

  }


  dots.forEach(
    (dot, index) => {

      dot.addEventListener(
        "click",
        () => {

          currentSlide =
            index;

          showSlide(
            currentSlide
          );

        }
      );

    }
  );


  showSlide(0);


  setInterval(
    nextSlide,
    5000
  );

}


/* =========================================================
   11. SCROLL ANIMATION
========================================================= */

function initScrollAnimation() {

  const elements =
    document.querySelectorAll(
      ".section, .director-card, .info-card, " +
      ".stat-box, .notice-card, .gallery-item, " +
      ".department-card, .achievement-card, " +
      ".location-card, .quick-info-item"
    );


  if (!elements.length)
    return;


  elements.forEach(
    item => {

      item.classList.add(
        "reveal"
      );

    }
  );


  if (
    !("IntersectionObserver" in window)
  ) {

    elements.forEach(
      item => {

        item.classList.add(
          "show"
        );

      }
    );

    return;

  }


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
    item => {

      observer.observe(
        item
      );

    }
  );

}


/* =========================================================
   12. LOAD DEPARTMENTS
========================================================= */

async function loadDepartments() {

  const list =
    document.getElementById(
      "departmentList"
    );


  if (!list)
    return;


  list.innerHTML =
    `
      <div class="loading-card">
        বিভাগ লোড হচ্ছে...
      </div>
    `;


  try {

    const departmentQuery =
      query(

        collection(
          db,
          "departments"
        ),

        orderBy(
          "name",
          "asc"
        )

      );


    const snapshot =
      await getDocs(
        departmentQuery
      );


    if (snapshot.empty) {

      list.innerHTML =
        `
          <div class="empty-card">
            এখনো কোনো বিভাগ যোগ করা হয়নি।
          </div>
        `;

      return;

    }


    list.innerHTML = "";


    snapshot.forEach(
      departmentDoc => {

        const data =
          departmentDoc.data();


        if (
          data.active === false
        )
          return;


        const card =
          document.createElement(
            "article"
          );


        card.className =
          "department-card";


        card.innerHTML = `

          <div class="department-icon">

            ${escapeHTML(
              data.icon || "📚"
            )}

          </div>


          <div class="department-content">

            <h3>

              ${escapeHTML(
                data.name ||
                "বিভাগ"
              )}

            </h3>


            ${
              data.className
              ?
              `
                <span class="department-class">

                  ${escapeHTML(
                    data.className
                  )}

                </span>
              `
              :
              ""
            }


            <p>

              ${escapeHTML(
                data.description ||
                ""
              )}

            </p>

          </div>

        `;


        list.appendChild(
          card
        );

      }
    );


  } catch (error) {

    console.error(
      "Department Error:",
      error
    );


    list.innerHTML =
      `
        <div class="empty-card">
          বিভাগ লোড করা যায়নি।
        </div>
      `;

  }

}


/* =========================================================
   13. LOAD DEPARTMENT OPTIONS
========================================================= */

async function loadDepartmentOptions() {

  const select =
    document.getElementById(
      "department"
    );


  if (!select)
    return;


  try {

    const snapshot =
      await getDocs(
        query(

          collection(
            db,
            "departments"
          ),

          orderBy(
            "name",
            "asc"
          )

        )
      );


    snapshot.forEach(
      departmentDoc => {

        const data =
          departmentDoc.data();


        if (
          data.active === false
        )
          return;


        const option =
          document.createElement(
            "option"
          );


        option.value =
          data.name || "";


        option.textContent =
          data.name || "বিভাগ";


        select.appendChild(
          option
        );

      }
    );


  } catch (error) {

    console.error(
      "Department Option Error:",
      error
    );

  }

}


/* =========================================================
   14. LOAD ACHIEVEMENTS
========================================================= */

async function loadAchievements() {

  const list =
    document.getElementById(
      "achievementList"
    );


  if (!list)
    return;


  list.innerHTML =
    `
      <div class="loading-card">
        অর্জনসমূহ লোড হচ্ছে...
      </div>
    `;


  try {

    const achievementQuery =
      query(

        collection(
          db,
          "achievements"
        ),

        orderBy(
          "createdAt",
          "desc"
        ),

        limit(20)

      );


    const snapshot =
      await getDocs(
        achievementQuery
      );


    if (snapshot.empty) {

      list.innerHTML =
        `
          <div class="empty-card">
            এখনো কোনো অর্জন যোগ করা হয়নি।
          </div>
        `;

      return;

    }


    list.innerHTML = "";


    snapshot.forEach(
      achievementDoc => {

        const data =
          achievementDoc.data();


        const card =
          document.createElement(
            "article"
          );


        card.className =
          "achievement-card";


        const image =
          driveImageURL(
            data.image ||
            data.imageUrl ||
            data.photo ||
            ""
          );


        card.innerHTML = `

          ${
            image
            ?
            `
              <div class="achievement-image">

                <img
                  src="${escapeHTML(image)}"
                  alt="${escapeHTML(
                    data.title ||
                    "অর্জন"
                  )}"
                  loading="lazy"
                  onerror="this.parentElement.style.display='none'"
                >

              </div>
            `
            :
            `
              <div class="achievement-placeholder">
                🏆
              </div>
            `
          }


          <div class="achievement-content">

            <h3>

              ${escapeHTML(
                data.title ||
                "অর্জন"
              )}

            </h3>


            <p>

              ${escapeHTML(
                data.description ||
                ""
              )}

            </p>


            ${
              data.year
              ?
              `
                <span class="achievement-year">

                  ${escapeHTML(
                    data.year
                  )}

                </span>
              `
              :
              ""
            }

          </div>

        `;


        list.appendChild(
          card
        );

      }
    );


  } catch (error) {

    console.error(
      "Achievement Error:",
      error
    );


    list.innerHTML =
      `
        <div class="empty-card">
          অর্জনসমূহ লোড করা যায়নি।
        </div>
      `;

  }

}


/* =========================================================
   15. ADMISSION FORM
========================================================= */

function initAdmissionForm() {

  const form =
    document.getElementById(
      "admission-form"
    );


  if (!form)
    return;


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

            status:
              "pending",

            createdAt:
              serverTimestamp()

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
          "আবেদন জমা দেওয়া যায়নি। পরে আবার চেষ্টা করুন।";

      }

    }
  );

}


/* =========================================================
   16. LOAD NOTICES
========================================================= */

async function loadNotices() {

  const list =
    document.getElementById(
      "noticeList"
    );


  if (!list)
    return;


  list.innerHTML =
    `
      <div class="loading-card">
        নোটিশ লোড হচ্ছে...
      </div>
    `;


  try {

    const noticeQuery =
      query(

        collection(
          db,
          "notices"
        ),

        limit(20)

      );


    const snapshot =
      await getDocs(
        noticeQuery
      );


    if (snapshot.empty) {

      list.innerHTML =
        `
          <div class="empty-card">
            বর্তমানে কোনো নোটিশ নেই।
          </div>
        `;

      return;

    }


    list.innerHTML = "";


    snapshot.forEach(
      noticeDoc => {

        const data =
          noticeDoc.data();


        const article =
          document.createElement(
            "article"
          );


        article.className =
          "notice-card";


        article.innerHTML = `

          <div class="notice-date">

            <strong>

              ${escapeHTML(
                data.day ||
                "--"
              )}

            </strong>

            <span>

              ${escapeHTML(
                data.month ||
                "---"
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
                ""
              )}

            </p>

          </div>

        `;


        list.appendChild(
          article
        );

      }
    );


  } catch (error) {

    console.error(
      "Notice Error:",
      error
    );


    list.innerHTML =
      `
        <div class="empty-card">
          নোটিশ লোড করা যায়নি।
        </div>
      `;

  }

}


/* =========================================================
   17. EMERGENCY NOTICE
========================================================= */

async function loadEmergencyNotice() {

  const notice =
    document.getElementById(
      "emergencyNotice"
    );


  if (!notice)
    return;


  try {

    const emergencyQuery =
      query(

        collection(
          db,
          "emergencyNotices"
        ),

        limit(1)

      );


    const snapshot =
      await getDocs(
        emergencyQuery
      );


    if (!snapshot.empty) {

      snapshot.forEach(
        emergencyDoc => {

          const data =
            emergencyDoc.data();


          notice.textContent =
            data.text ||
            "বর্তমানে কোনো জরুরি নোটিশ নেই।";

        }
      );

    } else {

      notice.textContent =
        "বর্তমানে কোনো জরুরি নোটিশ নেই।";

    }


  } catch (error) {

    console.error(
      "Emergency Notice Error:",
      error
    );


    notice.textContent =
      "জরুরি নোটিশ লোড করা যায়নি।";

  }

}


/* =========================================================
   18. RESULT SEARCH
========================================================= */

function initResultSearch() {

  const button =
    document.getElementById(
      "resultBtn"
    );


  const rollInput =
    document.getElementById(
      "resultRoll"
    );


  const classInput =
    document.getElementById(
      "resultClass"
    );


  const yearInput =
    document.getElementById(
      "resultYear"
    );


  const examInput =
    document.getElementById(
      "examType"
    );


  const box =
    document.getElementById(
      "resultBox"
    );


  if (
    !button ||
    !rollInput ||
    !box
  )
    return;


  button.addEventListener(
    "click",
    async () => {

      const roll =
        rollInput.value.trim();


      const className =
        classInput
        ? classInput.value
        : "";


      const year =
        yearInput
        ? yearInput.value
        : "";


      const examType =
        examInput
        ? examInput.value
        : "";


      if (!roll) {

        box.textContent =
          "রোল নম্বর লিখুন।";

        return;

      }


      box.innerHTML =
        `
          <div class="loading-card">
            রেজাল্ট খোঁজা হচ্ছে...
          </div>
        `;


      try {

        let conditions = [

          where(
            "roll",
            "==",
            roll
          )

        ];


        if (className) {

          conditions.push(
            where(
              "className",
              "==",
              className
            )
          );

        }


        if (year) {

          conditions.push(
            where(
              "academicYear",
              "==",
              year
            )
          );

        }


        if (examType) {

          conditions.push(
            where(
              "examType",
              "==",
              examType
            )
          );

        }


        const resultQuery =
          query(

            collection(
              db,
              "results"
            ),

            ...conditions,

            limit(1)

          );


        const snapshot =
          await getDocs(
            resultQuery
          );


        if (snapshot.empty) {

          box.innerHTML =
            `
              <div class="empty-card">
                এই তথ্য অনুযায়ী কোনো রেজাল্ট পাওয়া যায়নি।
              </div>
            `;

          return;

        }


        snapshot.forEach(
          resultDoc => {

            const data =
              resultDoc.data();


            box.innerHTML = `

              <div class="result-display">

                <h3>
                  📊 পরীক্ষার ফলাফল
                </h3>


                <div class="result-details">

                  <p>
                    <strong>
                      শিক্ষার্থীর নাম:
                    </strong>

                    ${escapeHTML(
                      data.studentName ||
                      "-"
                    )}
                  </p>


                  <p>
                    <strong>
                      রোল:
                    </strong>

                    ${escapeHTML(
                      data.roll ||
                      roll
                    )}
                  </p>


                  <p>
                    <strong>
                      শ্রেণী:
                    </strong>

                    ${escapeHTML(
                      data.className ||
                      className ||
                      "-"
                    )}
                  </p>


                  <p>
                    <strong>
                      শিক্ষাবর্ষ:
                    </strong>

                    ${escapeHTML(
                      data.academicYear ||
                      year ||
                      "-"
                    )}
                  </p>


                  <p>
                    <strong>
                      পরীক্ষার ধরন:
                    </strong>

                    ${escapeHTML(
                      data.examType ||
                      examType ||
                      "-"
                    )}
                  </p>


                  <p>
                    <strong>
                      ফলাফল:
                    </strong>

                    ${escapeHTML(
                      data.result ||
                      "-"
                    )}
                  </p>

                </div>

              </div>

            `;

          }
        );


      } catch (error) {

        console.error(
          "Result Error:",
          error
        );


        box.innerHTML =
          `
            <div class="empty-card">
              রেজাল্ট খুঁজতে সমস্যা হয়েছে।
            </div>
          `;

      }

    }
  );

}


/* =========================================================
   19. STUDENT SEARCH
========================================================= */

function initStudentSearch() {

  const button =
    document.getElementById(
      "studentBtn"
    );


  const rollInput =
    document.getElementById(
      "studentId"
    );


  const classInput =
    document.getElementById(
      "studentClass"
    );


  const yearInput =
    document.getElementById(
      "studentYear"
    );


  const box =
    document.getElementById(
      "studentBox"
    );


  if (
    !button ||
    !rollInput ||
    !box
  )
    return;


  button.addEventListener(
    "click",
    async () => {

      const roll =
        rollInput.value.trim();


      const className =
        classInput
        ? classInput.value
        : "";


      const academicYear =
        yearInput
        ? yearInput.value
        : "";


      if (!roll) {

        box.textContent =
          "রোল নম্বর লিখুন।";

        return;

      }


      box.innerHTML =
        `
          <div class="loading-card">
            শিক্ষার্থীর তথ্য খোঁজা হচ্ছে...
          </div>
        `;


      try {

        let conditions = [

          where(
            "roll",
            "==",
            roll
          )

        ];


        if (className) {

          conditions.push(
            where(
              "className",
              "==",
              className
            )
          );

        }


        if (academicYear) {

          conditions.push(
            where(
              "academicYear",
              "==",
              academicYear
            )
          );

        }


        const studentQuery =
          query(

            collection(
              db,
              "students"
            ),

            ...conditions,

            limit(1)

          );


        const snapshot =
          await getDocs(
            studentQuery
          );


        if (snapshot.empty) {

          box.innerHTML =
            `
              <div class="empty-card">
                এই তথ্য অনুযায়ী কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি।
              </div>
            `;

          return;

        }


        snapshot.forEach(
          studentDoc => {

            const data =
              studentDoc.data();


            createDigitalIDCard(
              box,
              data
            );

          }
        );


      } catch (error) {

        console.error(
          "Student Search Error:",
          error
        );


        box.innerHTML =
          `
            <div class="empty-card">
              শিক্ষার্থীর তথ্য খুঁজতে সমস্যা হয়েছে।
            </div>
          `;

      }

    }
  );

}


/* =========================================================
   20. DIGITAL ID CARD
========================================================= */

function createDigitalIDCard(
  box,
  data
) {

  const websiteURL =
    window.location.href;


  const studentName =
    data.name ||
    data.studentName ||
    "শিক্ষার্থী";


  const roll =
    data.roll ||
    "-";


  const className =
    data.className ||
    "-";


  const academicYear =
    data.academicYear ||
    "-";


  const studentImage =
    driveImageURL(
      data.photo ||
      data.image ||
      data.photoUrl ||
      ""
    );


  const card =
    document.createElement(
      "div"
    );


  card.className =
    "digital-id-card";


  card.id =
    "digitalIDCard";


  card.innerHTML = `

    <div class="id-card-header">

      <img
        src="logo.png.jpg"
        alt="Al-Haramain Logo"
      >


      <div>

        <h3>
          আল-হারামাইন মডেল মাদ্রাসা
        </h3>

        <small>
          Al-Haramain Model Madrasa
        </small>

      </div>

    </div>


    <div class="id-card-body">


      ${
        studentImage
        ?
        `
          <img
            class="student-photo"
            src="${escapeHTML(
              studentImage
            )}"
            alt="${escapeHTML(
              studentName
            )}"
          >
        `
        :
        `
          <div class="student-photo-placeholder">
            👨‍🎓
          </div>
        `
      }


      <h2>
        ${escapeHTML(
          studentName
        )}
      </h2>


      <div class="id-info">

        <div>

          <span>
            রোল
          </span>

          <strong>
            ${escapeHTML(
              roll
            )}
          </strong>

        </div>


        <div>

          <span>
            শ্রেণী
          </span>

          <strong>
            ${escapeHTML(
              className
            )}
          </strong>

        </div>


        <div>

          <span>
            শিক্ষাবর্ষ
          </span>

          <strong>
            ${escapeHTML(
              academicYear
            )}
          </strong>

        </div>

      </div>


      <div class="id-slogan">

        সফলতা তোমার অপেক্ষায়

      </div>


      <div class="id-qr">

        <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
            websiteURL
          )}"
          alt="Website QR Code"
        >

      </div>


    </div>


    <div class="id-card-footer">

      Al-Haramain Digital

    </div>


    <button
      type="button"
      class="download-id-btn"
      onclick="window.print()"
    >
      📥 Digital ID Card Download / Print
    </button>

  `;


  box.innerHTML =
    "";


  box.appendChild(
    card
  );

}


/* =========================================================
   21. GALLERY
========================================================= */

async function loadGallery() {

  const list =
    document.getElementById(
      "galleryList"
    );


  if (!list)
    return;


  list.innerHTML =
    `
      <div class="loading-card">
        ছবি লোড হচ্ছে...
      </div>
    `;


  try {

    const galleryQuery =
      query(

        collection(
          db,
          "gallery"
        ),

        limit(50)

      );


    const snapshot =
      await getDocs(
        galleryQuery
      );


    if (snapshot.empty) {

      list.innerHTML =
        `
          <div class="empty-card">
            এখনো কোনো ছবি যোগ করা হয়নি।
          </div>
        `;

      return;

    }


    list.innerHTML = "";


    snapshot.forEach(
      galleryDoc => {

        const data =
          galleryDoc.data();


        const image =
          driveImageURL(
            data.image ||
            data.imageUrl ||
            data.url ||
            ""
          );


        if (!image)
          return;


        const item =
          document.createElement(
            "div"
          );


        item.className =
          "gallery-item";


        item.innerHTML = `

          <img
            src="${escapeHTML(
              image
            )}"
            alt="${escapeHTML(
              data.title ||
              "Al-Haramain Gallery"
            )}"
            loading="lazy"
          >

          ${
            data.title
            ?
            `
              <div class="gallery-caption">

                ${escapeHTML(
                  data.title
                )}

              </div>
            `
            :
            ""
          }

        `;


        list.appendChild(
          item
        );

      }
    );


  } catch (error) {

    console.error(
      "Gallery Error:",
      error
    );


    list.innerHTML =
      `
        <div class="empty-card">
          Gallery লোড করা যায়নি।
        </div>
      `;

  }

}


/* =========================================================
   22. GOOGLE MAP
========================================================= */

function initMap() {

  /*
    বর্তমানে Google Maps share link
    index.html-এর button থেকে সরাসরি খোলা হচ্ছে।

    ভবিষ্যতে চাইলে এখানে Google Maps Embed
    যোগ করা যাবে।
  */

}


/* =========================================================
   23. START ALL
========================================================= */

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


    await loadDepartments();

    await loadDepartmentOptions();

    await loadAchievements();

    await loadNotices();

    await loadEmergencyNotice();

    await loadGallery();

  }
);


/* =========================================================
   24. GLOBAL ACCESS
========================================================= */

window.AlHaramain = {

  firebaseApp:
    app,

  database:
    db,

  authentication:
    auth,

  driveImageURL:
    driveImageURL

};
