/* ==========================================================
   TEACHER MANAGEMENT (FIRESTORE ONLY)
========================================================== */

"use strict";

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const teacherForm = document.getElementById("teacherForm");
const teacherList = document.getElementById("teacherList");
const searchTeacher = document.getElementById("searchTeacher");

const teacherName = document.getElementById("teacherName");
const teacherDesignation = document.getElementById("teacherDesignation");
const teacherDepartment = document.getElementById("teacherDepartment");
const teacherPhone = document.getElementById("teacherPhone");
const teacherEmail = document.getElementById("teacherEmail");
const teacherImage = document.getElementById("teacherImage");
const teacherJoinDate = document.getElementById("teacherJoinDate");
const teacherStatus = document.getElementById("teacherStatus");

/* ==========================================================
   GLOBAL VARIABLE
========================================================== */

let editTeacherId = null;

/* ==========================================================
   SAVE TEACHER
========================================================== */

teacherForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const teacherData = {

        name: teacherName.value.trim(),

        designation: teacherDesignation.value.trim(),

        department: teacherDepartment.value,

        phone: teacherPhone.value.trim(),

        email: teacherEmail.value.trim(),

        image: teacherImage.value.trim(),

        joinDate: teacherJoinDate.value,

        status: teacherStatus.value,

        createdAt: firebase.firestore.FieldValue.serverTimestamp()

    };

    try {

        if (editTeacherId) {

            await db.collection("teachers")
                .doc(editTeacherId)
                .update(teacherData);

            alert("শিক্ষকের তথ্য সফলভাবে আপডেট হয়েছে।");

            editTeacherId = null;

        } else {

            await db.collection("teachers")
                .add(teacherData);

            alert("নতুন শিক্ষক সফলভাবে যোগ হয়েছে।");

        }

        teacherForm.reset();

        teacherStatus.value = "Active";

        loadTeachers();

    } catch (error) {

        console.error(error);

        alert("শিক্ষকের তথ্য সংরক্ষণ করা যায়নি!");

    }

});
/* ==========================================================
   LOAD ALL TEACHERS
========================================================== */

async function loadTeachers() {

    teacherList.innerHTML = "<p>Loading...</p>";

    try {

        const snapshot = await db.collection("teachers")
            .orderBy("createdAt", "desc")
            .get();

        teacherList.innerHTML = "";

        if (snapshot.empty) {

            teacherList.innerHTML = `
                <div class="dashboard-item">
                    <strong>এখনো কোনো শিক্ষক যোগ করা হয়নি।</strong>
                </div>
            `;

            return;

        }

        snapshot.forEach(function(doc){

            createTeacherCard(doc.id, doc.data());

        });

    }

    catch(error){

        console.error(error);

        teacherList.innerHTML =
            "<p>Teacher Load Failed.</p>";

    }

}

/* ==========================================================
   CREATE TEACHER CARD
========================================================== */

function createTeacherCard(id, data){

    const card = document.createElement("div");

    card.className = "teacher-item";

    card.innerHTML = `

        <div class="teacher-item-info">

            <img
                src="${data.image || 'https://placehold.co/120x120?text=Teacher'}"
                alt="${data.name}"
                class="teacher-photo">

            <div>

                <h3>${data.name}</h3>

                <p><strong>পদবি:</strong> ${data.designation}</p>

                <p><strong>বিভাগ:</strong> ${data.department}</p>

                <p><strong>মোবাইল:</strong> ${data.phone}</p>

                <p><strong>Status:</strong> ${data.status}</p>

            </div>

        </div>

        <div class="teacher-item-actions">

            <button class="btn btn-primary edit-btn">

                <i class="fa-solid fa-pen"></i>

                Edit

            </button>

            <button class="btn btn-outline delete-btn">

                <i class="fa-solid fa-trash"></i>

                Delete

            </button>

        </div>

    `;

    /* ==========================
       EDIT
    ========================== */

    card.querySelector(".edit-btn").onclick = function(){

        editTeacherId = id;

        teacherName.value = data.name;

        teacherDesignation.value = data.designation;

        teacherDepartment.value = data.department;

        teacherPhone.value = data.phone;

        teacherEmail.value = data.email;

        teacherImage.value = data.image;

        teacherJoinDate.value = data.joinDate;

        teacherStatus.value = data.status;

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    };

    /* ==========================
       DELETE
    ========================== */

    card.querySelector(".delete-btn").onclick = async function(){

        if(!confirm("এই শিক্ষককে Delete করতে চান?")) return;

        try{

            await db.collection("teachers")
                .doc(id)
                .delete();

            loadTeachers();

            alert("শিক্ষক সফলভাবে Delete হয়েছে।");

        }

        catch(error){

            console.error(error);

            alert("Delete করতে সমস্যা হয়েছে।");

        }

    };

    teacherList.appendChild(card);

}
/* ==========================================================
   LIVE SEARCH
========================================================== */

searchTeacher.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    document.querySelectorAll(".teacher-item").forEach(function(item){

        const text = item.innerText.toLowerCase();

        item.style.display = text.includes(keyword)
            ? "flex"
            : "none";

    });

});

/* ==========================================================
   REALTIME UPDATE
========================================================== */

db.collection("teachers")
.onSnapshot(function(){

    loadTeachers();

});

/* ==========================================================
   LOGOUT
========================================================== */

function logoutAdmin(){

    auth.signOut()

    .then(function(){

        alert("Logout Successful");

        window.location.href = "admin-login.html";

    })

    .catch(function(error){

        console.error(error);

    });

}

/* ==========================================================
   AUTH CHECK
========================================================== */

auth.onAuthStateChanged(function(user){

    if(!user){

        window.location.href = "admin-login.html";

    }

});

/* ==========================================================
   INITIAL LOAD
========================================================== */

window.addEventListener("load", function(){

    loadTeachers();

});

/* ==========================================================
   READY
========================================================== */

console.log("====================================");

console.log("Teacher Management Ready");

console.log("Firestore Connected");

console.log("Realtime Sync Enabled");

console.log("====================================");
