import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD447iICWjyhblaMpXlAfvLZnEIhgPGDYA",
  authDomain: "twitter-76754.firebaseapp.com",
  projectId: "twitter-76754",
  storageBucket: "twitter-76754.firebasestorage.app",
  messagingSenderId: "836233933139",
  appId: "1:836233933139:web:fc510d9af10d6ff028b1a6",
  measurementId: "G-3N6VNP60FB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
