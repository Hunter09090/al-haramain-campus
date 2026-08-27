/* =========================================
   AL-HARAMAIN DIGITAL
   NOTICE MANAGEMENT
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
   INITIALIZE
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
    "noticeForm"
  );


const titleInput =
  document.getElementById(
    "noticeTitle"
  );


const dateInput =
  document.getElementById(
    "noticeDate"
  );


const descriptionInput =
  document.getElementById(
    "noticeDescription"
  );


const importantInput =
  document.getElementById(
    "noticeImportant"
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


const noticeList =
  document.getElementById(
    "noticeList"
  );


const noticeTotal =
  document.getElementById(
    "noticeTotal"
  );



/* =========================================
   EDITING
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


    loadNotices();

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
   ADD / UPDATE
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


    const important =
      importantInput.checked;


    if (
      !title ||
      !date ||
      !description
    ) {

      showMessage(
        "সব তথ্য পূরণ করুন।",
        true
      );

      return;

    }


    saveBtn.disabled = true;

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
            "notices",
            editingId
          ),

          {

            title:
              title,

            date:
              date,

            description:
              description,

            important:
              important,

            updatedAt:
              serverTimestamp()

          }

        );


        showMessage(
          "নোটিশ সফলভাবে পরিবর্তন হয়েছে।"
        );


      }


      /* ===================================
         CREATE
      ==================================== */

      else {

        await addDoc(

          collection(
            db,
            "notices"
          ),

          {

            title:
              title,

            date:
              date,

            description:
              description,

            important:
              important,

            createdAt:
              serverTimestamp(),

            updatedAt:
              serverTimestamp()

          }

        );


        showMessage(
          "নতুন নোটিশ সফলভাবে যোগ হয়েছে।"
        );

      }


      resetForm();

      await loadNotices();


    } catch (error) {

      console.error(
        error
      );


      showMessage(
        "নোটিশ সংরক্ষণ করা যায়নি। Firestore Rules পরীক্ষা করুন।",
        true
      );

    }


    saveBtn.disabled = false;

  }
);



/* =========================================
   LOAD NOTICES
========================================== */

async function loadNotices() {

  noticeList.innerHTML =
    '<div class="loading">নোটিশ লোড হচ্ছে...</div>';


  try {


    const noticesQuery =
      query(

        collection(
          db,
          "notices"
        ),

        orderBy(
          "date",
          "desc"
        )

      );


    const snapshot =
      await getDocs(
        noticesQuery
      );


    noticeTotal.textContent =
      snapshot.size;


    if (snapshot.empty) {

      noticeList.innerHTML =
        '<div class="empty">এখনো কোনো নোটিশ যোগ করা হয়নি।</div>';

      return;

    }


    noticeList.innerHTML =
      "";


    snapshot.forEach(
      notice => {

        const data =
          notice.data();


        noticeList.appendChild(

          createNoticeCard(
            notice.id,
            data
          )

        );

      }
    );


  } catch (error) {

    console.error(
      error
    );


    noticeList.innerHTML =
      '<div class="empty">নোটিশ লোড করা যায়নি।</div>';

  }

}



/* =========================================
   CREATE CARD
========================================== */

function createNoticeCard(
  id,
  data
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "notice-card";


  if (data.important) {

    card.classList.add(
      "important"
    );

  }


  const formattedDate =
    formatDate(
      data.date
    );


  card.innerHTML = `

    ${
      data.important
      ? '<span class="important-badge">⭐ গুরুত্বপূর্ণ</span>'
      : ''
    }


    <div class="notice-top">

      <h3 class="notice-title">
        ${escapeHTML(data.title || "")}
      </h3>

      <span class="notice-date">
        ${formattedDate}
      </span>

    </div>


    <p class="notice-description">
      ${escapeHTML(data.description || "")}
    </p>


    <div class="notice-actions">

      <button
        class="edit-btn"
        data-action="edit"
      >
        ✏️ Edit
      </button>


      <button
        class="delete-btn"
        data-action="delete"
      >
        🗑️ Delete
      </button>

    </div>

  `;


  card
    .querySelector(
      '[data-action="edit"]'
    )
    .addEventListener(
      "click",
      () => {

        editNotice(
          id,
          data
        );

      }
    );


  card
    .querySelector(
      '[data-action="delete"]'
    )
    .addEventListener(
      "click",
      () => {

        deleteNotice(
          id
        );

      }
    );


  return card;

}



/* =========================================
   EDIT
========================================== */

function editNotice(
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


  importantInput.checked =
    data.important === true;


  formTitle.textContent =
    "✏️ নোটিশ পরিবর্তন করুন";


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

async function deleteNotice(
  id
) {

  const confirmed =
    confirm(
      "এই নোটিশটি কি মুছে ফেলতে চান?"
    );


  if (!confirmed) {

    return;

  }


  try {

    await deleteDoc(

      doc(
        db,
        "notices",
        id
      )

    );


    showMessage(
      "নোটিশ মুছে ফেলা হয়েছে।"
    );


    await loadNotices();


  } catch (error) {

    console.error(
      error
    );


    showMessage(
      "নোটিশ মুছে ফেলা যায়নি।",
      true
    );

  }

}



/* =========================================
   CANCEL EDIT
========================================== */

cancelBtn.addEventListener(
  "click",
  resetForm
);



/* =========================================
   RESET FORM
========================================== */

function resetForm() {

  editingId =
    null;


  form.reset();


  formTitle.textContent =
    "➕ নতুন নোটিশ";


  saveBtn.textContent =
    "💾 নোটিশ সংরক্ষণ";


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
