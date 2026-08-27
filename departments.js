
/* =================================================
   AL-HARAMAIN DIGITAL
   DEPARTMENT SYSTEM
================================================= */


/* ================================================
   ELEMENT
================================================ */

const departmentList =
  document.getElementById(
    "departmentList"
  );



/* ================================================
   DEFAULT DEPARTMENTS
   -----------------------------------------------
   Firestore-এ এখনো কোনো data না থাকলে
   এগুলো Website-এ দেখা যাবে।
================================================ */

const defaultDepartments = [

  {
    icon: "📖",
    name: "নূরানী বিভাগ",
    description:
      "শুদ্ধভাবে কুরআন শিক্ষা ও প্রাথমিক দ্বীনি শিক্ষার ব্যবস্থা।"
  },


  {
    icon: "📗",
    name: "নাজেরা বিভাগ",
    description:
      "শুদ্ধ তিলাওয়াত ও নিয়মিত কুরআন পাঠের জন্য বিশেষ শিক্ষা কার্যক্রম।"
  },


  {
    icon: "📕",
    name: "হিফজ বিভাগ",
    description:
      "পবিত্র কুরআন হিফজ করার জন্য পরিকল্পিত ও নিয়মিত শিক্ষা ব্যবস্থা।"
  },


  {
    icon: "📚",
    name: "কিতাব বিভাগ",
    description:
      "ইসলামী জ্ঞান ও প্রয়োজনীয় কিতাবি শিক্ষার সমন্বিত কার্যক্রম।"
  }

];



/* ================================================
   LOAD HEADER
================================================ */

async function loadHeader() {

  const header =
    document.getElementById("header");


  if (!header) return;


  try {

    const response =
      await fetch("header.html");


    header.innerHTML =
      await response.text();


    const menuBtn =
      header.querySelector(
        ".menu-btn"
      );


    const navLinks =
      header.querySelector(
        ".nav-links"
      );


    if (
      menuBtn &&
      navLinks
    ) {

      menuBtn.addEventListener(
        "click",
        () => {

          const open =
            navLinks.classList.toggle(
              "open"
            );


          menuBtn.setAttribute(
            "aria-expanded",
            open
          );


          menuBtn.textContent =
            open ? "✕" : "☰";

        }
      );


      navLinks
        .querySelectorAll("a")
        .forEach(link => {

          link.addEventListener(
            "click",
            () => {

              navLinks
                .classList
                .remove("open");

              menuBtn.textContent =
                "☰";

            }
          );

        });

    }


  } catch (error) {

    console.error(
      "Header Error:",
      error
    );

  }

}



/* ================================================
   LOAD FOOTER
================================================ */

async function loadFooter() {

  const footer =
    document.getElementById("footer");


  if (!footer) return;


  try {

    const response =
      await fetch("footer.html");


    footer.innerHTML =
      await response.text();


  } catch (error) {

    console.error(
      "Footer Error:",
      error
    );

  }

}



/* ================================================
   LOAD FIRESTORE DEPARTMENTS
================================================ */

async function loadDepartments() {

  try {

    const {

      collection,

      getDocs,

      query,

      orderBy

    } = await import(

      "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"

    );


    const departmentQuery =
      query(

        collection(
          window.departmentDB,
          "departments"
        ),

        orderBy(
          "order",
          "asc"
        )

      );


    const snapshot =
      await getDocs(
        departmentQuery
      );


    /* =========================================
       NO FIRESTORE DATA
    ========================================== */

    if (snapshot.empty) {

      renderDepartments(
        defaultDepartments
      );

      return;

    }


    const departments = [];


    snapshot.forEach(doc => {

      departments.push({

        id: doc.id,

        ...doc.data()

      });

    });


    renderDepartments(
      departments
    );


  } catch (error) {

    console.error(
      "Department Error:",
      error
    );


    /*
      Firebase-এ collection না থাকলেও
      Website বন্ধ হবে না।
    */

    renderDepartments(
      defaultDepartments
    );

  }

}



/* ================================================
   RENDER
================================================ */

function renderDepartments(
  departments
) {

  departmentList.innerHTML = "";


  departments.forEach(
    department => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "department-card";


      card.innerHTML = `

        <div class="department-icon">

          ${escapeHTML(
            department.icon ||
            "📚"
          )}

        </div>


        <h3>

          ${escapeHTML(
            department.name ||
            "শিক্ষা বিভাগ"
          )}

        </h3>


        <p>

          ${escapeHTML(
            department.description ||
            ""
          )}

        </p>

      `;


      departmentList.appendChild(
        card
      );

    }
  );

}



/* ================================================
   SECURITY
================================================ */

function escapeHTML(value) {

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



/* ================================================
   START
================================================ */

(async function () {

  await loadHeader();

  await loadFooter();

  await loadDepartments();

})();
