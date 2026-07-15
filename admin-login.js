
/* ==========================================================
   AL HARAMAIN DIGITAL CAMPUS
   ADMIN LOGIN
========================================================== */

"use strict";

/* ==========================================================
   DOM ELEMENTS
========================================================== */

const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("adminEmail");
const passwordInput = document.getElementById("adminPassword");
const loginMessage = document.getElementById("loginMessage");
const loginButton = document.querySelector(".admin-login-btn");

/* ==========================================================
   SHOW MESSAGE
========================================================== */

function showMessage(message, color) {

    loginMessage.innerHTML = message;
    loginMessage.style.color = color;
    loginMessage.style.marginTop = "15px";
    loginMessage.style.fontWeight = "600";

}

/* ==========================================================
   LOGIN
========================================================== */

loginForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    loginButton.disabled = true;

    loginButton.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> লগইন হচ্ছে...';

    auth.signInWithEmailAndPassword(email, password)

        .then(function () {

            showMessage("✅ সফলভাবে লগইন হয়েছে", "green");

            setTimeout(function () {

                window.location.href = "admin-dashboard.html";

            }, 1000);

        })

        .catch(function (error) {

            console.error(error);

            let msg = "লগইন ব্যর্থ হয়েছে।";

            switch (error.code) {

                case "auth/user-not-found":
                    msg = "এই ইমেইল পাওয়া যায়নি।";
                    break;

                case "auth/wrong-password":
                    msg = "ভুল পাসওয়ার্ড।";
                    break;

                case "auth/invalid-email":
                    msg = "ইমেইল সঠিক নয়।";
                    break;

                case "auth/too-many-requests":
                    msg = "অনেকবার চেষ্টা করা হয়েছে। পরে আবার চেষ্টা করুন।";
                    break;

                default:
                    msg = error.message;

            }

            showMessage("❌ " + msg, "red");

            loginButton.disabled = false;

            loginButton.innerHTML =
                '<i class="fa-solid fa-right-to-bracket"></i> Login';

        });

});

/* ==========================================================
   AUTO LOGIN CHECK
========================================================== */

auth.onAuthStateChanged(function (user) {

    if (user) {

        window.location.href = "admin-dashboard.html";

    }

});

/* ==========================================================
   PAGE LOADED
========================================================== */

console.log("Admin Login Ready");
