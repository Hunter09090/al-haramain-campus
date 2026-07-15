
/* ==========================================================
   AL HARAMAIN DIGITAL CAMPUS
   ADMIN DASHBOARD
========================================================== */

"use strict";

/* ==========================================================
   TODAY'S DATE
========================================================== */

const todayDate = document.getElementById("todayDate");

if (todayDate) {

    const today = new Date();

    todayDate.innerHTML = today.toLocaleDateString("bn-BD", {

        weekday: "long",

        year: "numeric",

        month: "long",

        day: "numeric"

    });

}

/* ==========================================================
   ADMIN INFORMATION
========================================================== */

auth.onAuthStateChanged(function(user){

    if(user){

        const emailText = document.getElementById("adminEmailText");

        const emailInfo = document.getElementById("adminEmailInfo");

        if(emailText){

            emailText.textContent = user.email;

        }

        if(emailInfo){

            emailInfo.textContent = user.email;

        }

    }

});

/* ==========================================================
   DASHBOARD COUNTERS
========================================================== */

async function loadDashboard(){

    try{

        const teacherSnapshot = await db.collection("teachers").get();

        const departmentSnapshot = await db.collection("departments").get();

        const noticeSnapshot = await db.collection("notices").get();

        const achievementSnapshot = await db.collection("achievements").get();

        const teacherBox = document.getElementById("totalTeachers");

        const noticeBox = document.getElementById("totalNotices");

        if(teacherBox){

            teacherBox.innerHTML = teacherSnapshot.size;

        }

        if(noticeBox){

            noticeBox.innerHTML = noticeSnapshot.size;

        }

        console.log("Dashboard Loaded Successfully");

    }

    catch(error){

        console.error(error);

    }

}

loadDashboard();

/* ==========================================================
   RECENT NOTICES
========================================================== */

async function loadRecentNotices(){

    const list = document.getElementById("recentNoticeList");

    if(!list) return;

    try{

        const snapshot = await db.collection("notices")

        .orderBy("date","desc")

        .limit(5)

        .get();

        list.innerHTML = "";

        snapshot.forEach(function(doc){

            const data = doc.data();

            list.innerHTML += `

            <div class="dashboard-item">

                <strong>${data.title}</strong>

                <span>${data.date}</span>

            </div>

            `;

        });

    }

    catch(error){

        console.log(error);

    }

}

loadRecentNotices();

/* ==========================================================
   QUICK ACTION
========================================================== */

document.querySelectorAll(".action-card").forEach(function(card){

    card.addEventListener("click",function(e){

        e.preventDefault();

        alert("এই ফিচারটি পরবর্তী ধাপে যুক্ত করা হবে।");

    });

});

/* ==========================================================
   AUTO REFRESH
========================================================== */

setInterval(function(){

    loadDashboard();

},30000);

/* ==========================================================
   READY
========================================================== */

console.log("====================================");

console.log("Admin Dashboard Ready");

console.log("Firebase Connected");

console.log("Authentication Active");

console.log("Dashboard Loaded");

console.log("====================================");
