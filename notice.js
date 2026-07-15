"use strict";

/* ==========================================================
   NOTICE SYSTEM V3
========================================================== */

/* ==========================================================
   DOM
========================================================== */

const noticeList = document.getElementById("noticeList");
const noticeSearch = document.getElementById("noticeSearch");
const noticeEmpty = document.getElementById("noticeEmpty");

/* ==========================================================
   VARIABLES
========================================================== */

let allNotices = [];
let currentFilter = "all";

/* ==========================================================
   LOAD NOTICES FROM FIRESTORE
========================================================== */

function loadNotices() {

    db.collection("notices")
    .orderBy("createdAt", "desc")
    .onSnapshot(function(snapshot){

        allNotices = [];

        snapshot.forEach(function(doc){

            const data = doc.data();

            /* শুধুমাত্র Published Notice দেখাবে */

            if(data.published !== true){

                return;

            }

            allNotices.push({

                id: doc.id,

                title: data.title || "",

                category: data.category || "সাধারণ",

                description: data.description || "",

                date: data.date || "",

                important: data.important || false,

                isNew: data.isNew || false,

                published: data.published || false

            });

        });

        renderNotices(allNotices);

    }, function(error){

        console.error("Notice Load Error:", error);

        noticeList.innerHTML = `

        <div class="notice-card">

            <h3>

                Notice Load Failed

            </h3>

            <p>

                Firebase থেকে Notice লোড করা যায়নি।

            </p>

        </div>

        `;

    });

}
/* ==========================================================
   RENDER NOTICE
========================================================== */

function renderNotices(notices){

    noticeList.innerHTML = "";

    if(notices.length === 0){

        noticeEmpty.style.display = "block";

        return;

    }

    noticeEmpty.style.display = "none";

    notices.forEach(function(notice){

        createNoticeCard(notice);

    });

}

/* ==========================================================
   CREATE NOTICE CARD
========================================================== */

function createNoticeCard(notice){

    const card = document.createElement("div");

    card.className = notice.important
        ? "notice-card important"
        : "notice-card";

    const date = notice.date
        ? new Date(notice.date)
        : new Date();

    const months = [

        "জানুয়ারি",
        "ফেব্রুয়ারি",
        "মার্চ",
        "এপ্রিল",
        "মে",
        "জুন",
        "জুলাই",
        "আগস্ট",
        "সেপ্টেম্বর",
        "অক্টোবর",
        "নভেম্বর",
        "ডিসেম্বর"

    ];

    const day = date.getDate();

    const month = months[date.getMonth()];

    card.innerHTML = `

<div class="notice-date">

<span class="day">

${day}

</span>

<span class="month">

${month}

</span>

</div>

<div class="notice-content">

<div class="notice-top">

<span class="notice-category">

${notice.category}

</span>

${notice.important
? '<span class="notice-category important-tag">গুরুত্বপূর্ণ</span>'
: ''}

${notice.isNew
? '<span class="notice-new">NEW</span>'
: ''}

</div>

<h3>

${notice.title}

</h3>

<p>

${notice.description}

</p>

<div class="notice-footer">

<span>

<i class="fa-solid fa-calendar-days"></i>

${notice.date}

</span>

</div>

</div>

`;

    noticeList.appendChild(card);

}
/* ==========================================================
   LIVE SEARCH
========================================================== */

noticeSearch.addEventListener("keyup", function () {

    const keyword = this.value.trim().toLowerCase();

    if (keyword === "") {

        applyFilter(currentFilter);

        return;

    }

    const filtered = allNotices.filter(function (notice) {

        return (

            (notice.title || "").toLowerCase().includes(keyword) ||

            (notice.description || "").toLowerCase().includes(keyword) ||

            (notice.category || "").toLowerCase().includes(keyword)

        );

    });

    renderNotices(filtered);

});

/* ==========================================================
   CATEGORY FILTER
========================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button){

    button.addEventListener("click", function(){

        filterButtons.forEach(function(btn){

            btn.classList.remove("active");

        });

        this.classList.add("active");

        currentFilter = this.dataset.filter;

        applyFilter(currentFilter);

    });

});

/* ==========================================================
   APPLY FILTER
========================================================== */

function applyFilter(filter){

    if(filter === "all"){

        renderNotices(allNotices);

        return;

    }

    if(filter === "important"){

        renderNotices(

            allNotices.filter(function(notice){

                return notice.important === true;

            })

        );

        return;

    }

    renderNotices(

        allNotices.filter(function(notice){

            return (

                notice.category || ""

            ).toLowerCase() === filter.toLowerCase();

        })

    );

}
/* ==========================================================
   INITIAL LOAD
========================================================== */

window.addEventListener("DOMContentLoaded", function () {

    loadNotices();

});

/* ==========================================================
   AUTO REFRESH
========================================================== */

document.addEventListener("visibilitychange", function(){

    if(document.visibilityState === "visible"){

        loadNotices();

    }

});

/* ==========================================================
   READY
========================================================== */

console.log("========================================");

console.log(" AL HARAMAIN NOTICE SYSTEM V3 ");

console.log(" Firestore Connected");

console.log(" Published Notice Only");

console.log(" Realtime Enabled");

console.log(" Search Enabled");

console.log(" Category Filter Enabled");

console.log("========================================");
