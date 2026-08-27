/* =================================================
   AL-HARAMAIN DIGITAL
   ADMIN DASHBOARD LOGIC
================================================= */


/* ================================================
   LOGIN
================================================ */

const loginForm =
  document.getElementById(
    "loginForm"
  );


const loginMessage =
  document.getElementById(
    "loginMessage"
  );


loginForm.addEventListener(
  "submit",
  async event => {

    event.preventDefault();


    const email =
      document
        .getElementById(
          "loginEmail"
        )
        .value
        .trim();


    const password =
      document
        .getElementById(
          "loginPassword"
        )
        .value;


    const button =
      document.getElementById(
        "loginBtn"
      );


    button.disabled = true;

    button.textContent =
      "Login হচ্ছে...";


    try {

      await window.firebaseLogin(

        window.adminAuth,

        email,

        password

      );


      loginMessage.textContent =
        "";


    } catch (error) {

      console.error(error);


      loginMessage.textContent =
        "❌ Email অথবা Password সঠিক নয়।";


      loginMessage.className =
        "message error";


    } finally {

      button.disabled = false;

      button.textContent =
        "Login";

    }

  }
);



/* ================================================
   LOGOUT
================================================ */

document
  .getElementById(
    "logoutBtn"
  )
  .addEventListener(
    "click",
    async () => {

      await window.firebaseLogout(
        window.adminAuth
      );

    }
  );



/* ================================================
   FIRESTORE HELPERS
================================================ */

async function firestore() {

  return await import(

    "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js"

  );

}



/* ================================================
   LOAD ALL DATA
================================================ */

async function loadDashboard() {

  await Promise.all([

    loadNotices(),

    loadAchievements(),

    loadDepartments(),

    loadAdmissions()

  ]);

}



/* ================================================
   NOTICES
================================================ */

async function loadNotices() {

  const {

    collection,

    getDocs

  } = await firestore();


  const snapshot =
    await getDocs(

      collection(
        window.adminDB,
        "notices"
      )

    );


  document
    .getElementById(
      "noticeCount"
    )
    .textContent =
    snapshot.size;


  const list =
    document.getElementById(
      "noticeList"
    );


  list.innerHTML = "";


  snapshot.forEach(
    doc => {

      const data =
        doc.data();


      list.innerHTML += `

        <div class="admin-item">

          <div class="admin-item-info">

            <strong>
              ${escapeHTML(
                data.title || ""
              )}
            </strong>

            <small>
              ${escapeHTML(
                data.date || ""
              )}
            </small>

          </div>


          <div class="item-actions">

            <button
              class="edit-btn"
              onclick="editNotice(
                '${doc.id}'
              )"
            >
              Edit
            </button>


            <button
              class="delete-btn"
              onclick="deleteNotice(
                '${doc.id}'
              )"
            >
              Delete
            </button>

          </div>

        </div>

      `;

    }
  );

}



/* ================================================
   SAVE NOTICE
================================================ */

document
  .getElementById(
    "noticeForm"
  )
  .addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const {

        collection,

        addDoc,

        updateDoc,

        doc

      } = await firestore();


      const id =
        document
          .getElementById(
            "noticeId"
          )
          .value;


      const data = {

        title:
          document
            .getElementById(
              "noticeTitle"
            )
            .value
            .trim(),

        date:
          document
            .getElementById(
              "noticeDate"
            )
            .value,

        text:
          document
            .getElementById(
              "noticeText"
            )
            .value
            .trim(),

        updatedAt:
          new Date()

      };


      if (id) {

        await updateDoc(

          doc(
            window.adminDB,
            "notices",
            id
          ),

          data

        );

      } else {

        await addDoc(

          collection(
            window.adminDB,
            "notices"
          ),

          data

        );

      }


      resetNoticeForm();

      await loadNotices();

    }
  );



/* ================================================
   EDIT NOTICE
================================================ */

window.editNotice =
  async function(id) {

    const {

      doc,

      getDoc

    } = await firestore();


    const snapshot =
      await getDoc(

        doc(
          window.adminDB,
          "notices",
          id
        )

      );


    if (!snapshot.exists())
      return;


    const data =
      snapshot.data();


    document
      .getElementById(
        "noticeId"
      )
      .value = id;


    document
      .getElementById(
        "noticeTitle"
      )
      .value =
      data.title || "";


    document
      .getElementById(
        "noticeDate"
      )
      .value =
      data.date || "";


    document
      .getElementById(
        "noticeText"
      )
      .value =
      data.text || "";


    document
      .getElementById(
        "noticeTitle"
      )
      .focus();

  };



/* ================================================
   DELETE NOTICE
================================================ */

window.deleteNotice =
  async function(id) {

    if (
      !confirm(
        "এই নোটিশটি মুছে ফেলতে চান?"
      )
    )
      return;


    const {

      deleteDoc,

      doc

    } = await firestore();


    await deleteDoc(

      doc(
        window.adminDB,
        "notices",
        id
      )

    );


    await loadNotices();

  };



/* ================================================
   RESET NOTICE
================================================ */

