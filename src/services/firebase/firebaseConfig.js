
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBANUIJjmwoytPCniCWbCKvVPcOyFgPnm8",
  authDomain: "digitaldreams-66e34.firebaseapp.com",
  projectId: "digitaldreams-66e34",
  storageBucket: "digitaldreams-66e34.appspot.com",
  messagingSenderId: "199259069917",
  appId: "1:199259069917:web:1ba7323f859e7f72b9aa34"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);