// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAnalytics } = require("firebase/analytics");

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC6QrjmbBw1ZII12k21MuSwTveJ0LkmA3U",
    authDomain: "project-admin-6c67a.firebaseapp.com",
    projectId: "project-admin-6c67a",
    storageBucket: "project-admin-6c67a.appspot.com",
    messagingSenderId: "549694845884",
    appId: "1:549694845884:web:a65e7df3df52132154f1b9",
    measurementId: "G-SB7CFCHF8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
module.exports = app;
