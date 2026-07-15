/* ==========================================================
   AL HARAMAIN DIGITAL CAMPUS
   NOTICE MANAGEMENT
========================================================== */

"use strict";

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const noticeForm = document.getElementById("noticeForm");

const noticeList = document.getElementById("noticeList");

const searchNotice = document.getElementById("searchNotice");

const noticeTitle = document.getElementById("noticeTitle");

const noticeCategory = document.getElementById("noticeCategory");

const noticeDescription = document.getElementById("noticeDescription");

const noticeDate = document.getElementById("noticeDate");

const noticePdf = document.getElementById("noticePdf");

const noticeImage = document.getElementById("noticeImage");

const noticeImportant = document.getElementById("noticeImportant");

const noticeNew = document.getElementById("noticeNew");

const noticePublished = document.getElementById("noticePublished");

/* ==========================================================
   GLOBAL VARIABLES
========================================================== */

let editingNoticeId = null;

/* ==========================================================
   SAVE NOTICE
========================================================== */

noticeForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    try {

        let pdfUrl = "";

        let imageUrl = "";

        /* ======================
           PDF Upload
        ====================== */

        if (noticePdf.files.length > 0) {

            const pdfFile = noticePdf.files[0];

            const pdfRef = storage
                .ref("notices/pdf/" + Date.now() + "_" + pdfFile.name);

            await pdfRef.put(pdfFile);

            pdfUrl = await pdfRef.getDownloadURL();

        }

        /* ======================
           Image Upload
        ====================== */

        if (noticeImage.files.length > 0) {

            const imageFile = noticeImage.files[0];

            const imageRef = storage
                .ref("notices/images/" + Date.now() + "_" + imageFile.name);

            await imageRef.put(imageFile);

            imageUrl = await imageRef.getDownloadURL();

        }

        const noticeData = {

            title: noticeTitle.value.trim(),

            category: noticeCategory.value,

            description: noticeDescription.value.trim(),

            date: noticeDate.value,

            pdfUrl: pdfUrl,

            imageUrl: imageUrl,

            important: noticeImportant.checked,

            isNew: noticeNew.checked,

            published: noticePublished.checked,

            createdAt: firebase.firestore.FieldValue.serverTimestamp()

        };
              /* ======================================================
           SAVE / UPDATE NOTICE
        ====================================================== */

        if (editingNoticeId) {

            await db.collection("notices")
                .doc(editingNoticeId)
                .update(noticeData);

            alert("✅ Notice সফলভাবে আপডেট হয়েছে।");

            editingNoticeId = null;

        } else {

            await db.collection("notices")
                .add(noticeData);

            alert("✅ নতুন Notice সফলভাবে প্রকাশ হয়েছে।");

        }

        /* ======================================================
           RESET FORM
        ====================================================== */

        noticeForm.reset();

        noticePublished.checked = true;

        /* ======================================================
           RELOAD NOTICE LIST
        ====================================================== */

        loadNotices();

    }

    catch (error) {

        console.error(error);

        alert("❌ Notice সংরক্ষণ করতে সমস্যা হয়েছে!");

    }

});

/* ==========================================================
   LOAD ALL NOTICES
========================================================== */

async function loadNotices() {

    noticeList.innerHTML = "<p>Loading Notices...</p>";

    try {

        const snapshot = await db.collection("notices")
            .orderBy("createdAt", "desc")
            .get();

        noticeList.innerHTML = "";

        if (snapshot.empty) {

            noticeList.innerHTML = `
                <div class="dashboard-item">
                    <strong>এখনো কোনো Notice যোগ করা হয়নি।</strong>
                </div>
            `;

            return;

        }

        snapshot.forEach(function(doc){

            const data = doc.data();

            createNoticeCard(doc.id, data);

        });

    }

    catch(error){

        console.error(error);

        noticeList.innerHTML =
            "<p>❌ Notice Load করতে সমস্যা হয়েছে।</p>";

    }

}
/* ==========================================================
   CREATE NOTICE CARD
========================================================== */

function createNoticeCard(id, data) {

    const card = document.createElement("div");

    card.className = "notice-item";

    card.dataset.id = id;

    card.innerHTML = `

        <div class="notice-item-info">

            <h3>${data.title}</h3>

            <p>

                <strong>Category:</strong> ${data.category}

                |

                <strong>Date:</strong> ${data.date}

            </p>

            <div class="notice-tags">

                ${data.important ? '<span class="tag important-tag">গুরুত্বপূর্ণ</span>' : ''}

                ${data.isNew ? '<span class="tag new-tag">NEW</span>' : ''}

                ${data.published ? '<span class="tag published-tag">Published</span>' : '<span class="tag draft-tag">Draft</span>'}

            </div>

        </div>

        <div class="notice-item-actions">

            <button class="btn btn-primary edit-btn">

                <i class="fa-solid fa-pen"></i>

                Edit

            </button>

            <button class="btn btn-outline delete-btn">

                <i class="fa-solid fa-trash"></i>

                Delete

            </button>

            <button class="btn btn-primary preview-btn">

                <i class="fa-solid fa-eye"></i>

                Preview

            </button>

        </div>

    `;

    /* ==========================
       EDIT
    ========================== */

    card.querySelector(".edit-btn").addEventListener("click", function () {

        editingNoticeId = id;

        noticeTitle.value = data.title;

        noticeCategory.value = data.category;

        noticeDescription.value = data.description;

        noticeDate.value = data.date;

        noticeImportant.checked = data.important;

        noticeNew.checked = data.isNew;

        noticePublished.checked = data.published;

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* ==========================
       DELETE
    ========================== */

    card.querySelector(".delete-btn").addEventListener("click", async function () {

        const ok = confirm("আপনি কি এই Notice Delete করতে চান?");

        if (!ok) return;

        try {

            await db.collection("notices").doc(id).delete();

            loadNotices();

            alert("✅ Notice Delete হয়েছে।");

        }

        catch (error) {

            console.error(error);

            alert("❌ Delete করতে সমস্যা হয়েছে।");

        }

    });

    /* ==========================
       PREVIEW
    ========================== */

    card.querySelector(".preview-btn").addEventListener("click", function () {

        alert(

`শিরোনাম:
${data.title}

ক্যাটাগরি:
${data.category}

তারিখ:
${data.date}

বিস্তারিত:

${data.description}`

        );

    });

    noticeList.appendChild(card);

}

/* ==========================================================
   SEARCH NOTICE
========================================================== */

searchNotice.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    document.querySelectorAll(".notice-item").forEach(function (item) {

        const text = item.innerText.toLowerCase();

        item.style.display = text.includes(keyword) ? "flex" : "none";

    });

});

/* ==========================================================
   INITIAL LOAD
========================================================== */

loadNotices();

/* ==========================================================
   READY
========================================================== */

console.log("Notice Management Ready");
