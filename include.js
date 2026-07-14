
/* ==========================================================
   INCLUDE.JS
   Header & Footer Loader
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    loadComponent("header.html", "#header");

    loadComponent("footer.html", "#footer");

});



async function loadComponent(file, target) {

    const element = document.querySelector(target);

    if (!element) return;

    try {

        const response = await fetch(file);

        if (!response.ok) {

            throw new Error(file + " Not Found");

        }

        const html = await response.text();

        element.innerHTML = html;

        if (target === "#header") {

            setActiveMenu();

        }

        if (target === "#footer") {

            const year = document.querySelector("#year");

            if (year) {

                year.textContent = new Date().getFullYear();

            }

        }

    } catch (error) {

        console.error(error);

    }

}



/* ==========================================================
   Active Menu
========================================================== */

function setActiveMenu() {

    const currentPage = window.location.pathname
        .split("/")
        .pop() || "index.html";

    document.querySelectorAll(".nav-menu a").forEach(link => {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        } else {

            link.classList.remove("active");

        }

    });

}
