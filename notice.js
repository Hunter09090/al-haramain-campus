/* =================================================
   AL-HARAMAIN DIGITAL
   NOTICE SYSTEM
================================================= */


/* ================================================
   ELEMENTS
================================================ */

const noticeList =
  document.getElementById("noticeList");

const noticeEmpty =
  document.getElementById("noticeEmpty");

const noticeSearch =
  document.getElementById("noticeSearch");



let allNotices = [];



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
      header.querySelector(".menu-btn");

    const navLinks =
      header.querySelector(".nav-links");


    if (menuBtn && navLinks) {

      menuBtn.addEventListener(
        "click",
        () => {

          const open =
            navLinks.classList.toggle("open");

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

              menuBtn.textContent = "☰";

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
   LOAD NOTICES
================================================ */

async function loadNotices() {

  if (!window.noticeDB) {

    showEmpty();

    return;

  }


  try {

    const {
      collection,
      getDocs,
      query,
      orderBy
    } = await import(
      "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"
    );


    const noticeQuery =
      query(
        collection(
          window.noticeDB,
          "notices"
        ),
        orderBy(
          "createdAt",
          "desc"
        )
      );


    const snapshot =
      await getDocs(
        noticeQuery
      );


    allNotices = [];


    snapshot.forEach(doc => {

      allNotices.push({

        id: doc.id,

        ...doc.data()

      });

    });


    renderNotices(allNotices);


  } catch (error) {

    console.error(
      "Notice Loading Error:",
      error
    );


    /*
      যদি database-এ notice collection
      এখনো না থাকে, website ভেঙে যাবে না।
    */

    showEmpty();

  }

}



/* ================================================
   RENDER NOTICES
================================================ */

function renderNotices(notices) {

  noticeList.innerHTML = "";


  if (!notices.length) {

    showEmpty();

    return;

  }


  noticeEmpty.hidden = true;


  notices.forEach(notice => {

    const card =
      document.createElement("article");


    card.className =
      "notice-page-card";


    if (notice.important === true) {

      card.classList.add(
        "important"
      );

    }


    const date =
      formatDate(
        notice.createdAt ||
        notice.date
      );


    card.innerHTML = `

      <div class="notice-date-box">

        <strong>
          ${date.day}
        </strong>

        <span>
          ${date.month}
        </span>

      </div>


      <div class="notice-page-content">

        ${
          notice.important === true
          ? `
            <span class="important-label">
              গুরুত্বপূর্ণ
            </span>
          `
          : ""
        }


        <h2>
          ${escapeHTML(
            notice.title ||
            "নোটিশ"
          )}
        </h2>


        <p>
          ${escapeHTML(
            notice.description ||
            notice.text ||
            ""
          )}
        </p>


        <div class="notice-meta">

          প্রকাশের তারিখ:
          ${date.full}

        </div>

      </div>

    `;


    noticeList.appendChild(card);

  });

}



/* ================================================
   SEARCH
================================================ */

noticeSearch.addEventListener(
  "input",
  () => {

    const search =
      noticeSearch.value
        .trim()
        .toLowerCase();


    if (!search) {

      renderNotices(
        allNotices
      );

      return;

    }


    const filtered =
      allNotices.filter(notice => {

        const title =
          (
            notice.title || ""
          ).toLowerCase();


        const description =
          (
            notice.description ||
            notice.text ||
            ""
          ).toLowerCase();


        return (
          title.includes(search) ||
          description.includes(search)
        );

      });


    renderNotices(filtered);

  }
);



/* ================================================
   DATE FORMAT
================================================ */

function formatDate(value) {

  let date;


  if (
    value &&
    typeof value.toDate === "function"
  ) {

    date = value.toDate();

  }

  else if (value) {

    date = new Date(value);

  }

  else {

    date = new Date();

  }


  const months = [

    "জানুয়ারি",
    "ফেব্রুয়ারি",
    "মার্চ",
    "এপ্রিল",
    "মে",
    "জুন",
    "জুলাই",
    "আগস্ট",
    "সেপ্টেম্বর",
    "অক্টোবর",
    "নভেম্বর",
    "ডিসেম্বর"

  ];


  return {

    day:
      date.getDate(),

    month:
      months[
        date.getMonth()
      ],

    full:
      `${date.getDate()} ${
        months[date.getMonth()]
      } ${date.getFullYear()}`

  };

}



/* ================================================
   HTML SECURITY
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
   EMPTY
================================================ */

function showEmpty() {

  noticeList.innerHTML = "";

  noticeEmpty.hidden = false;

}



/* ================================================
   START
================================================ */

(async function () {

  await loadHeader();

  await loadFooter();

  await loadNotices();

})();
