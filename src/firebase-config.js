import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBH-PLyJxBh_JmOF3Avh1zhY5LFTT3H75o",
  authDomain: "breakingbadfan.firebaseapp.com",
  projectId: "breakingbadfan",
  storageBucket: "breakingbadfan.appspot.com",
  messagingSenderId: "102706843073",
  appId: "1:102706843073:web:197873c8f6c8085033b340",
  measurementId: "G-KBNVT0WS39",
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
