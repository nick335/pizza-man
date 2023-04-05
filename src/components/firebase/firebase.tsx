import { getFirestore } from "firebase/firestore";
// import { initializeFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";


const firebase = initializeApp({
  apiKey: "AIzaSyBdHmt7fC6TIZANNHzsgApsotMibRxEVHo",
  authDomain: "pizza-man-development-cc88f.firebaseapp.com",
  projectId: "pizza-man-development-cc88f",
  storageBucket: "pizza-man-development-cc88f.appspot.com",
  messagingSenderId: "354495913980",
  appId: "1:354495913980:web:f8eb0215b12a67a898dc79"
})

console.log(firebase.options.apiKey)
export const auth = getAuth(firebase)
export const firestore = getFirestore(firebase);