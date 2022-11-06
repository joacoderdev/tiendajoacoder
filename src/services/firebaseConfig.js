import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkMdHfXNQ3RyK1rMPF6_3t4oOMBiB0aGA",
  authDomain: "tiendajoacoder.firebaseapp.com",
  projectId: "tiendajoacoder",
  storageBucket: "tiendajoacoder.appspot.com",
  messagingSenderId: "564169473502",
  appId: "1:564169473502:web:ae050d8c1c2a911b4bf14f"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
