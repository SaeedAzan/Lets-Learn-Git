import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyAUoJbv3Ae_ECAjenOEdRXxeWuMkTAsc0s",
  authDomain: "reactjs-96135.firebaseapp.com",
  projectId: "reactjs-96135",
  storageBucket: "reactjs-96135.appspot.com",
  messagingSenderId: "435477555161",
  appId: "1:435477555161:web:a4f62fed248100ffb61bc8",
  measurementId: "G-W1DEJ9KN43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;