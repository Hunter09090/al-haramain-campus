"use strict";

/* ==========================================================
   DEPARTMENTS SYSTEM V2
========================================================== */

/* ==========================================================
   DOM
========================================================== */

const departmentList = document.getElementById("departmentList");
const departmentSearch = document.getElementById("departmentSearch");
const departmentEmpty = document.getElementById("departmentEmpty");
const departmentCount = document.getElementById("departmentCount");

/* ==========================================================
   VARIABLES
========================================================== */

let allDepartments = [];

/* ==========================================================
   LOAD DEPARTMENTS
========================================================== */

function loadDepartments() {

    db.collection("departments")
    .orderBy("order", "asc")
    .onSnapshot(function(snapshot){

        allDepartments = [];

        snapshot.forEach(function(doc){

            const data = doc.data();

            if(data.status !== "Active"){

                return;

            }

            if(data.published !== true){

                return;

            }

            allDepartments.push({

                id: doc.id,

                name: data.name || "",

                icon: data.icon || "fa-solid fa-building",

                color: data.color || "#0d6efd",

                description: data.description || "",

                order: data.order || 0

            });

        });

        departmentCount.textContent = allDepartments.length;

        renderDepartments(allDepartments);

    }, function(error){

        console.error(error);

        departmentList.innerHTML = `

<div class="department-card">

<h3>

বিভাগ লোড করা যায়নি

</h3>

</div>

`;

    });

}
/* ==========================================================
   RENDER DEPARTMENTS
========================================================== */

function renderDepartments(departments){

    departmentList.innerHTML = "";

    if(departments.length === 0){

        departmentEmpty.style.display = "block";

        return;

    }

    departmentEmpty.style.display = "none";

    departments.forEach(function(department){

        createDepartmentCard(department);

    });

}

/* ==========================================================
   CREATE CARD
========================================================== */

function createDepartmentCard(department){

    const card = document.createElement("div");

    card.className = "department-card";

    card.innerHTML = `

<div class="department-icon"
style="background:${department.color};">

<i class="${department.icon}"></i>

</div>

<div class="department-content">

<h3>

${department.name}

</h3>

<p>

${department.description}

</p>

<a
href="department-details.html?id=${department.id}"
class="btn-primary">

<i class="fa-solid fa-arrow-right"></i>

বিস্তারিত দেখুন

</a>

</div>

`;

    departmentList.appendChild(card);

}

/* ==========================================================
   SEARCH
========================================================== */

departmentSearch.addEventListener("keyup", function(){

    const keyword = this.value.trim().toLowerCase();

    if(keyword === ""){

        renderDepartments(allDepartments);

        return;

    }

    const filtered = allDepartments.filter(function(department){

        return (

            (department.name || "")
            .toLowerCase()
            .includes(keyword)

        );

    });

    renderDepartments(filtered);

});

/* ==========================================================
   INITIAL LOAD
========================================================== */

window.addEventListener("DOMContentLoaded", function(){

    loadDepartments();

});

/* ==========================================================
   AUTO REFRESH
========================================================== */

document.addEventListener("visibilitychange", function(){

    if(document.visibilityState === "visible"){

        loadDepartments();

    }

});

/* ==========================================================
   IMAGE FALLBACK (OPTIONAL)
========================================================== */

document.addEventListener("error", function(e){

    if(e.target.tagName === "IMG"){

        e.target.src = "images/default-department.jpg";

    }

}, true);

/* ==========================================================
   READY
========================================================== */

console.log("========================================");

console.log(" AL HARAMAIN DEPARTMENTS SYSTEM V2 ");

console.log(" Firestore Connected");

console.log(" Realtime Enabled");

console.log(" Search Enabled");

console.log(" Published Departments Only");

console.log("========================================");
