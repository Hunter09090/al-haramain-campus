"use strict";

/* ==========================================================
   FIREBASE REALTIME DASHBOARD V1
========================================================== */

const noticeCount = document.getElementById("noticeCount");
const teacherCount = document.getElementById("teacherCount");
const departmentCount = document.getElementById("departmentCount");
const studentCount = document.getElementById("studentCount");

const recentActivity = document.getElementById("recentActivity");

/* ==========================================================
   NOTICE COUNT
========================================================== */

db.collection("notices")

.onSnapshot(function(snapshot){

    noticeCount.textContent = snapshot.size;

});

/* ==========================================================
   TEACHER COUNT
========================================================== */

db.collection("teachers")

.onSnapshot(function(snapshot){

    teacherCount.textContent = snapshot.size;

});

/* ==========================================================
   DEPARTMENT COUNT
========================================================== */

db.collection("departments")

.onSnapshot(function(snapshot){

    departmentCount.textContent = snapshot.size;

});

/* ==========================================================
   STUDENT COUNT
========================================================== */

db.collection("students")

.onSnapshot(function(snapshot){

    studentCount.textContent = snapshot.size;

});
/* ==========================================================
   RECENT ACTIVITY
========================================================== */

function loadRecentActivity() {

    recentActivity.innerHTML = "";

    const activities = [];

    function renderActivity() {

        activities.sort(function (a, b) {

            return b.time - a.time;

        });

        recentActivity.innerHTML = "";

        if (activities.length === 0) {

            recentActivity.innerHTML = `

<tr>

<td colspan="3">

No Recent Activity

</td>

</tr>

`;

            return;

        }

        activities.slice(0, 10).forEach(function (item) {

            recentActivity.innerHTML += `

<tr>

<td>${item.date}</td>

<td>${item.title}</td>

<td>

<span class="online">

${item.status}

</span>

</td>

</tr>

`;

        });

    }

    /* -------------------------
       Notices
    ------------------------- */

    db.collection("notices")
    .orderBy("createdAt", "desc")
    .limit(3)
    .get()
    .then(function (snapshot) {

        snapshot.forEach(function (doc) {

            const data = doc.data();

            activities.push({

                title: "Notice: " + (data.title || "Untitled"),

                status: "Published",

                date: data.date || "-",

                time: data.createdAt
                    ? data.createdAt.seconds
                    : 0

            });

        });

        renderActivity();

    });

    /* -------------------------
       Teachers
    ------------------------- */

    db.collection("teachers")
    .orderBy("createdAt", "desc")
    .limit(3)
    .get()
    .then(function (snapshot) {

        snapshot.forEach(function (doc) {

            const data = doc.data();

            activities.push({

                title: "Teacher: " + (data.name || "Unknown"),

                status: "Added",

                date: data.date || "-",

                time: data.createdAt
                    ? data.createdAt.seconds
                    : 0

            });

        });

        renderActivity();

    });

    /* -------------------------
       Departments
    ------------------------- */

    db.collection("departments")
    .orderBy("createdAt", "desc")
    .limit(3)
    .get()
    .then(function (snapshot) {

        snapshot.forEach(function (doc) {

            const data = doc.data();

            activities.push({

                title: "Department: " + (data.name || "Unknown"),

                status: "Saved",

                date: data.date || "-",

                time: data.createdAt
                    ? data.createdAt.seconds
                    : 0

            });

        });

        renderActivity();

    });

}

loadRecentActivity();
/* ==========================================================
   AUTO REFRESH
========================================================== */

setInterval(function () {

    loadRecentActivity();

}, 30000);

/* ==========================================================
   FIREBASE CONNECTION CHECK
========================================================== */

db.collection("settings")
.limit(1)
.get()
.then(function () {

    console.log("✅ Firebase Connected");

})
.catch(function () {

    console.log("❌ Firebase Connection Failed");

});

/* ==========================================================
   DASHBOARD READY
========================================================== */

window.addEventListener("load", function () {

    console.clear();

    console.log("========================================");
    console.log(" Al Haramain Admin Dashboard V3 ");
    console.log("========================================");
    console.log("✔ Firebase Connected");
    console.log("✔ Realtime Database Ready");
    console.log("✔ Notice Counter Ready");
    console.log("✔ Teacher Counter Ready");
    console.log("✔ Department Counter Ready");
    console.log("✔ Student Counter Ready");
    console.log("✔ Recent Activity Ready");
    console.log("========================================");

});

/* ==========================================================
   REALTIME RECENT ACTIVITY REFRESH
========================================================== */

db.collection("notices")
.onSnapshot(function () {

    loadRecentActivity();

});

db.collection("teachers")
.onSnapshot(function () {

    loadRecentActivity();

});

db.collection("departments")
.onSnapshot(function () {

    loadRecentActivity();

});

db.collection("students")
.onSnapshot(function () {

    loadRecentActivity();

});
