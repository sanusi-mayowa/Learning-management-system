import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD-t7MRrI94sRnwDZHFf3EZokUAqOhVq7A",
    authDomain: "learning-management-syst-90db3.firebaseapp.com",
    projectId: "learning-management-syst-90db3",
    storageBucket: "learning-management-syst-90db3.appspot.com",
    messagingSenderId: "432966687937",
    appId: "1:432966687937:web:7b160a4ca8247a6e4c0840",
    measurementId: "G-YJH8W8KW56"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };