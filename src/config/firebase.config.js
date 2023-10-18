import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBt5Ph9sfkjXbdf_mjaRy1AaweOwODQBRM",
  authDomain: "my-portfolio-3e693.firebaseapp.com",
  projectId: "my-portfolio-3e693",
  storageBucket: "my-portfolio-3e693.appspot.com",
  messagingSenderId: "930040582815",
  appId: "1:930040582815:web:c34d247eb7afe61a5e08aa",
  measurementId: "G-SWJ6GHW4H3"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
