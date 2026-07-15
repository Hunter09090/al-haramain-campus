
/* ==========================================================
   AL HARAMAIN DIGITAL CAMPUS
   FIREBASE MAIN SCRIPT
========================================================== */

"use strict";

/* ==========================================================
   AUTH STATE
========================================================== */

auth.onAuthStateChanged(function (user) {

    if (user) {

        console.log("✅ Logged In :", user.email);

        const adminName = document.getElementById("adminName");

        const adminEmail = document.getElementById("adminEmailText");

        if (adminName) {

            adminName.textContent = "Administrator";

        }

        if (adminEmail) {

            adminEmail.textContent = user.email;

        }

    } else {

        const currentPage = window.location.pathname;

        if (
            currentPage.includes("admin-dashboard.html") ||
            currentPage.includes("dashboard.html")
        ) {

            window.location.href = "admin-login.html";

        }

    }

});

/* ==========================================================
   LOGOUT
========================================================== */

function logoutAdmin() {

    if (!confirm("আপনি কি লগআউট করতে চান?")) {

        return;

    }

    auth.signOut()

        .then(function () {

            alert("সফলভাবে লগআউট হয়েছে।");

            window.location.href = "admin-login.html";

        })

        .catch(function (error) {

            console.error(error);

            alert("লগআউট করতে সমস্যা হয়েছে।");

        });

}

/* ==========================================================
   FIRESTORE HELPERS
========================================================== */

function getCollection(name) {

    return db.collection(name);

}

function getDocument(collection, id) {

    return db.collection(collection).doc(id);

}

/* ==========================================================
   CREATE DOCUMENT
========================================================== */

async function createDocument(collection, data) {

    try {

        await db.collection(collection).add(data);

        console.log("Document Added");

    } catch (error) {

        console.error(error);

    }

}

/* ==========================================================
   UPDATE DOCUMENT
========================================================== */

async function updateDocument(collection, id, data) {

    try {

        await db.collection(collection).doc(id).update(data);

        console.log("Document Updated");

    } catch (error) {

        console.error(error);

    }

}

/* ==========================================================
   DELETE DOCUMENT
========================================================== */

async function deleteDocument(collection, id) {

    try {

        await db.collection(collection).doc(id).delete();

        console.log("Document Deleted");

    } catch (error) {

        console.error(error);

    }

}

/* ==========================================================
   STORAGE IMAGE UPLOAD
========================================================== */

async function uploadImage(file, folder) {

    const fileName = Date.now() + "_" + file.name;

    const storageRef = storage.ref(folder + "/" + fileName);

    await storageRef.put(file);

    const url = await storageRef.getDownloadURL();

    return url;

}

/* ==========================================================
   SERVER TIME
========================================================== */

function serverTime() {

    return firebase.firestore.FieldValue.serverTimestamp();

}

/* ==========================================================
   READY
========================================================== */

console.log("===================================");

console.log("Firebase System Ready");

console.log("Authentication Ready");

console.log("Firestore Ready");

console.log("Storage Ready");

console.log("===================================");
