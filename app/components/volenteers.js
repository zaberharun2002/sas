"use client"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app, db } from '@/app/firebase/firebaseconfig';
import { useState, useEffect } from 'react';
import style_0 from '@/app/page.module.css'
import Link from 'next/link'


async function dddd() {
  const snap = await getDocs(collection(db, "Employee_Volunteer"));
  const data = [];
  snap.forEach((doc) => {
    data.push({ ...doc.data().Volunteer })
  });

  const dataset = [];
  for (const item of data) {
    if (typeof item === "object" && !Array.isArray(item)) {
      if ("name" in item) {
        names.push(item);
      } else {
        for (const nestedItem of Object.values(item)) {
          if (typeof nestedItem === "object" && !Array.isArray(nestedItem) && "name" in nestedItem) {
            dataset.push(nestedItem);
          }
        }
      }
    }
  }
  return dataset;
}




export default function dddd2() {
  const [dada, Dada] = useState([]);
  useEffect(() => {
    async function fetch() {
      const data = await dddd();
      Dada(data);
    }
    fetch();
  }, []);
  
  return (
    <div className={style_0.cards_1_2}>
      {dada.map((d, i) => (
        i < 3 && (
      <Link href={"/about"} key={d.id} className={style_0.card} style={{ backgroundImage: `url('${d.img}')`}}>
        <div className={style_0.details}>
          <div className={style_0.V_title}>
            <h4>{d.name}</h4>
            <h6>{d.title}</h6>
          </div>
          <div className={style_0.detail}>
            <p>
              {d.details}
            </p>
          </div>
        </div>
      </Link>
      )))}
    </div>
  );
};