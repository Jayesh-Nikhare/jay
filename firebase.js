// Import Firebase libraries (CDN – works with GitHub Pages)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔴 PASTE YOUR CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyCe1-mgB4cCONUZuKum-uv3RsMofWvOvFk",
  authDomain: "add-web-app-596c3.firebaseapp.com",
  projectId: "add-web-app-596c3",
  storageBucket: "add-web-app-596c3.firebasestorage.app",
  messagingSenderId: "275413673854",
  appId: "1:275413673854:web:9c4a1aafe70d131067b52f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
