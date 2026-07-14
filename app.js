
/* ==========================================================
   AL HARAMAIN MODEL MADRASAH
   APP.JS
   Version : 1.0
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       Loader
    ========================================== */

    const loader = document.querySelector(".loader");

    if(loader){

        window.addEventListener("load",()=>{

            loader.style.opacity="0";

            setTimeout(()=>{

                loader.style.display="none";

            },500);

        });

    }


    /* ==========================================
       Sticky Header
    ========================================== */

    const header=document.querySelector(".header");

    function stickyHeader(){

        if(window.scrollY>80){

            header.classList.add("scrolled");

        }else{

            header.classList.remove("scrolled");

        }

    }

    stickyHeader();

    window.addEventListener("scroll",stickyHeader);



    /* ==========================================
       Mobile Menu
    ========================================== */

    const menuBtn=document.querySelector(".menu-toggle");

    const navMenu=document.querySelector(".nav-menu");

    if(menuBtn){

        menuBtn.addEventListener("click",()=>{

            navMenu.classList.toggle("show");

            menuBtn.classList.toggle("active");

        });

    }



    /* ==========================================
       Close Mobile Menu
    ========================================== */

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        link.addEventListener("click",()=>{

            navMenu.classList.remove("show");

            menuBtn.classList.remove("active");

        });

    });



    /* ==========================================
       Active Menu
    ========================================== */

    const currentPage=window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-menu a").forEach(link=>{

        const href=link.getAttribute("href");

        if(href===currentPage){

            document.querySelectorAll(".nav-menu a").forEach(a=>{

                a.classList.remove("active");

            });

            link.classList.add("active");

        }

    });



    /* ==========================================
       Scroll To Top Button
    ========================================== */

    const topBtn=document.createElement("button");

    topBtn.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

    topBtn.className="scrollTop";

    document.body.appendChild(topBtn);

    topBtn.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

    function showTopButton(){

        if(window.scrollY>400){

            topBtn.classList.add("show");

        }else{

            topBtn.classList.remove("show");

        }

    }

    window.addEventListener("scroll",showTopButton);

    showTopButton();



    /* ==========================================
       Reveal Animation
    ========================================== */

    const revealItems=document.querySelectorAll(".card,.section-title,.fade-up");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("fade-up");

            }

        });

    },{

        threshold:.15

    });

    revealItems.forEach(item=>{

        observer.observe(item);

    });



    /* ==========================================
       Footer Year
    ========================================== */

    const year=document.querySelector("#year");

    if(year){

        year.textContent=new Date().getFullYear();

    }



    /* ==========================================
       Disable Right Click (Optional)
    ========================================== */

    /*
    document.addEventListener("contextmenu",(e)=>{

        e.preventDefault();

    });
    */



    /* ==========================================
       Console Message
    ========================================== */

    console.log(
        "Al Haramain Model Madrasah Website Loaded Successfully
