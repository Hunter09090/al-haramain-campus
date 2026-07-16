"use strict";

/* ==========================================================
   DEPARTMENT MANAGEMENT V2
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

let editingDepartmentId = null;

/* ==========================================================
   SAVE / UPDATE
========================================================== */

saveDepartmentBtn.addEventListener("click", function () {

    if (editingDepartmentId) {

        updateDepartment();

    } else {

        saveDepartment();

    }

});

/* ==========================================================
   SAVE NEW
========================================================== */

function saveDepartment() {

    const data = {

        name: departmentName.value.trim(),

        icon: departmentIcon.value.trim(),

        order: Number(departmentOrder.value) || 0,

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

        alert("Save Failed!");

    });

}
/* ==========================================================
   LOAD DEPARTMENTS
========================================================== */

function loadDepartments() {

    db.collection("departments")
    .orderBy("order", "asc")
    .onSnapshot(function (snapshot) {

        departmentTableBody.innerHTML = "";

        let serial = 1;

        snapshot.forEach(function (doc) {

            const data = doc.data();

            departmentTableBody.innerHTML += `

<tr>

<td>${serial++}</td>

<td>${data.name}</td>

<td>

<i class="${data.icon}"
style="color:${data.color};font-size:20px;"></i>

</td>

<td>${data.order}</td>

<td>${data.status}</td>

<td>${data.published ? "Yes" : "No"}</td>

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

</tr>

`;

        });

    });

}

loadDepartments();

/* ==========================================================
   EDIT
========================================================== */

function editDepartment(id) {

    db.collection("departments")

    .doc(id)

    .get()

    .then(function (doc) {

        const data = doc.data();

        editingDepartmentId = id;

        departmentName.value = data.name || "";

        departmentIcon.value = data.icon || "";

        departmentOrder.value = data.order || 0;

        departmentColor.value = data.color || "#0d6efd";

        departmentDescription.value = data.description || "";

        departmentStatus.value = data.status || "Active";

        departmentPublished.checked = data.published === true;

        saveDepartmentBtn.innerHTML =

        '<i class="fa-solid fa-floppy-disk"></i> Update Department';

    });

                  }
/* ==========================================================
   UPDATE DEPARTMENT
========================================================== */

function updateDepartment() {

    db.collection("departments")

    .doc(editingDepartmentId)

    .update({

        name: departmentName.value.trim(),

        icon: departmentIcon.value.trim(),

        order: Number(departmentOrder.value) || 0,

        color: departmentColor.value,

        description: departmentDescription.value.trim(),

        status: departmentStatus.value,

        published: departmentPublished.checked

    })

    .then(function () {

        alert("Department Updated Successfully.");

        editingDepartmentId = null;

        saveDepartmentBtn.innerHTML =
        '<i class="fa-solid fa-floppy-disk"></i> Save Department';

        clearDepartmentForm();

    })

    .catch(function (error) {

        console.error(error);

        alert("Update Failed!");

    });

}

/* ==========================================================
   DELETE
========================================================== */

function deleteDepartment(id) {

    if (!confirm("আপনি কি এই বিভাগটি Delete করতে চান?")) {

        return;

    }

    db.collection("departments")

    .doc(id)

    .delete()

    .then(function () {

        alert("Department Deleted Successfully.");

    })

    .catch(function (error) {

        console.error(error);

        alert("Delete Failed!");

    });

}

/* ==========================================================
   CLEAR FORM
========================================================== */

function clearDepartmentForm() {

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

console.clear();

console.log("====================================");

console.log("Department Management V2 Ready");

console.log("Firebase Connected");

console.log("Realtime CRUD Enabled");

console.log("====================================");
