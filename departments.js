"use strict";

/* ==========================================================
   MAIN WEBSITE DEPARTMENTS
========================================================== */

const departmentContainer =
document.getElementById("departmentsContainer");

loadDepartments();

/* ==========================================================
   LOAD DEPARTMENTS
========================================================== */

function loadDepartments() {

    db.collection("departments")
    .where("published", "==", true)
    .orderBy("order", "asc")
    .onSnapshot(function(snapshot){

        departmentContainer.innerHTML = "";

        if(snapshot.empty){

            departmentContainer.innerHTML = `

<div class="empty-message">

কোন বিভাগ পাওয়া যায়নি।

</div>

`;

            return;

        }

        snapshot.forEach(function(doc){

            const data = doc.data();

            departmentContainer.innerHTML += `
            
<div class="department-card">

<div class="department-icon"
style="background:${data.color || "#0d6efd"}">

<i class="${data.icon || "fa-solid fa-building-columns"}"></i>

</div>

<h3>${data.name}</h3>

<p>${data.description || ""}</p>

</div>

`;

        });

    });

}
