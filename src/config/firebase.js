import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNrAeWFnuGq9oXfDey5jgKODXfAlB_y0A",
  authDomain: "document-react-app.firebaseapp.com",
  projectId: "document-react-app",
  storageBucket: "document-react-app.appspot.com",
  messagingSenderId: "785003178129",
  appId: "1:785003178129:web:9cc0e33942175fae857730",
  measurementId: "G-FMH57Q90SB"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