window.resetNoticeForm =
  function() {

    document
      .getElementById(
        "noticeForm"
      )
      .reset();


    document
      .getElementById(
        "noticeId"
      )
      .value = "";

  };



/* ================================================
   ACHIEVEMENTS
================================================ */

async function loadAchievements() {

  const {

    collection,

    getDocs

  } = await firestore();


  const snapshot =
    await getDocs(

      collection(
        window.adminDB,
        "achievements"
      )

    );


  document
    .getElementById(
      "achievementCount"
    )
    .textContent =
    snapshot.size;


  const list =
    document.getElementById(
      "achievementList"
    );


  list.innerHTML = "";


  snapshot.forEach(
    doc => {

      const data =
        doc.data();


      list.innerHTML += `

        <div class="admin-item">

          <div class="admin-item-info">

            <strong>

              ${escapeHTML(
                data.icon || "🏆"
              )}

              ${escapeHTML(
                data.number || ""
              )}

              ${escapeHTML(
                data.title || ""
              )}

            </strong>


            <small>

              ${escapeHTML(
                data.year || ""
              )}

            </small>

          </div>


          <div class="item-actions">

            <button
              class="edit-btn"
              onclick="editAchievement(
                '${doc.id}'
              )"
            >
              Edit
            </button>


            <button
              class="delete-btn"
              onclick="deleteAchievement(
                '${doc.id}'
              )"
            >
              Delete
            </button>

          </div>

        </div>

      `;

    }
  );

}



/* ================================================
   SAVE ACHIEVEMENT
================================================ */

document
  .getElementById(
    "achievementForm"
  )
  .addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const {

        collection,

        addDoc,

        updateDoc,

        doc

      } = await firestore();


      const id =
        document
          .getElementById(
            "achievementId"
          )
          .value;


      const data = {

        icon:
          document
            .getElementById(
              "achievementIcon"
            )
            .value
            .trim(),

        number:
          document
            .getElementById(
              "achievementNumber"
            )
            .value
            .trim(),

        title:
          document
            .getElementById(
              "achievementTitle"
            )
            .value
            .trim(),

        description:
          document
            .getElementById(
              "achievementDescription"
            )
            .value
            .trim(),

        year:
          document
            .getElementById(
              "achievementYear"
            )
            .value
            .trim(),

        updatedAt:
          new Date()

      };


      if (id) {

        await updateDoc(

          doc(
            window.adminDB,
            "achievements",
            id
          ),

          data

        );

      } else {

        await addDoc(

          collection(
            window.adminDB,
            "achievements"
          ),

          data

        );

      }


      resetAchievementForm();

      await loadAchievements();

    }
  );



/* ================================================
   EDIT ACHIEVEMENT
================================================ */

window.editAchievement =
  async function(id) {

    const {

      doc,

      getDoc

    } = await firestore();


    const snapshot =
      await getDoc(

        doc(
          window.adminDB,
          "achievements",
          id
        )

      );


    if (!snapshot.exists())
      return;


    const data =
      snapshot.data();


    document
      .getElementById(
        "achievementId"
      )
      .value = id;


    document
      .getElementById(
        "achievementIcon"
      )
      .value =
      data.icon || "🏆";


    document
      .getElementById(
        "achievementNumber"
      )
      .value =
      data.number || "";


    document
      .getElementById(
        "achievementTitle"
      )
      .value =
      data.title || "";


    document
      .getElementById(
        "achievementDescription"
      )
      .value =
      data.description || "";


    document
      .getElementById(
        "achievementYear"
      )
      .value =
      data.year || "";

  };



/* ================================================
   DELETE ACHIEVEMENT
================================================ */

window.deleteAchievement =
  async function(id) {

    if (
      !confirm(
        "এই অর্জনটি মুছে ফেলতে চান?"
      )
    )
      return;


    const {

      deleteDoc,

      doc

    } = await firestore();


    await deleteDoc(

      doc(
        window.adminDB,
        "achievements",
        id
      )

    );


    await loadAchievements();

  };



/* ================================================
   RESET ACHIEVEMENT
================================================ */

window.resetAchievementForm =
  function() {

    document
      .getElementById(
        "achievementForm"
      )
      .reset();


    document
      .getElementById(
        "achievementId"
      )
      .value = "";


    document
      .getElementById(
        "achievementIcon"
      )
      .value = "🏆";

  };



/* ================================================
   DEPARTMENTS
================================================ */

async function loadDepartments() {

  const {

    collection,

    getDocs

  } = await firestore();


  const snapshot =
    await getDocs(

      collection(
        window.adminDB,
        "departments"
      )

    );


  document
    .getElementById(
      "departmentCount"
    )
    .textContent =
    snapshot.size;


  const list =
    document.getElementById(
      "departmentList"
    );


  list.innerHTML = "";


  snapshot.forEach(
    doc => {

      const data =
        doc.data();


      list.innerHTML += `

        <div class="admin-item">

          <div class="admin-item-info">

            <strong>

              ${escapeHTML(
                data.icon || "📚"
              )}

              ${escapeHTML(
                data.name || ""
              )}

            </strong>


            <small>

              Order:
              ${escapeHTML(
                data.order || ""
              )}

            </small>

          </div>


          <div class="item-actions">

            <button
              class="edit-btn"
              onclick="editDepartment(
                '${doc.id}'
              )"
            >
              Edit
            </button>


            <button
              class="delete-btn"
              onclick="deleteDepartment(
                '${doc.id}'
              )"
            >
              Delete
            </button>

          </div>

        </div>

      `;

    }
  );

}



