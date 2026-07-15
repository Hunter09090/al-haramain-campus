/* ==========================================================
   AL HARAMAIN IDEAL NORANI ACADEMY
   FIREBASE CONFIGURATION
========================================================== */

const firebaseConfig = {

    apiKey: "AIzaSyDYKfabHaqiUrX7__NT-M1IwOREXlX9IBA",

    authDomain: "al-haramain-digital-campus.firebaseapp.com",

    projectId: "al-haramain-digital-campus",

    storageBucket: "al-haramain-digital-campus.firebasestorage.app",

    messagingSenderId: "306805947710",

    appId: "1:306805947710:web:d0ed996b453928767a406f",

    measurementId: "G-LSMDHF5TDY"

};

/* ==========================================================
   INITIALIZE FIREBASE
========================================================== */

firebase.initializeApp(firebaseConfig);

/* ==========================================================
   FIREBASE SERVICES
========================================================== */

const auth = firebase.auth();

const db = firebase.firestore();

const storage = firebase.storage();

/* ==========================================================
   SUCCESS MESSAGE
========================================================== */

console.log("✅ Firebase Connected Successfully");

console.log("Project :", firebaseConfig.projectId);

console.log("Firestore Ready");

console.log("Authentication Ready");

console.log("Storage Ready");
