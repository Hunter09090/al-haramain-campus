/* =========================================
   AL-HARAMAIN DIGITAL
   ACHIEVEMENTS MANAGEMENT
========================================== */


import {
  initializeApp
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";


import {
  getAuth,
  onAuthStateChanged,
  signOut
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  query,
  orderBy
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";



/* =========================================
   FIREBASE CONFIG
========================================== */

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



/* =========================================
   FIREBASE
========================================== */

const app =
  initializeApp(
    firebaseConfig
  );


const auth =
  getAuth(app);


const db =
  getFirestore(app);



/* =========================================
   ELEMENTS
========================================== */

const form =
  document.getElementById(
    "achievementForm"
  );


const titleInput =
  document.getElementById(
    "achievementTitle"
  );


const dateInput =
  document.getElementById(
    "achievementDate"
  );


const descriptionInput =
  document.getElementById(
    "achievementDescription"
  );


const categoryInput =
  document.getElementById(
    "achievementCategory"
  );


const featuredInput =
  document.getElementById(
    "achievementFeatured"
  );


const saveBtn =
  document.getElementById(
    "saveBtn"
  );


const cancelBtn =
  document.getElementById(
    "cancelBtn"
  );


const formTitle =
  document.getElementById(
    "formTitle"
  );


const formMessage =
  document.getElementById(
    "formMessage"
  );


const achievementList =
  document.getElementById(
    "achievementList"
  );


const achievementTotal =
  document.getElementById(
    "achievementTotal"
  );



/* =========================================
   EDIT MODE
========================================== */

let editingId = null;



/* =========================================
   AUTH CHECK
========================================== */

onAuthStateChanged(
  auth,
  user => {

    if (!user) {

      window.location.href =
        "admin.html";

      return;

    }


    loadAchievements();

  }
);



/* =========================================
   LOGOUT
========================================== */

document
  .getElementById("logoutBtn")
  .addEventListener(
    "click",
    async () => {

      await signOut(auth);

      window.location.href =
        "admin.html";

    }
  );



/* =========================================
   SAVE / UPDATE
========================================== */

form.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    const title =
      titleInput.value.trim();


    const date =
      dateInput.value;


    const description =
      descriptionInput.value.trim();


    const category =
      categoryInput.value;


    const featured =
      featuredInput.checked;


    if (
      !title ||
      !date ||
      !description
    ) {

      showMessage(
        "সব প্রয়োজনীয় তথ্য পূরণ করুন।",
        true
      );

      return;

    }


    saveBtn.disabled =
      true;


    saveBtn.textContent =
      "সংরক্ষণ হচ্ছে...";


    try {


      /* ===================================
         UPDATE
      ==================================== */

      if (editingId) {

        await updateDoc(

          doc(
            db,
            "achievements",
            editingId
          ),

          {

            title:
              title,

            date:
              date,

            description:
              description,

            category:
              category,

            featured:
              featured,

            updatedAt:
              serverTimestamp()

          }

        );


        showMessage(
          "অর্জন সফলভাবে পরিবর্তন হয়েছে।"
        );

      }


      /* ===================================
         CREATE
      ==================================== */

      else {

        await addDoc(

          collection(
            db,
            "achievements"
          ),

          {

            title:
              title,

            date:
              date,

            description:
              description,

            category:
              category,

            featured:
              featured,

            createdAt:
              serverTimestamp(),

            updatedAt:
              serverTimestamp()

          }

        );


        showMessage(
          "নতুন অর্জন সফলভাবে যোগ হয়েছে।"
        );

      }


      resetForm();

      await loadAchievements();


    } catch (error) {

      console.error(
        "Achievement Error:",
        error
      );


      showMessage(
        "অর্জন সংরক্ষণ করা যায়নি। Firestore Rules পরীক্ষা করুন।",
        true
      );

    }


    saveBtn.disabled =
      false;

  }
);



/* =========================================
   LOAD
========================================== */

