/* ==========================================================
   DEPARTMENT DETAILS
   Al Haramain Model Madrasa
========================================================== */

const departments = {

"hifz-boys":{

title:"হিফজ বালক বিভাগ",

image:"https://placehold.co/1200x650?text=হিফজ+বালক+বিভাগ",

description:"হিফজ বালক বিভাগে অভিজ্ঞ হাফেজ ও দক্ষ শিক্ষকদের তত্ত্বাবধানে সম্পূর্ণ কুরআনুল কারীম মুখস্থ করানোর পাশাপাশি তাজবীদ, আখলাক এবং ইসলামী আদর্শ শিক্ষা প্রদান করা হয়।",

teachers:"৪",

students:"১৫০",

mission:"শুদ্ধভাবে কুরআন হিফজ করিয়ে আদর্শ হাফেজ তৈরি করা।",

objective:"হিফজের পাশাপাশি সুন্দর চরিত্র ও ইসলামী মূল্যবোধ গড়ে তোলা।",

curriculum:[
"সম্পূর্ণ কুরআন হিফজ",
"তাজবীদ",
"দোয়া শিক্ষা",
"হাদীস",
"আখলাক"
]

},



"hifz-girls":{

title:"হিফজ বালিকা বিভাগ",

image:"https://placehold.co/1200x650?text=হিফজ+বালিকা+বিভাগ",

description:"ছাত্রীদের জন্য নিরাপদ ও ইসলামী পরিবেশে কুরআন হিফজের পূর্ণাঙ্গ ব্যবস্থা রয়েছে।",

teachers:"৩",

students:"১০০",

mission:"যোগ্য হাফেজা তৈরি করা।",

objective:"দ্বীনি শিক্ষায় দক্ষ মুসলিম নারী গড়ে তোলা।",

curriculum:[
"কুরআন হিফজ",
"তাজবীদ",
"দোয়া",
"হাদীস",
"ইসলামী আদব"
]

},



"nurani":{

title:"নূরানী বিভাগ",

image:"https://placehold.co/1200x650?text=নূরানী+বিভাগ",

description:"শিশুদের জন্য কুরআন, আরবি, নামাজ, দোয়া ও মৌলিক ইসলামী শিক্ষা প্রদান করা হয়।",

teachers:"২",

students:"৮০",

mission:"ছোটবেলা থেকেই ইসলামী শিক্ষা প্রদান।",

objective:"কুরআনের প্রতি ভালোবাসা সৃষ্টি করা।",

curriculum:[
"কায়দা",
"আমপারা",
"নামাজ শিক্ষা",
"দোয়া",
"আদব"
]

},



"ibtedayi":{

title:"ইবতেদায়ী বিভাগ",

image:"https://placehold.co/1200x650?text=ইবতেদায়ী+বিভাগ",

description:"ইসলামী ও সাধারণ শিক্ষার সমন্বয়ে প্রাথমিক স্তরের পাঠদান।",

teachers:"২",

students:"৭০",

mission:"মৌলিক শিক্ষা নিশ্চিত করা।",

objective:"দ্বীনি ও আধুনিক জ্ঞানের সমন্বয়।",

curriculum:[
"বাংলা",
"গণিত",
"আরবি",
"ইসলাম শিক্ষা",
"ইংরেজি"
]

},



"dakhil":{

title:"দাখিল বিভাগ",

image:"https://placehold.co/1200x650?text=দাখিল+বিভাগ",

description:"বাংলাদেশ মাদ্রাসা শিক্ষা বোর্ডের পাঠ্যক্রম অনুযায়ী দাখিল শিক্ষা।",

teachers:"৪",

students:"১০০",

mission:"বোর্ড পরীক্ষায় সফলতা অর্জন।",

objective:"যোগ্য আলেম ও শিক্ষিত নাগরিক তৈরি।",

curriculum:[
"কুরআন",
"হাদীস",
"ফিকহ",
"বাংলা",
"ইংরেজি",
"গণিত"
]

},



"model-maktab":{

title:"মডেল মক্তব বিভাগ",

image:"https://placehold.co/1200x650?text=মডেল+মক্তব",

description:"দৈনিক ইসলামী শিক্ষা ও কুরআন শিক্ষার জন্য বিশেষ বিভাগ।",

teachers:"১",

students:"৫০",

mission:"সকল শিশুকে কুরআন শিক্ষা দেওয়া।",

objective:"প্রতিদিন ইসলামী শিক্ষা নিশ্চিত করা।",

curriculum:[
"কায়দা",
"কুরআন",
"নামাজ",
"দোয়া"
]

},



"adult-maktab":{

title:"বয়স্ক মক্তব বিভাগ",

image:"https://placehold.co/1200x650?text=বয়স্ক+মক্তব",

description:"প্রাপ্তবয়স্কদের জন্য কুরআন শিক্ষা ও ইসলামী জ্ঞানার্জনের বিশেষ ব্যবস্থা।",

teachers:"১",

students:"৩০",

mission:"যেকোনো বয়সে কুরআন শিক্ষা।",

objective:"ইসলামী জ্ঞান সবার কাছে পৌঁছে দেওয়া।",

curriculum:[
"কুরআন",
"তাজবীদ",
"নামাজ",
"মাসআলা"
]

}

};



/* ==========================================================
LOAD DATA
========================================================== */

const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const data = departments[id];

if(data){

document.title=data.title+" | আল হারামাইন মডেল মাদ্রাসা";

document.getElementById("departmentTitle").textContent=data.title;

document.getElementById("departmentBread").textContent=data.title;

document.getElementById("departmentName").textContent=data.title;

document.getElementById("departmentDescription").textContent=data.description;

document.getElementById("departmentMission").textContent=data.mission;

document.getElementById("departmentObjective").textContent=data.objective;

document.getElementById("teacherCount").textContent=data.teachers;

document.getElementById("studentCount").textContent=data.students;

document.getElementById("departmentImage").src=data.image;

const curriculum=document.getElementById("departmentCurriculum");

curriculum.innerHTML="";

data.curriculum.forEach(item=>{

curriculum.innerHTML+=`<li>${item}</li>`;

});

}
