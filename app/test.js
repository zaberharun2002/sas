// "use client"
// "use Server"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app, db } from '@/app/firebase/firebaseconfig'; // Your Firebase config
// // import React, { useEffect, useState } from 'react';
// // import { updateDoc, getFirestore, collection, getDocs, doc, addDoc, setDoc } from 'firebase/firestore';

async function dddd() {
  const snap = await getDocs(collection(db, "Employee_Volunteer"));
  const data = [];
  const data2 = [];
  snap.forEach((doc) => {
    data.push({ ...doc.data().Volunteer })
  })
  console.log('aaaa', data);
  data.forEach((doc) => {
    data2.push({ ...doc })
  })
  // console.log(data2);
  // return data;

  const names = [];
  for (const item of data2) {
    if (typeof item === "object" && !Array.isArray(item)) {
      if ("name" in item) {
        names.push(item);
      } else {
        for (const nestedItem of Object.values(item)) {
          if (typeof nestedItem === "object" && !Array.isArray(nestedItem) && "name" in nestedItem) {
            names.push(nestedItem);
          }
        }
      }
    }
  }
  // console.log(names[0].title);

  return (
    <div>
      {names.map(nam => (
        <div key={nam.name}>
          <h2>{nam.name}</h2>
          <div style={{ backgroundImage: `url('${nam.img}')`, height: '1000px', width: '500px', backgroundSize: 'contain' }}></div>
        </div>
      ))}
    </div>
  );
}

// const fetchData = async () => {

  // const collectionRef = admin.firestore().collection('Employee_Volunteer');
  // const snapshot = await collectionRef.get();
  // try {

  //   const data = snapshot.docs.map(doc => ({
  //     // id: doc.id,
  //     ...doc.data().Volunteer,
  //   }));

  //   const names = [];
  //   for (const item of data) {
  //     if (typeof item === "object" && !Array.isArray(item)) {
  //       if ("name" in item) {
  //         names.push(item);
  //       } else {
  //         for (const nestedItem of Object.values(item)) {
  //           if (typeof nestedItem === "object" && !Array.isArray(nestedItem) && "name" in nestedItem) {
  //             names.push(nestedItem);
  //           }
  //         }
  //       }
  //     }
  //   }
  //   console.log(names[0].title);
  //   console.log('Fetched data:', names);
  //   return (
  //     <div>
  //       {names.map(nam => (
  //         <div key={nam.name}>
  //           <h2>{nam.name}</h2>
  //           <div style={{ backgroundImage: `url('${nam.img}')`, height: '1000px', width: '500px', backgroundSize: 'contain' }}></div>
  //         </div>
  //       ))}
  //     </div>
  //   )
  // } catch (error) {
  //   console.error('Error fetching data:', error);
  // }

// }
// const Employees = ({ employees }) => {
//   return (
//     <div>
//       {employees.map((employee) => (
//         <div key={employee.id}>
//           <h2>{employee.name}</h2>
//           {/* Render other employee details */}
//         </div>
//       ))}
//     </div>
//   );
// };
// async function aaaa(name, title, mess) {
// const firestore = getFirestore(app);
// try {
//   const docRef = doc(firestore, "Employee_Volunteer", "EV");

//   const newFieldObject = {
//     myMapField: {
//       name: "harun"
//     }
//   };

//   await updateDoc(docRef, {
//     'Employee.E3': newFieldObject
//   });

//   console.log('Field object added successfully');
// } catch (error) {
//   console.error('Error adding field object', error);
// }
// };


export default function about() {
  // const [dada, Dada] = useState([]);
  // useEffect(() => {
  //   async function fetch() {
  //     const data = await dddd();
  //     Dada(data);
  //   }
  //   fetch();
  // }, []);
  return dddd();

  // const [string, setString] = useState('E1001');
  // const [letters, setLetters] = useState('');
  // const [numbers, setNumbers] = useState('');

  // // const handleSeparate = () => {
  // //   const nl = "E0012"
  // //   const regex = /(\d+)(\D+)/; // Match numbers followed by non-digits
  // //   const match = nl.match(regex);
  // //   if (match) {
  // //     setNumbers(match[1]); // Extract numbers
  // //     setLetters(match[2]); // Extract letters
  // //   }
  // //   console.log(letters);
  // //   console.log(numbers);
  // // };

  // const handleSeparate = () => {
  //   const letters = string.match(/[A-Z]+/)[0]; // Extract letters using match
  //   const numbers = string.replace(/[A-Z]+/, ''); // Remove letters using replace
  //   setLetters(letters);
  //   setNumbers(numbers);
  // };


  // return (
  //   <div>
  //     <input value={string} onChange={(e) => setString(e.target.value)} />
  //     <button onClick={handleSeparate}>Separate</button>
  //     <p>Letters: {letters}</p>
  //     <p>Numbers: {numbers}</p>
  //   </div>
  // )
}
