import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDa4JMqXIoKVJuaTXFC-k0kvIaM8ltjO7Y",
    authDomain: "notion-clone-a9dd0.firebaseapp.com",
    projectId: "notion-clone-a9dd0",
    storageBucket: "notion-clone-a9dd0.firebasestorage.app",
    messagingSenderId: "839703295896",
    appId: "1:839703295896:web:9388bae8d40bc615211ded"
  };

  const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
  const db = getFirestore(app);

  export { db };