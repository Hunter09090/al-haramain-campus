/* =========================================
   AL-HARAMAIN DIGITAL
   DEPARTMENTS MANAGEMENT
========================================= */


import {
  initializeApp
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";


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


import {
  getAuth,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence
} from
"https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";



/* =========================================
   FIREBASE CONFIG
========================================= */

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



/* =========================================
   INITIALIZE
========================================= */

const app =
  initializeApp(
    firebaseConfig
  );


const db =
  getFirestore(app);


// Keep admin login active between pages
await setPersistence(
  auth,
  browserLocalPersistence
);



/* =========================================
   ELEMENTS
========================================= */

const form =
  document.getElementById(
    "departmentForm"
  );


const nameInput =
  document.getElementById(
    "departmentName"
  );


const descriptionInput =
  document.getElementById(
    "departmentDescription"
  );


const classInput =
  document.getElementById(
    "departmentClass"
  );


const iconInput =
  document.getElementById(
    "departmentIcon"
  );


const activeInput =
  document.getElementById(
    "departmentActive"
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


const departmentList =
  document.getElementById(
    "departmentList"
  );


const departmentTotal =
  document.getElementById(
    "departmentTotal"
  );



/* =========================================
   EDIT MODE
========================================= */

let editingId = null;



/* =========================================
   AUTH
========================================= */

onAuthStateChanged(
  auth,
  user => {

    if (!user) {

      window.location.replace(
        "admin.html"
      );

      return;

    }

    loadDepartments();

  }
);


/* =========================================
   LOGOUT
========================================= */

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
   SAVE
========================================= */

form.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    const name =
      nameInput.value.trim();


    const description =
      descriptionInput.value.trim();


    const className =
      classInput.value.trim();


    const icon =
      iconInput.value.trim() ||
      "📚";


    const active =
      activeInput.checked;


    if (
      !name ||
      !description
    ) {

      showMessage(
        "বিভাগের নাম ও বিবরণ পূরণ করুন।",
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
            "departments",
            editingId
          ),

          {

            name,

            description,

            className,

            icon,

            active,

            updatedAt:
              serverTimestamp()

          }

        );


        showMessage(
          "বিভাগ সফলভাবে পরিবর্তন হয়েছে।"
        );

      }


      /* ===================================
         CREATE
      ==================================== */

      else {

        await addDoc(

          collection(
            db,
            "departments"
          ),

          {

            name,

            description,

            className,

            icon,

            active,

            createdAt:
              serverTimestamp(),

            updatedAt:
              serverTimestamp()

          }

        );


        showMessage(
          "নতুন বিভাগ সফলভাবে যোগ হয়েছে।"
        );

      }


      resetForm();

      await loadDepartments();


    } catch (error) {

      console.error(
        "Department Error:",
        error
      );


      showMessage(
        "বিভাগ সংরক্ষণ করা যায়নি। Firebase Rules পরীক্ষা করুন।",
        true
      );

    }


    saveBtn.disabled =
      false;

  }
);



/* =========================================
   LOAD DEPARTMENTS
========================================= */

async function loadDepartments() {

  departmentList.innerHTML =
    '<div class="loading">বিভাগ লোড হচ্ছে...</div>';


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


    departmentTotal.textContent =
      snapshot.size;


    if (
      snapshot.empty
    ) {

      departmentList.innerHTML =
        '<div class="empty">এখনো কোনো বিভাগ যোগ করা হয়নি।</div>';

      return;

    }


    departmentList.innerHTML =
      "";


    snapshot.forEach(
      departmentDoc => {

        const data =
          departmentDoc.data();


        departmentList.appendChild(

          createDepartmentCard(
            departmentDoc.id,
            data
          )

        );

      }
    );


  } catch (error) {

    console.error(
      "Load Department Error:",
      error
    );


    departmentList.innerHTML =
      '<div class="empty">বিভাগ লোড করা যায়নি। Firestore Rules অথবা Index পরীক্ষা করুন।</div>';

  }

}



/* =========================================
   CREATE CARD
========================================= */

function createDepartmentCard(
  id,
  data
) {

  const card =
    document.createElement(
      "article"
    );


  card.className =
    "department-card";


  if (
    data.active === false
  ) {

    card.classList.add(
      "inactive"
    );

  }


  card.innerHTML = `

    <div class="department-top">

      <div class="department-icon">

        ${escapeHTML(
          data.icon || "📚"
        )}

      </div>


      <div class="department-info">

        <h3>

          ${escapeHTML(
            data.name || "বিভাগ"
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

      </div>

    </div>


    <p class="department-description">

      ${escapeHTML(
        data.description || ""
      )}

    </p>


    <span
      class="status ${
        data.active === false
          ? "inactive"
          : "active"
      }"
    >

      ${
        data.active === false
          ? "Website-এ বন্ধ"
          : "Website-এ সক্রিয়"
      }

    </span>


    <div class="department-actions">

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

        editDepartment(
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

        deleteDepartment(
          id
        );

      }
    );


  return card;

}



/* =========================================
   EDIT
========================================= */

function editDepartment(
  id,
  data
) {

  editingId =
    id;


  nameInput.value =
    data.name || "";


  descriptionInput.value =
    data.description || "";


  classInput.value =
    data.className || "";


  iconInput.value =
    data.icon || "📚";


  activeInput.checked =
    data.active !== false;


  formTitle.textContent =
    "✏️ বিভাগ পরিবর্তন করুন";


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
========================================= */

async function deleteDepartment(
  id
) {

  const confirmed =
    confirm(
      "এই বিভাগটি কি মুছে ফেলতে চান?"
    );


  if (!confirmed) {

    return;

  }


  try {

    await deleteDoc(

      doc(
        db,
        "departments",
        id
      )

    );


    showMessage(
      "বিভাগ মুছে ফেলা হয়েছে।"
    );


    await loadDepartments();


  } catch (error) {

    console.error(
      "Delete Department Error:",
      error
    );


    showMessage(
      "বিভাগ মুছে ফেলা যায়নি।",
      true
    );

  }

}



/* =========================================
   CANCEL
========================================= */

cancelBtn.addEventListener(
  "click",
  resetForm
);



/* =========================================
   RESET
========================================= */

function resetForm() {

  editingId =
    null;


  form.reset();


  activeInput.checked =
    true;


  formTitle.textContent =
    "➕ নতুন বিভাগ";


  saveBtn.textContent =
    "💾 বিভাগ সংরক্ষণ";


  cancelBtn.classList.add(
    "hidden"
  );

}



/* =========================================
   MESSAGE
========================================= */

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
   SECURITY
========================================= */

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
