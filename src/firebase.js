import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import getAuth
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD-t7MRrI94sRnwDZHFf3EZokUAqOhVq7A",
  authDomain: "learning-management-syst-90db3.firebaseapp.com",
  projectId: "learning-management-syst-90db3",
  storageBucket: "learning-management-syst-90db3.appspot.com",
  messagingSenderId: "432966687937",
  appId: "1:432966687937:web:7b160a4ca8247a6e4c0840",
  measurementId: "G-YJH8W8KW56",
}; // Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

// Export auth and db for use in other files
export { auth, db };
