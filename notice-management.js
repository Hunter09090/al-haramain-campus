/* ==========================================================
   NOTICE MANAGEMENT (FIRESTORE ONLY)
========================================================== */

"use strict";

/* ==========================================================
   DOM
========================================================== */

const noticeForm = document.getElementById("noticeForm");
const noticeList = document.getElementById("noticeList");
const searchNotice = document.getElementById("searchNotice");

const noticeTitle = document.getElementById("noticeTitle");
const noticeCategory = document.getElementById("noticeCategory");
const noticeDescription = document.getElementById("noticeDescription");
const noticeDate = document.getElementById("noticeDate");
const noticeImportant = document.getElementById("noticeImportant");
const noticeNew = document.getElementById("noticeNew");
const noticePublished = document.getElementById("noticePublished");

/* ==========================================================
   VARIABLES
========================================================== */

let editId = null;

/* ==========================================================
   SAVE NOTICE
========================================================== */

noticeForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const noticeData = {

        title: noticeTitle.value.trim(),

        category: noticeCategory.value,

        description: noticeDescription.value.trim(),

        date: noticeDate.value,

        important: noticeImportant.checked,

        isNew: noticeNew.checked,

        published: noticePublished.checked,

        createdAt: firebase.firestore.FieldValue.serverTimestamp()

    };

    try {

        if (editId) {

            await db.collection("notices")
                .doc(editId)
                .update(noticeData);

            alert("Notice Update সফল হয়েছে।");

            editId = null;

        } else {

            await db.collection("notices")
                .add(noticeData);

            alert("Notice Publish হয়েছে।");

        }

        noticeForm.reset();

        noticePublished.checked = true;

        loadNotices();

    } catch (error) {

        console.error(error);

        alert("Notice Save করতে সমস্যা হয়েছে!");

    }

});
/* ==========================================================
   LOAD ALL NOTICES
========================================================== */

async function loadNotices() {

    noticeList.innerHTML = "<p>Loading...</p>";

    try {

        const snapshot = await db.collection("notices")
            .orderBy("createdAt", "desc")
            .get();

        noticeList.innerHTML = "";

        if (snapshot.empty) {

            noticeList.innerHTML = `
                <div class="dashboard-item">
                    <strong>এখনো কোনো Notice যোগ করা হয়নি।</strong>
                </div>
            `;

            return;

        }

        snapshot.forEach(function(doc){

            createNoticeCard(doc.id, doc.data());

        });

    }

    catch(error){

        console.error(error);

        noticeList.innerHTML = "<p>Notice Load Failed.</p>";

    }

}

/* ==========================================================
   CREATE NOTICE CARD
========================================================== */

function createNoticeCard(id,data){

    const card=document.createElement("div");

    card.className="notice-item";

    card.innerHTML=`

        <div class="notice-item-info">

            <h3>${data.title}</h3>

            <p>

                <strong>${data.category}</strong>

                |

                ${data.date}

            </p>

        </div>

        <div class="notice-item-actions">

            <button class="btn btn-primary edit-btn">

                Edit

            </button>

            <button class="btn btn-outline delete-btn">

                Delete

            </button>

        </div>

    `;

    /* ==========================
       EDIT
    ========================== */

    card.querySelector(".edit-btn").onclick=function(){

        editId=id;

        noticeTitle.value=data.title;

        noticeCategory.value=data.category;

        noticeDescription.value=data.description;

        noticeDate.value=data.date;

        noticeImportant.checked=data.important || false;

        noticeNew.checked=data.isNew || false;

        noticePublished.checked=data.published || false;

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    };

    /* ==========================
       DELETE
    ========================== */

    card.querySelector(".delete-btn").onclick=async function(){

        if(!confirm("এই Notice Delete করবেন?")) return;

        await db.collection("notices").doc(id).delete();

        loadNotices();

    };

    noticeList.appendChild(card);

}
/* ==========================================================
   LIVE SEARCH
========================================================== */

searchNotice.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const items = document.querySelectorAll(".notice-item");

    items.forEach(function(item){

        const text = item.innerText.toLowerCase();

        if(text.includes(keyword)){

            item.style.display="flex";

        }else{

            item.style.display="none";

        }

    });

});

/* ==========================================================
   REALTIME FIREBASE UPDATE
========================================================== */

db.collection("notices")
.onSnapshot(function(){

    loadNotices();

});

/* ==========================================================
   LOGOUT
========================================================== */

function logoutAdmin(){

    auth.signOut()

    .then(function(){

        alert("Logout Successful");

        window.location.href="admin-login.html";

    })

    .catch(function(error){

        console.error(error);

    });

}

/* ==========================================================
   AUTH CHECK
========================================================== */

auth.onAuthStateChanged(function(user){

    if(!user){

        window.location.href="admin-login.html";

    }

});

/* ==========================================================
   INITIAL LOAD
========================================================== */

window.addEventListener("load", function(){

    loadNotices();

});

/* ==========================================================
   READY
========================================================== */

console.log("====================================");

console.log("Notice Management Ready");

console.log("Firestore Connected");

console.log("Realtime Sync Enabled");

console.log("====================================");
