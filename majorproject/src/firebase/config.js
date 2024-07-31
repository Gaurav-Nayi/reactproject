
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBnuXcn0g3pU3DoMochK93Vfl36lH8pFAM",
  authDomain: "apr11-30-react-3c355.firebaseapp.com",
  projectId: "apr11-30-react-3c355",
  storageBucket: "apr11-30-react-3c355.appspot.com",
  messagingSenderId: "1078304735562",
  appId: "1:1078304735562:web:28ed23d112381ebb4841b3"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage=getStorage(app)
export default app  