"use client";

import { useRouter } from 'next/navigation';
import style_0 from '@/app/page.module.css'
import React from 'react';
import { useState } from 'react';
import { app } from "@/app/firebase/firebaseconfig.js"
import { getAuth, signOut, updateEmail, updateProfile, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function singup() {

  function creale(emailh, password) {
    createUserWithEmailAndPassword(auth, emailh, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const auth = getAuth(app)

  function sing(emailh, password) {
    signInWithEmailAndPassword(auth, emailh, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log(errorCode);
      });
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
//       // User is signed in, see docs for a list of available properties
//       // https://firebase.google.com/docs/reference/js/auth.user
    //   const uid = user.uid;
      console.log(user);
      console.log(uid);

//       // updateProfile(auth.currentUser, {
//       //   displayName: "harun"
//       // }).then(() => {
//       //   // Profile updated!
//       //   // ...
//       // }).catch((error) => {
//       //   // An error occurred
//       //   // ...
//       //   // ...
//       // });
    //   const auth = getAuth();
    //   signOut(auth).then(() => {
    //     // Sign-out successful.
    //     console.log("not loged sus"); 
    //   }).catch((error) => {
    //       console.log("user not loged");
    //     // An error happened.
    //   });

    } else {
      
      console.log("user not loged");
      // User is signed out
      // ...
    }
  });
  // State to store input values
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    // Add more inputs as needed
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Function to handle button click
  const handleButtonClick = () => {
    // Access input values from the state (inputValues)
    console.log('Input values:', inputValues);
    sing(inputValues.input1, inputValues.input2)
    // You can perform additional actions with the input values here
  };




  return (
    <div>
      {/* Input fields */}
      <input
        type="text"
        name="input1"
        value={inputValues.input1}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="input2"
        value={inputValues.input2}
        onChange={handleInputChange}
      />
      {/* Add more input fields as needed */}

      {/* Button */}
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
}