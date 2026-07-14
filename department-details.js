/* ==========================================================
   AL HARAMAIN MODEL MADRASA
   Department Details System
   Version 2.0
========================================================== */

"use strict";

/* ==========================================================
   GET URL PARAMETER
========================================================== */

const urlParams = new URLSearchParams(window.location.search);

const departmentId = urlParams.get("id");

/* ==========================================================
   DEPARTMENT DATABASE
========================================================== */

const departments = {

    "hifz-boys": {

        title: "হিফজ বালক বিভাগ",

        image: "https://placehold.co/1200x650?text=Hifz+Boys",

        gallery: [

            "https://placehold.co/600x400?text=Hifz+Boys+1",

            "https://placehold.co/600x400?text=Hifz+Boys+2",

            "https://placehold.co/600x400?text=Hifz+Boys+3"

        ],

        teachers: "৪",

        students: "১৫০",

        year: "২০১৩",

        type: "আবাসিক",

        description:

        "হিফজ বালক বিভাগে অভিজ্ঞ হাফেজ ও দক্ষ শিক্ষকদের তত্ত্বাবধানে সম্পূর্ণ কুরআনুল কারীম মুখস্থ করানো হয়। পাশাপাশি তাজবীদ, আখলাক, আদব ও দ্বীনি শিক্ষার উপর বিশেষ গুরুত্ব দেওয়া হয়।",

        mission:

        "শুদ্ধভাবে কুরআন হিফজ করিয়ে আদর্শ হাফেজ তৈরি করা।",

        objective:

        "কুরআনের আলোকে যোগ্য, সুশিক্ষিত ও নৈতিক মানুষ গড়ে তোলা।",

        curriculum: [

            "সম্পূর্ণ কুরআন হিফজ",

            "তাজবীদ",

            "হাদীস শিক্ষা",

            "দোয়া শিক্ষা",

            "ইসলামী আদব",

            "আখলাক"

        ]

    },



    "hifz-girls": {

        title: "হিফজ বালিকা বিভাগ",

        image: "https://placehold.co/1200x650?text=Hifz+Girls",

        gallery: [

            "https://placehold.co/600x400?text=Girls+1",

            "https://placehold.co/600x400?text=Girls+2",

            "https://placehold.co/600x400?text=Girls+3"

        ],

        teachers: "৩",

        students: "১১০",

        year: "২০১৩",

        type: "আবাসিক",

        description:

        "ছাত্রীদের জন্য নিরাপদ, সুন্দর ও ইসলামী পরিবেশে পূর্ণাঙ্গ কুরআন হিফজ শিক্ষা প্রদান করা হয়।",

        mission:

        "যোগ্য হাফেজা তৈরি করা।",

        objective:

        "দ্বীনি জ্ঞানে সমৃদ্ধ আদর্শ মুসলিম নারী গড়ে তোলা।",

        curriculum: [

            "কুরআন হিফজ",

            "তাজবীদ",

            "হাদীস",

            "দোয়া",

            "আখলাক"

        ]

    },



    "nurani": {

        title: "নূরানী বিভাগ",

        image: "https://placehold.co/1200x650?text=Nurani",

        gallery: [

            "https://placehold.co/600x400?text=Nurani+1",

            "https://placehold.co/600x400?text=Nurani+2",

            "https://placehold.co/600x400?text=Nurani+3"

        ],

        teachers: "২",

        students: "৮০",

        year: "২০১৩",

        type: "দিবাকালীন",

        description:

        "শিশুদের কুরআন শিক্ষা, কায়দা, আমপারা, দোয়া, নামাজ ও মৌলিক ইসলামী শিক্ষা প্রদান করা হয়।",

        mission:

        "শৈশব থেকেই কুরআনের সাথে পরিচয় করানো।",

        objective:

        "শুদ্ধ কুরআন তিলাওয়াত শেখানো ও ইসলামী মূল্যবোধ গড়ে তোলা।",

        curriculum: [

            "কায়দা",

            "আমপারা",

            "নামাজ শিক্ষা",

            "দোয়া",

            "আদব"

        ]

    },
       "ibtedayi": {

        title: "ইবতেদায়ী বিভাগ",

        image: "https://placehold.co/1200x650?text=Ibtedayi",

        gallery: [

            "https://placehold.co/600x400?text=Ibtedayi+1",

            "https://placehold.co/600x400?text=Ibtedayi+2",

            "https://placehold.co/600x400?text=Ibtedayi+3"

        ],

        teachers: "২",

        students: "৭০",

        year: "২০১৩",

        type: "দিবাকালীন",

        description:
        "ইসলামী শিক্ষা ও সাধারণ শিক্ষার সমন্বয়ে ইবতেদায়ী স্তরের শিক্ষার্থীদের মানসম্মত শিক্ষা প্রদান করা হয়।",

        mission:
        "মৌলিক দ্বীনি ও আধুনিক শিক্ষা নিশ্চিত করা।",

        objective:
        "যোগ্য, আদর্শ ও নৈতিক শিক্ষার্থী গড়ে তোলা।",

        curriculum: [

            "বাংলা",

            "ইংরেজি",

            "গণিত",

            "আরবি",

            "কুরআন শিক্ষা",

            "ইসলাম শিক্ষা"

        ]

    },



    "dakhil": {

        title: "দাখিল বিভাগ",

        image: "https://placehold.co/1200x650?text=Dakhil",

        gallery: [

            "https://placehold.co/600x400?text=Dakhil+1",

            "https://placehold.co/600x400?text=Dakhil+2",

            "https://placehold.co/600x400?text=Dakhil+3"

        ],

        teachers: "৪",

        students: "১০০",

        year: "২০১৩",

        type: "পূর্ণকালীন",

        description:
        "বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ডের পাঠ্যক্রম অনুযায়ী দাখিল শিক্ষা কার্যক্রম পরিচালিত হয়।",

        mission:
        "বোর্ড পরীক্ষায় সাফল্যের সাথে দ্বীনি জ্ঞান অর্জন।",

        objective:
        "যোগ্য আলেম ও আদর্শ নাগরিক তৈরি করা।",

        curriculum: [

            "কুরআন",

            "হাদীস",

            "ফিকহ",

            "বাংলা",

            "ইংরেজি",

            "গণিত",

            "বিজ্ঞান"

        ]

    },



    "model-maktab": {

        title: "মডেল মক্তব বিভাগ",

        image: "https://placehold.co/1200x650?text=Model+Maktab",

        gallery: [

            "https://placehold.co/600x400?text=Maktab+1",

            "https://placehold.co/600x400?text=Maktab+2",

            "https://placehold.co/600x400?text=Maktab+3"

        ],

        teachers: "১",

        students: "৫০",

        year: "২০১৩",

        type: "দিবাকালীন",

        description:
        "শিশুদের জন্য প্রতিদিন কুরআন শিক্ষা, নামাজ শিক্ষা ও ইসলামী আদব-আখলাক শেখানো হয়।",

        mission:
        "প্রতিটি শিশুকে কুরআনের আলোয় আলোকিত করা।",

        objective:
        "প্রাথমিক দ্বীনি শিক্ষা সবার কাছে পৌঁছে দেওয়া।",

        curriculum: [

            "কায়দা",

            "কুরআন",

            "নামাজ",

            "দোয়া",

            "ইসলামী আদব"

        ]

    },



    "adult-maktab": {

        title: "বয়স্ক মক্তব বিভাগ",

        image: "https://placehold.co/1200x650?text=Adult+Maktab",

        gallery: [

            "https://placehold.co/600x400?text=Adult+1",

            "https://placehold.co/600x400?text=Adult+2",

            "https://placehold.co/600x400?text=Adult+3"

        ],

        teachers: "১",

        students: "৩০",

        year: "২০১৩",

        type: "খণ্ডকালীন",

        description:
        "যারা ছোটবেলায় কুরআন শিক্ষা গ্রহণ করতে পারেননি, তাদের জন্য বিশেষ ব্যবস্থা।",

        mission:
        "সব বয়সের মানুষের জন্য কুরআন শিক্ষা নিশ্চিত করা।",

        objective:
        "শুদ্ধ কুরআন তিলাওয়াত ও ইসলামী জ্ঞান ছড়িয়ে দেওয়া।",

        curriculum: [

            "কুরআন শিক্ষা",

            "তাজবীদ",

            "নামাজ",

            "মাসআলা",

            "দোয়া"

        ]

    }

};

