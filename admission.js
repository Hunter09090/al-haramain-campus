/* =================================================
   AL-HARAMAIN DIGITAL
   ONLINE ADMISSION SYSTEM
================================================= */


/* ================================================
   ELEMENTS
================================================ */

const form =
  document.getElementById(
    "admissionForm"
  );


const departmentSelect =
  document.getElementById(
    "department"
  );


const submitBtn =
  document.getElementById(
    "submitBtn"
  );


const formStatus =
  document.getElementById(
    "formStatus"
  );



/* ================================================
   DEFAULT DEPARTMENTS
================================================ */

const defaultDepartments = [

  "নূরানী বিভাগ",

  "নাজেরা বিভাগ",

  "হিফজ বিভাগ",

  "কিতাব বিভাগ"

];



/* ================================================
   HEADER
================================================ */

async function loadHeader() {

  const header =
    document.getElementById(
      "header"
    );


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
   FOOTER
================================================ */

async function loadFooter() {

  const footer =
    document.getElementById(
      "footer"
    );


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
   LOAD DEPARTMENTS
================================================ */

async function loadDepartments() {

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
          window.admissionDB,
          "departments"
        )

      );


    departmentSelect.innerHTML = `

      <option value="">
        বিভাগ নির্বাচন করুন
      </option>

    `;


    /* =========================================
       FIRESTORE DATA
    ========================================== */

    if (!snapshot.empty) {

      snapshot.forEach(doc => {

        const data =
          doc.data();


        if (!data.name) return;


        addDepartment(
          data.name
        );

      });


      return;

    }


    /* =========================================
       DEFAULT DATA
    ========================================== */

    defaultDepartments.forEach(
      addDepartment
    );


  } catch (error) {

    console.error(
      "Department Loading Error:",
      error
    );


    departmentSelect.innerHTML = `

      <option value="">
        বিভাগ নির্বাচন করুন
      </option>

    `;


    defaultDepartments.forEach(
      addDepartment
    );

  }

}



/* ================================================
   ADD DEPARTMENT OPTION
================================================ */

function addDepartment(
  name
) {

  const option =
    document.createElement(
      "option"
    );


  option.value =
    name;


  option.textContent =
    name;


  departmentSelect.appendChild(
    option
  );

}



/* ================================================
   SUBMIT ADMISSION
================================================ */

form.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    formStatus.textContent = "";

    formStatus.className =
      "form-status";


    submitBtn.disabled =
      true;


    submitBtn.textContent =
      "আবেদন জমা হচ্ছে...";


    try {

      const {

        collection,

        addDoc,

        serverTimestamp

      } = await import(

        "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"

      );


      /* =========================================
         FORM DATA
      ========================================== */

      const studentName =
        document
          .getElementById(
            "studentName"
          )
          .value
          .trim();


      const fatherName =
        document
          .getElementById(
            "fatherName"
          )
          .value
          .trim();


      const motherName =
        document
          .getElementById(
            "motherName"
          )
          .value
          .trim();


      const birthDate =
        document
          .getElementById(
            "birthDate"
          )
          .value;


      const phone =
        document
          .getElementById(
            "phone"
          )
          .value
          .trim();


      const department =
        departmentSelect.value;


      const address =
        document
          .getElementById(
            "address"
          )
          .value
          .trim();


      const message =
        document
          .getElementById(
            "message"
          )
          .value
          .trim();



      /* =========================================
         SAVE TO FIRESTORE

         Collection "admissions"
         না থাকলে Firebase নিজেই তৈরি করবে।
      ========================================== */

      await addDoc(

        collection(
          window.admissionDB,
          "admissions"
        ),

        {

          studentName,

          fatherName,

          motherName,

          birthDate,

          phone,

          department,

          address,

          message,

          status:
            "pending",

          createdAt:
            serverTimestamp()

        }

      );


      /* =========================================
         SUCCESS
      ========================================== */

      formStatus.textContent =
        "✅ আপনার ভর্তি আবেদন সফলভাবে জমা হয়েছে। মাদ্রাসা কর্তৃপক্ষ আবেদনটি পর্যালোচনা করে আপনার সাথে যোগাযোগ করবে।";


      formStatus.className =
        "form-status success";


      form.reset();


    } catch (error) {

      console.error(
        "Admission Error:",
        error
      );


      formStatus.textContent =
        "❌ আবেদন জমা দেওয়া সম্ভব হয়নি। কিছুক্ষণ পর আবার চেষ্টা করুন।";


      formStatus.className =
        "form-status error";


    } finally {

      submitBtn.disabled =
        false;


      submitBtn.textContent =
        "আবেদন জমা দিন";

    }

  }
);



/* ================================================
   START
================================================ */

(async function () {

  await loadHeader();

  await loadFooter();

  await loadDepartments();

})();
