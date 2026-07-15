/* ==========================================================
   AL HARAMAIN IDEAL NORANI ACADEMY
   NOTICE PAGE SCRIPT
   Version 1.0
========================================================== */

"use strict";

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const searchInput = document.getElementById("noticeSearch");

const noticeCards = document.querySelectorAll(".notice-card");

const emptyBox = document.querySelector(".notice-empty");

/* ==========================================================
   SEARCH NOTICE
========================================================== */

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();

        let found = 0;

        noticeCards.forEach(function (card) {

            const text = card.textContent.toLowerCase();

            if (text.includes(keyword)) {

                card.style.display = "flex";

                found++;

            } else {

                card.style.display = "none";

            }

        });

        if (emptyBox) {

            emptyBox.style.display = found === 0 ? "block" : "none";

        }

    });

}

/* ==========================================================
   HIGHLIGHT IMPORTANT NOTICE
========================================================== */

document.querySelectorAll(".notice-card.important").forEach(function(card){

    card.style.borderLeft = "5px solid #e63946";

});

/* ==========================================================
   NEW BADGE AUTO REMOVE (Future Ready)
========================================================== */

document.querySelectorAll(".notice-new").forEach(function(badge){

    badge.title = "নতুন নোটিশ";

});

/* ==========================================================
   PAGINATION (Future)
========================================================== */

document.querySelectorAll(".page-btn").forEach(function(btn){

    btn.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelectorAll(".page-btn").forEach(function(item){

            item.classList.remove("active");

        });

        this.classList.add("active");

    });

});

/* ==========================================================
   FUTURE FIREBASE READY
========================================================== */

/*

Future Structure:

Notice ID
Title
Description
Category
Publish Date
PDF Link
Image
Important
New Badge

Firebase Collection:

notices

*/

/* ==========================================================
   PAGE LOADED
========================================================== */

console.log("Notice Page Loaded Successfully");
