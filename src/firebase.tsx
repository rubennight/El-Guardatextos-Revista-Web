// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
//import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK3eZBkzZllsSjVKLjbJFh0kzPIrnNaAM",
  authDomain: "el-guardatextos.firebaseapp.com",
  databaseURL: "https://el-guardatextos-default-rtdb.firebaseio.com",
  projectId: "el-guardatextos",
  storageBucket: "el-guardatextos.appspot.com",
  messagingSenderId: "738165913159",
  appId: "1:738165913159:web:1da5dc6d1f47609ff8a362",
  measurementId: "G-VQV7W0ZFX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;