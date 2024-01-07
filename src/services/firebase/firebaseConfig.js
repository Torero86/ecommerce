
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDmBX4sj_5770uqh-R26jM-KGFBL7P6rKk",
  authDomain: "carritocompr.firebaseapp.com",
  projectId: "carritocompr",
  storageBucket: "carritocompr.appspot.com",
  messagingSenderId: "999488311107",
  appId: "1:999488311107:web:0fe3cdd3915e8e245b69f6"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)