"use strict";

/* ==========================================================
NOTICE SYSTEM V2
========================================================== */

const noticeList = document.getElementById("noticeList");
const noticeEmpty = document.getElementById("noticeEmpty");
const noticeSearch = document.getElementById("noticeSearch");

let allNotices = [];
let filteredNotices = [];

/* ==========================================================
LOAD NOTICE
========================================================== */

db.collection("notices")
.orderBy("createdAt","desc")
.onSnapshot(function(snapshot){

    allNotices = [];

    snapshot.forEach(function(doc){

        const data = doc.data();

        data.id = doc.id;

        if(data.status === "Published"){

            allNotices.push(data);

        }

    });

    filteredNotices = allNotices;

    renderNotice(filteredNotices);

});

/* ==========================================================
RENDER NOTICE
========================================================== */

function renderNotice(notices){

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

    const day = date.getDate();

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
SEARCH NOTICE
========================================================== */

noticeSearch.addEventListener("keyup", function () {

    const keyword = this.value.trim().toLowerCase();

    if (keyword === "") {

        renderNotice(allNotices);

        return;

    }

    const result = allNotices.filter(function (notice) {

        return (

            (notice.title || "").toLowerCase().includes(keyword) ||

            (notice.description || "").toLowerCase().includes(keyword) ||

            (notice.category || "").toLowerCase().includes(keyword)

        );

    });

    renderNotice(result);

});

/* ==========================================================
CATEGORY FILTER
========================================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });

        this.classList.add("active");

        const filter = this.dataset.filter;

        if (filter === "all") {

            renderNotice(allNotices);

            return;

        }

        if (filter === "important") {

            renderNotice(

                allNotices.filter(function (notice) {

                    return notice.important === true;

                })

            );

            return;

        }

        renderNotice(

            allNotices.filter(function (notice) {

                return (

                    (notice.category || "").toLowerCase() ===

                    filter.toLowerCase()

                );

            })

        );

    });

});

/* ==========================================================
READY
========================================================== */

console.log("====================================");

console.log("Notice System Version 2 Ready");

console.log("Firebase Firestore Connected");

console.log("Realtime Notice Enabled");

console.log("====================================");