async function loadAchievements() {

  achievementList.innerHTML =
    '<div class="loading">অর্জন লোড হচ্ছে...</div>';


  try {


    const achievementsQuery =
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
        achievementsQuery
      );


    achievementTotal.textContent =
      snapshot.size;


    if (snapshot.empty) {

      achievementList.innerHTML =
        '<div class="empty">এখনো কোনো অর্জন যোগ করা হয়নি।</div>';

      return;

    }


    achievementList.innerHTML =
      "";


    snapshot.forEach(
      achievement => {

        const data =
          achievement.data();


        achievementList.appendChild(

          createAchievementCard(
            achievement.id,
            data
          )

        );

      }
    );


  } catch (error) {

    console.error(
      "Load Error:",
      error
    );


    achievementList.innerHTML =
      '<div class="empty">অর্জন লোড করা যায়নি। Firestore Rules অথবা Index পরীক্ষা করুন।</div>';

  }

}



/* =========================================
   CARD
========================================== */

function createAchievementCard(
  id,
  data
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "achievement-card";


  if (data.featured) {

    card.classList.add(
      "featured"
    );

  }


  card.innerHTML = `

    ${
      data.featured
      ? '<span class="badge">⭐ গুরুত্বপূর্ণ অর্জন</span>'
      : ''
    }


    <div class="achievement-top">

      <h3 class="achievement-title">
        ${escapeHTML(data.title || "")}
      </h3>

      <span class="achievement-date">
        ${formatDate(data.date)}
      </span>

    </div>


    <span class="achievement-category">
      ${escapeHTML(data.category || "সাধারণ")}
    </span>


    <p class="achievement-description">
      ${escapeHTML(data.description || "")}
    </p>


    <div class="achievement-actions">

      <button
        class="edit-btn"
      >
        ✏️ Edit
      </button>


      <button
        class="delete-btn"
      >
        🗑️ Delete
      </button>

    </div>

  `;


  card
    .querySelector(
      ".edit-btn"
    )
    .addEventListener(
      "click",
      () => {

        editAchievement(
          id,
          data
        );

      }
    );


  card
    .querySelector(
      ".delete-btn"
    )
    .addEventListener(
      "click",
      () => {

        deleteAchievement(
          id
        );

      }
    );


  return card;

}



/* =========================================
   EDIT
========================================== */

function editAchievement(
  id,
  data
) {

  editingId =
    id;


  titleInput.value =
    data.title || "";


  dateInput.value =
    data.date || "";


  descriptionInput.value =
    data.description || "";


  categoryInput.value =
    data.category ||
    "সাধারণ";


  featuredInput.checked =
    data.featured === true;


  formTitle.textContent =
    "✏️ অর্জন পরিবর্তন করুন";


  saveBtn.textContent =
    "💾 পরিবর্তন সংরক্ষণ";


  cancelBtn.classList.remove(
    "hidden"
  );


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

}



/* =========================================
   DELETE
========================================== */

async function deleteAchievement(
  id
) {

  const confirmed =
    confirm(
      "এই অর্জনটি কি মুছে ফেলতে চান?"
    );


  if (!confirmed) {

    return;

  }


  try {

    await deleteDoc(

      doc(
        db,
        "achievements",
        id
      )

    );


    showMessage(
      "অর্জন মুছে ফেলা হয়েছে।"
    );


    await loadAchievements();


  } catch (error) {

    console.error(
      "Delete Error:",
      error
    );


    showMessage(
      "অর্জন মুছে ফেলা যায়নি।",
      true
    );

  }

}



/* =========================================
   CANCEL
========================================== */

cancelBtn.addEventListener(
  "click",
  resetForm
);



/* =========================================
   RESET
========================================== */

function resetForm() {

  editingId =
    null;


  form.reset();


  categoryInput.value =
    "সাধারণ";


  formTitle.textContent =
    "➕ নতুন অর্জন";


  saveBtn.textContent =
    "💾 অর্জন সংরক্ষণ";


  cancelBtn.classList.add(
    "hidden"
  );

}



/* =========================================
   MESSAGE
========================================== */

function showMessage(
  text,
  error = false
) {

  formMessage.textContent =
    text;


  formMessage.className =
    error
      ? "message error"
      : "message success";


  setTimeout(
    () => {

      formMessage.textContent =
        "";

    },
    4000
  );

}



/* =========================================
   DATE
========================================== */

function formatDate(
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



/* =========================================
   SECURITY
========================================== */

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