/* ==========================================================
   LOAD DEPARTMENT DATA
========================================================== */

const currentDepartment = departments[departmentId];

if (!currentDepartment) {

    document.getElementById("departmentTitle").textContent = "বিভাগ পাওয়া যায়নি";

    document.getElementById("departmentBread").textContent = "Not Found";

    document.getElementById("departmentName").textContent = "দুঃখিত! বিভাগটি পাওয়া যায়নি।";

    document.getElementById("departmentDescription").textContent =
        "আপনি যে বিভাগের তথ্য দেখতে চাচ্ছেন সেটি বর্তমানে উপলব্ধ নয়।";

} else {

    /* Page Title */

    document.title =
        currentDepartment.title + " | আল হারামাইন মডেল মাদ্রাসা";



    /* Hero */

    document.getElementById("departmentTitle").textContent =
        currentDepartment.title;

    document.getElementById("departmentBread").textContent =
        currentDepartment.title;



    /* Main Content */

    document.getElementById("departmentName").textContent =
        currentDepartment.title;

    document.getElementById("departmentDescription").textContent =
        currentDepartment.description;

    document.getElementById("departmentMission").textContent =
        currentDepartment.mission;

    document.getElementById("departmentObjective").textContent =
        currentDepartment.objective;



    /* Statistics */

    document.getElementById("teacherCount").textContent =
        currentDepartment.teachers;

    document.getElementById("studentCount").textContent =
        currentDepartment.students;

    document.getElementById("departmentYear").textContent =
        currentDepartment.year;

    document.getElementById("departmentType").textContent =
        currentDepartment.type;



    /* Banner Image */

    document.getElementById("departmentImage").src =
        currentDepartment.image;

    document.getElementById("departmentImage").alt =
        currentDepartment.title;



    /* Curriculum */

    const curriculum =
        document.getElementById("departmentCurriculum");

    curriculum.innerHTML = "";

    currentDepartment.curriculum.forEach(function (item) {

        curriculum.innerHTML += `
            <li>${item}</li>
        `;

    });



    /* Gallery */

    if (document.getElementById("gallery1")) {

        document.getElementById("gallery1").src =
            currentDepartment.gallery[0];

        document.getElementById("gallery2").src =
            currentDepartment.gallery[1];

        document.getElementById("gallery3").src =
            currentDepartment.gallery[2];

    }

}

/* ==========================================================
   END
========================================================== */

console.log("Department Details Loaded Successfully");
