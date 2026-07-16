alert("Department JS Loaded");
"use strict";

/* ==========================================================
   DEPARTMENT MANAGEMENT V1
========================================================== */

/* ==========================================================
   DOM
========================================================== */

const departmentName = document.getElementById("departmentName");
const departmentIcon = document.getElementById("departmentIcon");
const departmentOrder = document.getElementById("departmentOrder");
const departmentColor = document.getElementById("departmentColor");
const departmentDescription = document.getElementById("departmentDescription");
const departmentStatus = document.getElementById("departmentStatus");
const departmentPublished = document.getElementById("departmentPublished");

const saveDepartmentBtn = document.getElementById("saveDepartmentBtn");
const departmentTableBody = document.getElementById("departmentTableBody");

/* ==========================================================
   VARIABLES
========================================================== */

let editingDepartmentId = null;

/* ==========================================================
   SAVE DEPARTMENT
========================================================== */

saveDepartmentBtn.addEventListener("click", saveDepartment);

function saveDepartment() {

    const data = {

        name: departmentName.value.trim(),

        icon: departmentIcon.value.trim(),

        order: Number(departmentOrder.value),

        color: departmentColor.value,

        description: departmentDescription.value.trim(),

        status: departmentStatus.value,

        published: departmentPublished.checked,

        createdAt: firebase.firestore.FieldValue.serverTimestamp()

    };

    if (data.name === "") {

        alert("বিভাগের নাম লিখুন।");

        return;

    }

    db.collection("departments")

    .add(data)

    .then(function () {

        alert("Department Successfully Saved.");

        clearDepartmentForm();

    })

    .catch(function (error) {

        console.error(error);

        alert("Department Save Failed.");

    });

}
/* ==========================================================
   LOAD DEPARTMENTS
========================================================== */

loadDepartments();

function loadDepartments() {

    db.collection("departments")
    .orderBy("order", "asc")
    .onSnapshot(function(snapshot){

        departmentTableBody.innerHTML = "";

        let serial = 1;

        snapshot.forEach(function(doc){

            const data = doc.data();

            const row = document.createElement("tr");

            row.innerHTML = `

<td>${serial++}</td>

<td>${data.name}</td>

<td>

<i class="${data.icon}"
style="color:${data.color};font-size:20px;"></i>

</td>

<td>${data.order}</td>

<td>${data.status}</td>

<td>

${data.published
? '<span style="color:green;">Published</span>'
: '<span style="color:red;">Hidden</span>'}

</td>

<td>

<button
class="btn-edit"
onclick="editDepartment('${doc.id}')">

<i class="fa-solid fa-pen"></i>

</button>

<button
class="btn-delete"
onclick="deleteDepartment('${doc.id}')">

<i class="fa-solid fa-trash"></i>

</button>

</td>

`;

            departmentTableBody.appendChild(row);

        });

    });

}

/* ==========================================================
   EDIT
========================================================== */

function editDepartment(id){

    db.collection("departments")

    .doc(id)

    .get()

    .then(function(doc){

        const data = doc.data();

        editingDepartmentId = id;

        departmentName.value = data.name;

        departmentIcon.value = data.icon;

        departmentOrder.value = data.order;

        departmentColor.value = data.color;

        departmentDescription.value = data.description;

        departmentStatus.value = data.status;

        departmentPublished.checked = data.published;

        saveDepartmentBtn.innerHTML =

        '<i class="fa-solid fa-pen"></i> Update Department';

    });

}
/* ==========================================================
   UPDATE DEPARTMENT
========================================================== */

saveDepartmentBtn.addEventListener("click", function(){

    if(editingDepartmentId){

        updateDepartment();

    }

});

function updateDepartment(){

    db.collection("departments")

    .doc(editingDepartmentId)

    .update({

        name: departmentName.value.trim(),

        icon: departmentIcon.value.trim(),

        order: Number(departmentOrder.value),

        color: departmentColor.value,

        description: departmentDescription.value.trim(),

        status: departmentStatus.value,

        published: departmentPublished.checked

    })

    .then(function(){

        alert("Department Updated Successfully.");

        editingDepartmentId = null;

        saveDepartmentBtn.innerHTML =

        '<i class="fa-solid fa-floppy-disk"></i> Save Department';

        clearDepartmentForm();

    })

    .catch(function(error){

        console.error(error);

        alert("Update Failed.");

    });

}

/* ==========================================================
   DELETE DEPARTMENT
========================================================== */

function deleteDepartment(id){

    if(!confirm("এই বিভাগটি Delete করতে চান?")){

        return;

    }

    db.collection("departments")

    .doc(id)

    .delete()

    .then(function(){

        alert("Department Deleted Successfully.");

    })

    .catch(function(error){

        console.error(error);

        alert("Delete Failed.");

    });

}

/* ==========================================================
   CLEAR FORM
========================================================== */

function clearDepartmentForm(){

    departmentName.value = "";

    departmentIcon.value = "";

    departmentOrder.value = "";

    departmentColor.value = "#0d6efd";

    departmentDescription.value = "";

    departmentStatus.value = "Active";

    departmentPublished.checked = true;

}

/* ==========================================================
   READY
========================================================== */

console.log("======================================");

console.log("Department Management Version 1 Ready");

console.log("Firestore Connected");

console.log("Realtime Enabled");

console.log("CRUD Enabled");

console.log("======================================");
