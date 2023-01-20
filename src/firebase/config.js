// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvPADWzOVOF0pymuMDRu4CE5grCWbHF1U",
    authDomain: "portfolio-lautaro.firebaseapp.com",
    projectId: "portfolio-lautaro",
    storageBucket: "portfolio-lautaro.appspot.com",
    messagingSenderId: "538576716362",
    appId: "1:538576716362:web:4b23e3ac554a78c2eb5cb3",
    measurementId: "G-K3RLB7TH53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default function getfirebase() {
    return app;
}
export { analytics };
