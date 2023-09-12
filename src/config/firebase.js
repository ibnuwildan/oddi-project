import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2r1N8a8bcvgKdOe-xTfHCa9vdBGH8Z1Q",
  authDomain: "oddiouth.firebaseapp.com",
  projectId: "oddiouth",
  storageBucket: "oddiouth.appspot.com",
  messagingSenderId: "550195959768",
  appId: "1:550195959768:web:55172ed98c2a02ee27c4ad",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
