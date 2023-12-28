import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDkSoJgQ6ajGz26mRangjkDgHHKHGddk5o",
  authDomain: "go-accounting-3d019.firebaseapp.com",
  projectId: "go-accounting-3d019",
  storageBucket: "go-accounting-3d019.appspot.com",
  messagingSenderId: "488243118812",
  appId: "1:488243118812:web:a86a9492e5d317235f6a19",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
