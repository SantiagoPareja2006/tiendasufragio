
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBO49eF8Si6nnCIkAQJatyjAwHtzG19CwI",
    authDomain: "la-tiendita-8a55a.firebaseapp.com",
    projectId: "la-tiendita-8a55a",
    storageBucket: "la-tiendita-8a55a.appspot.com",
    messagingSenderId: "1047686680075",
    appId: "1:1047686680075:web:4c707b6b76ea13190c010e",
    measurementId: "G-LWGM8NKSJ6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
