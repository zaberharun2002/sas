// Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase-admin/app';
// import { initializeApp } from "firebase/app";
import * as admin from 'firebase-admin';

import { getFirestore, doc } from "firebase/firestore";
// const serviceAccount = '@/app/firebase/sas-edu-firebase-adminsdk-u4r4n-6ab4bbdac9.json';
// import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD399P11qVC38j2h4rvN87f9ap5cFIVjVY",
//   authDomain: "sas-edu.firebaseapp.com",
//   projectId: "sas-edu",
//   storageBucket: "sas-edu.appspot.com",
//   messagingSenderId: "262232361752",
//   appId: "1:262232361752:web:35c6582ef16d316b73ec6d",
//   measurementId: "G-N8N84JZ1N2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
// // const auth = getAuth(app);

// async function Facth() {
//   const docRef = doc(db, "asa", "sas");
//   const snap = await getDoc(docRef);
//   console.log(snap);
// }


const serviceAccount = require('@/app/firebase/sas-edu-firebase-adminsdk-u4r4n-6ab4bbdac9.json');

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://your-project-id.firebaseio.com', // Replace with your Firebase project's databaseURL
  });
}
// const db = getFirestore();
export {admin }