"use strict";

/* ==========================================================
   TEACHER SYSTEM V2
========================================================== */

/* ==========================================================
   DOM
========================================================== */

const teacherList = document.getElementById("teacherList");
const teacherSearch = document.getElementById("teacherSearch");
const teacherEmpty = document.getElementById("teacherEmpty");
const teacherCount = document.getElementById("teacherCount");

/* ==========================================================
   VARIABLES
========================================================== */

let allTeachers = [];
let currentFilter = "all";

/* ==========================================================
   LOAD TEACHERS
========================================================== */

function loadTeachers() {

    db.collection("teachers")
    .orderBy("createdAt", "desc")
    .onSnapshot(function(snapshot){

        allTeachers = [];

        snapshot.forEach(function(doc){

            const data = doc.data();

            if (data.status !== "Active") {

    return;

}

            allTeachers.push({

                id: doc.id,

                name: data.name || "",

                designation: data.designation || "",

                department: data.department || "",

                qualification: data.qualification || "",

                phone: data.phone || "",

                image: data.image || "",

                about: data.about || "",

                published: data.published || false

            });

        });

        teacherCount.textContent = allTeachers.length;

        renderTeachers(allTeachers);

    }, function(error){

        console.error(error);

        teacherList.innerHTML = `

        <div class="teacher-card">

            <h3>

            তথ্য লোড করা যায়নি

            </h3>

        </div>

        `;

    });

}
/* ==========================================================
   RENDER TEACHERS
========================================================== */

function renderTeachers(teachers){

    teacherList.innerHTML = "";

    if(teachers.length === 0){

        teacherEmpty.style.display = "block";

        return;

    }

    teacherEmpty.style.display = "none";

    teachers.forEach(function(teacher){

        createTeacherCard(teacher);

    });

}

/* ==========================================================
   CREATE TEACHER CARD
========================================================== */

function createTeacherCard(teacher){

    const card = document.createElement("div");

    card.className = "teacher-card";

    const image = teacher.image && teacher.image.trim() !== ""
        ? teacher.image
        : "images/default-teacher.png";

    card.innerHTML = `

<div class="teacher-image">

<img src="${image}" alt="${teacher.name}">

</div>

<div class="teacher-content">

<h3>

${teacher.name}

</h3>

<span class="teacher-designation">

${teacher.designation}

</span>

<p class="teacher-department">

<i class="fa-solid fa-building"></i>

${teacher.department}

</p>

<p class="teacher-qualification">

<i class="fa-solid fa-graduation-cap"></i>

${teacher.qualification}

</p>

${teacher.phone ? `

<p class="teacher-phone">

<i class="fa-solid fa-phone"></i>

${teacher.phone}

</p>

` : ""}

${teacher.about ? `

<p class="teacher-about">

${teacher.about}

</p>

` : ""}

</div>

`;

    teacherList.appendChild(card);

}
/* ==========================================================
   SEARCH TEACHER
========================================================== */

teacherSearch.addEventListener("keyup", function () {

    const keyword = this.value.trim().toLowerCase();

    if (keyword === "") {

        applyTeacherFilter(currentFilter);

        return;

    }

    const filtered = allTeachers.filter(function (teacher) {

        return (

            (teacher.name || "").toLowerCase().includes(keyword) ||

            (teacher.designation || "").toLowerCase().includes(keyword) ||

            (teacher.department || "").toLowerCase().includes(keyword) ||

            (teacher.qualification || "").toLowerCase().includes(keyword)

        );

    });

    renderTeachers(filtered);

});

/* ==========================================================
   FILTER
========================================================== */

const teacherFilterButtons = document.querySelectorAll(".teacher-filter-btn");

teacherFilterButtons.forEach(function(button){

    button.addEventListener("click", function(){

        teacherFilterButtons.forEach(function(btn){

            btn.classList.remove("active");

        });

        this.classList.add("active");

        currentFilter = this.dataset.filter;

        applyTeacherFilter(currentFilter);

    });

});

function applyTeacherFilter(filter){

    if(filter === "all"){

        renderTeachers(allTeachers);

        return;

    }

    renderTeachers(

        allTeachers.filter(function(teacher){

            return (

                teacher.department || ""

            ).toLowerCase() === filter.toLowerCase();

        })

    );

}

/* ==========================================================
   INITIAL LOAD
========================================================== */

window.addEventListener("DOMContentLoaded", function(){

    loadTeachers();

});

/* ==========================================================
   AUTO REFRESH
========================================================== */

document.addEventListener("visibilitychange", function(){

    if(document.visibilityState === "visible"){

        loadTeachers();

    }

});

/* ==========================================================
   READY
========================================================== */

console.log("========================================");

console.log(" AL HARAMAIN TEACHER SYSTEM V2 ");

console.log(" Firestore Connected");

console.log(" Published Teachers Only");

console.log(" Realtime Enabled");

console.log(" Search Enabled");

console.log(" Department Filter Enabled");

console.log("========================================");
