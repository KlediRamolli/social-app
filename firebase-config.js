import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA3__REezn-JLVpANHxfasDR69Mbf7vG3c",
  authDomain: "social-app-b365e.firebaseapp.com",
  projectId: "social-app-b365e",
  storageBucket: "social-app-b365e.appspot.com",
  messagingSenderId: "566850895045",
  appId: "1:566850895045:web:0607b17e4bc527922044ac",
  measurementId: "G-J0W595PN1K",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };
