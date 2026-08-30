// ================================================
// Firebase Configuration
// Al-Haramain Digital
// ================================================

const firebaseConfig = {

  apiKey:
    "AIzaSyDYKfabHaqiUrX7__NT-M1IwOREXl9IBA",

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


// =================================================
// FIREBASE IMPORT
// =================================================

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
  limit,
  orderBy
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";


import {
  getAuth
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


// =================================================
// INITIALIZE FIREBASE
// =================================================

const app =
  initializeApp(
    firebaseConfig
  );


const db =
  getFirestore(app);


const auth =
  getAuth(app);


// =================================================
// LOADING SCREEN
// =================================================

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


// =================================================
// LOAD HEADER
// =================================================

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
        "Header could not be loaded."
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


// =================================================
// LOAD FOOTER
// =================================================

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
        "Footer could not be loaded."
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


// =================================================
// MOBILE NAVIGATION
// =================================================

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
  ) {

    return;

  }


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


// =================================================
// HERO PHOTO SLIDER
// =================================================

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


  let currentSlide = 0;


  function showSlide(
    index
  ) {

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


// =================================================
// SCROLL ANIMATION
// =================================================

function initScrollAnimation() {

  const sections =
    document.querySelectorAll(
      ".section, .director-card, .info-card, .stat-box, .notice-card, .gallery-item"
    );


  if (!sections.length) return;


  sections.forEach(
    item => {

      item.classList.add(
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


  sections.forEach(
    item => {

      observer.observe(
        item
      );

    }
  );

}


// =================================================
// ADMISSION FORM
// =================================================

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

            status:
              "pending",

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


// =================================================
// LOAD NOTICES
// =================================================

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


    if (
      snapshot.empty
    ) {

      return;

    }


    noticeList.innerHTML =
      "";


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
                data.title || "নোটিশ"
              )}
            </h3>

            <p>
              ${escapeHTML(
                data.description || ""
              )}
            </p>

          </div>

        `;


        noticeList.appendChild(
          article
        );

      }
    );


  } catch (error) {

    console.error(
      "Notice Error:",
      error
    );

  }

}

// =================================================
// LOAD DEPARTMENTS
// Firebase: departments collection
// =================================================

async function loadDepartments() {

  const departmentList =
    document.getElementById(
      "departmentList"
    );

  if (!departmentList) return;


  // Loading message

  departmentList.innerHTML = `
    <div class="department-loading">
      বিভাগসমূহ লোড হচ্ছে...
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


    // যদি কোনো বিভাগ না থাকে

    if (snapshot.empty) {

      departmentList.innerHTML = `
        <div class="department-loading">
          বর্তমানে কোনো বিভাগ যোগ করা হয়নি।
        </div>
      `;

      return;

    }


    departmentList.innerHTML = "";


    let activeCount = 0;


    snapshot.forEach(
      departmentDoc => {

        const data =
          departmentDoc.data();


        // Admin থেকে বন্ধ করা বিভাগ Website-এ দেখাবে না

        if (
          data.active === false
        ) {

          return;

        }


        activeCount++;


        const card =
          document.createElement(
            "div"
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
              ? `
                <span class="department-class">

                  ${escapeHTML(
                    data.className
                  )}

                </span>
              `
              : ""
            }


            <p>

              ${escapeHTML(
                data.description ||
                ""
              )}

            </p>

          </div>

        `;


        departmentList.appendChild(
          card
        );

      }
    );


    // সব বিভাগ inactive হলে

    if (
      activeCount === 0
    ) {

      departmentList.innerHTML = `
        <div class="department-loading">
          বর্তমানে কোনো বিভাগ প্রকাশিত নেই।
        </div>
      `;

    }


  } catch (error) {

    console.error(
      "Department Error:",
      error
    );


    departmentList.innerHTML = `
      <div class="department-loading">
        বিভাগসমূহ লোড করা যায়নি।
      </div>
    `;

  }

}
// =================================================
// LOAD ACHIEVEMENTS
// =================================================

async function loadAchievements() {

  const achievementList =
    document.getElementById(
      "achievementList"
    );


  if (!achievementList) {

    return;

  }


  try {

    const achievementQuery =
      query(

        collection(
          db,
          "achievements"
        ),

        orderBy(
          "date",
          "desc"
        )

      );


    const snapshot =
      await getDocs(
        achievementQuery
      );


    achievementList.innerHTML =
      "";


    if (
      snapshot.empty
    ) {

      achievementList.innerHTML = `

        <div class="achievement-loading">

          এখনো কোনো নতুন অর্জন প্রকাশ করা হয়নি।

        </div>

      `;


      return;

    }


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


        if (
          data.featured === true
        ) {

          card.classList.add(
            "featured"
          );

        }


        card.innerHTML = `

          ${
            data.featured === true
            ? `
              <div class="achievement-badge">
                ⭐ গুরুত্বপূর্ণ অর্জন
              </div>
            `
            : ""
          }


          <div class="achievement-header">

            <h3>
              ${escapeHTML(
                data.title ||
                "অর্জন"
              )}
            </h3>


            <span>
              ${formatAchievementDate(
                data.date
              )}
            </span>

          </div>


          <div class="achievement-category">

            ${escapeHTML(
              data.category ||
              "সাধারণ"
            )}

          </div>


          <p>

            ${escapeHTML(
              data.description ||
              ""
            )}

          </p>

        `;


        achievementList.appendChild(
          card
        );

      }
    );


  } catch (error) {

    console.error(
      "Achievement Error:",
      error
    );


    achievementList.innerHTML = `

      <div class="achievement-loading">

        অর্জনসমূহ লোড করা যায়নি।

      </div>

    `;

  }

}


// =================================================
// ACHIEVEMENT DATE
// =================================================

function formatAchievementDate(
  value
) {

  if (!value) {

    return "";

  }


  const parts =
    value.split("-");


  if (
    parts.length !== 3
  ) {

    return value;

  }


  return (
    parts[2] +
    "-" +
    parts[1] +
    "-" +
    parts[0]
  );

}


// =================================================
// EMERGENCY NOTICE
// =================================================

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


    if (
      !snapshot.empty
    ) {

      snapshot.forEach(
        emergencyDoc => {

          const data =
            emergencyDoc.data();


          notice.textContent =
            data.text ||
            "নতুন জরুরি নোটিশ এখানে প্রদর্শিত হবে...";

        }
      );

    }

  } catch (error) {

    console.error(
      "Emergency Notice Error:",
      error
    );

  }

}


// =================================================
// RESULT SEARCH
// =================================================

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
  ) {

    return;

  }


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


        if (
          snapshot.empty
        ) {

          resultBox.textContent =
            "এই রোল নম্বরের কোনো রেজাল্ট পাওয়া যায়নি।";


          return;

        }


        let resultHTML =
          "";


        snapshot.forEach(
          resultDoc => {

            const data =
              resultDoc.data();


            resultHTML = `

              <div>

                <strong>
                  ${escapeHTML(
                    data.studentName ||
                    "শিক্ষার্থী"
                  )}
                </strong>

                <br>

                রোল:
                ${escapeHTML(
                  data.roll || "-"
                )}

                <br>

                শ্রেণি:
                ${escapeHTML(
                  data.className || "-"
                )}

                <br>

                ফলাফল:
                ${escapeHTML(
                  data.result || "-"
                )}

              </div>

            `;

          }
        );


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


// =================================================
// STUDENT INFORMATION SEARCH
// =================================================

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
  ) {

    return;

  }


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


        if (
          snapshot.empty
        ) {

          box.textContent =
            "এই ID-এর কোনো শিক্ষার্থীর তথ্য পাওয়া যায়নি।";


          return;

        }


        snapshot.forEach(
          studentDoc => {

            const data =
              studentDoc.data();


            box.innerHTML = `

              <div>

                <strong>
                  ${escapeHTML(
                    data.name ||
                    "নাম নেই"
                  )}
                </strong>

                <br>

                Student ID:
                ${escapeHTML(
                  data.studentId ||
                  "-"
                )}

                <br>

                শ্রেণি:
                ${escapeHTML(
                  data.className ||
                  "-"
                )}

                <br>

                রোল:
                ${escapeHTML(
                  data.roll ||
                  "-"
                )}

              </div>

            `;

          }
        );


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


// =================================================
// GOOGLE MAP
// =================================================

function initMap() {

  /*
    Google Maps Embed API ব্যবহার করলে
    এখানে Embed URL ব্যবহার করা যাবে।

    বর্তমানে আপনার Google Maps share link
    আলাদা button/link হিসেবে ব্যবহার করা যাবে।
  */

}


// =================================================
// HTML SECURITY
// =================================================

function escapeHTML(
  value
) {

  return String(value)

    .replace(
      /&/g,
      "&amp;"
    )

    .replace(
      /</g,
      "&lt;"
    )

    .replace(
      />/g,
      "&gt;"
    )

    .replace(
      /"/g,
      "&quot;"
    )

    .replace(
      /'/g,
      "&#039;"
    );

}


// =================================================
// START EVERYTHING
// =================================================

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

    await loadAchievements();

    await loadDepartments();
    
    await loadEmergencyNotice();

  }
);


// =================================================
// GLOBAL ACCESS
// =================================================

window.AlHaramain = {

  firebaseApp:
    app,

  database:
    db,

  authentication:
    auth

};
