/* =================================================
   AL-HARAMAIN DIGITAL
   ACHIEVEMENT SYSTEM
================================================= */


/* ================================================
   ELEMENT
================================================ */

const achievementList =
  document.getElementById(
    "achievementList"
  );



/* ================================================
   DEFAULT ACHIEVEMENTS
   -----------------------------------------------
   Firestore-এ data না থাকলেও
   Website ফাঁকা থাকবে না।
================================================ */

const defaultAchievements = [

  {
    icon: "🏫",
    number: "2013",
    title: "প্রতিষ্ঠার বছর",
    description:
      "দ্বীনি ও নৈতিক শিক্ষার উদ্দেশ্যে আমাদের শিক্ষা কার্যক্রমের যাত্রা শুরু।"
  },


  {
    icon: "📚",
    number: "13+",
    title: "শিক্ষা কার্যক্রম",
    description:
      "দীর্ঘ সময় ধরে শিক্ষার্থীদের জ্ঞান ও নৈতিক শিক্ষায় গড়ে তোলার প্রচেষ্টা।"
  },


  {
    icon: "🎓",
    number: "100+",
    title: "শিক্ষার্থীর সাফল্য",
    description:
      "বিভিন্ন পরীক্ষায় ও শিক্ষা কার্যক্রমে শিক্ষার্থীদের সাফল্য।"
  },


  {
    icon: "🏆",
    number: "অনেক",
    title: "বিভিন্ন অর্জন",
    description:
      "শিক্ষার্থী ও মাদ্রাসার বিভিন্ন সাফল্য ও অর্জন।"
  }

];



/* ================================================
   LOAD HEADER
================================================ */

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


          menuBtn.textContent =
            open ? "✕" : "☰";

        }
      );

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
    document.getElementById(
      "footer"
    );


  if (!footer) return;


  try {

    const response =
      await fetch(
        "footer.html"
      );


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
   LOAD FIRESTORE
================================================ */

async function loadAchievements() {

  try {

    const {

      collection,

      getDocs

    } = await import(

      "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"

    );


    const snapshot =
      await getDocs(

        collection(
          window.achievementDB,
          "achievements"
        )

      );


    /* =========================================
       NO DATABASE DATA
    ========================================== */

    if (
      snapshot.empty
    ) {

      renderAchievements(
        defaultAchievements
      );

      return;

    }


    const achievements = [];


    snapshot.forEach(
      doc => {

        achievements.push({

          id: doc.id,

          ...doc.data()

        });

      }
    );


    /* =========================================
       SORT
    ========================================== */

    achievements.sort(
      (a, b) =>
        (a.order || 999) -
        (b.order || 999)
    );


    renderAchievements(
      achievements
    );


  } catch (error) {

    console.error(
      "Achievement Error:",
      error
    );


    /* Firebase error হলেও
       default content দেখাবে */

    renderAchievements(
      defaultAchievements
    );

  }

}



/* ================================================
   RENDER
================================================ */

function renderAchievements(
  achievements
) {

  achievementList.innerHTML = "";


  if (
    !achievements.length
  ) {

    achievementList.innerHTML = `

      <div class="achievement-empty">

        বর্তমানে কোনো অর্জন যোগ করা হয়নি।

      </div>

    `;

    return;

  }


  achievements.forEach(
    achievement => {

      const card =
        document.createElement(
          "article"
        );


      card.className =
        "achievement-card";


      card.innerHTML = `

        <div class="achievement-icon">

          ${escapeHTML(
            achievement.icon ||
            "🏆"
          )}

        </div>


        <div class="achievement-number">

          ${escapeHTML(
            achievement.number ||
            ""
          )}

        </div>


        <h3>

          ${escapeHTML(
            achievement.title ||
            "অর্জন"
          )}

        </h3>


        <p>

          ${escapeHTML(
            achievement.description ||
            ""
          )}

        </p>


        ${
          achievement.year
          ? `
            <div class="achievement-date">

              ${escapeHTML(
                achievement.year
              )}

            </div>
          `
          : ""
        }

      `;


      achievementList.appendChild(
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

  await loadAchievements();

})();