/* ================================================
   SAVE DEPARTMENT
================================================ */

document
  .getElementById(
    "departmentForm"
  )
  .addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const {

        collection,

        addDoc,

        updateDoc,

        doc

      } = await firestore();


      const id =
        document
          .getElementById(
            "departmentId"
          )
          .value;


      const data = {

        icon:
          document
            .getElementById(
              "departmentIcon"
            )
            .value
            .trim(),

        name:
          document
            .getElementById(
              "departmentName"
            )
            .value
            .trim(),

        description:
          document
            .getElementById(
              "departmentDescription"
            )
            .value
            .trim(),

        order:
          Number(
            document
              .getElementById(
                "departmentOrder"
              )
              .value
          ),

        updatedAt:
          new Date()

      };


      if (id) {

        await updateDoc(

          doc(
            window.adminDB,
            "departments",
            id
          ),

          data

        );

      } else {

        await addDoc(

          collection(
            window.adminDB,
            "departments"
          ),

          data

        );

      }


      resetDepartmentForm();

      await loadDepartments();

    }
  );



/* ================================================
   EDIT DEPARTMENT
================================================ */

window.editDepartment =
  async function(id) {

    const {

      doc,

      getDoc

    } = await firestore();


    const snapshot =
      await getDoc(

        doc(
          window.adminDB,
          "departments",
          id
        )

      );


    if (!snapshot.exists())
      return;


    const data =
      snapshot.data();


    document
      .getElementById(
        "departmentId"
      )
      .value = id;


    document
      .getElementById(
        "departmentIcon"
      )
      .value =
      data.icon || "📚";


    document
      .getElementById(
        "departmentName"
      )
      .value =
      data.name || "";


    document
      .getElementById(
        "departmentDescription"
      )
      .value =
      data.description || "";


    document
      .getElementById(
        "departmentOrder"
      )
      .value =
      data.order || 1;

  };



/* ================================================
   DELETE DEPARTMENT
================================================ */

window.deleteDepartment =
  async function(id) {

    if (
      !confirm(
        "এই বিভাগটি মুছে ফেলতে চান?"
      )
    )
      return;


    const {

      deleteDoc,

      doc

    } = await firestore();


    await deleteDoc(

      doc(
        window.adminDB,
        "departments",
        id
      )

    );


    await loadDepartments();

  };



/* ================================================
   RESET DEPARTMENT
================================================ */

window.resetDepartmentForm =
  function() {

    document
      .getElementById(
        "departmentForm"
      )
      .reset();


    document
      .getElementById(
        "departmentId"
      )
      .value = "";


    document
      .getElementById(
        "departmentIcon"
      )
      .value = "📚";


    document
      .getElementById(
        "departmentOrder"
      )
      .value = 1;

  };



/* ================================================
   ADMISSIONS
================================================ */

async function loadAdmissions() {

  const {

    collection,

    getDocs,

    updateDoc,

    doc

  } = await firestore();


  const snapshot =
    await getDocs(

      collection(
        window.adminDB,
        "admissions"
      )

    );


  document
    .getElementById(
      "admissionCount"
    )
    .textContent =
    snapshot.size;


  const list =
    document.getElementById(
      "admissionList"
    );


  list.innerHTML = "";


  if (snapshot.empty) {

    list.innerHTML = `

      <p class="empty">
        এখনো কোনো ভর্তি আবেদন জমা পড়েনি।
      </p>

    `;

    return;

  }


  snapshot.forEach(
    application => {

      const data =
        application.data();


      list.innerHTML += `

        <div class="admin-item">

          <div class="admin-item-info">

            <strong>

              ${escapeHTML(
                data.studentName || ""
              )}

            </strong>


            <small>

              বিভাগ:
              ${escapeHTML(
                data.department || ""
              )}

              <br>

              মোবাইল:
              ${escapeHTML(
                data.phone || ""
              )}

              <br>

              Status:
              ${escapeHTML(
                data.status || "pending"
              )}

            </small>

          </div>


          <div class="item-actions">

            <button
              class="edit-btn"
              onclick="updateAdmissionStatus(
                '${application.id}',
                'approved'
              )"
            >
              Approve
            </button>


            <button
              class="delete-btn"
              onclick="updateAdmissionStatus(
                '${application.id}',
                'rejected'
              )"
            >
              Reject
            </button>

          </div>

        </div>

      `;

    }
  );

}



/* ================================================
   ADMISSION STATUS
================================================ */

window.updateAdmissionStatus =
  async function(
    id,
    status
  ) {

    const {

      updateDoc,

      doc

    } = await firestore();


    await updateDoc(

      doc(
        window.adminDB,
        "admissions",
        id
      ),

      {

        status,

        updatedAt:
          new Date()

      }

    );


   
