import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

if (!process.env.NEXT_PUBLIC_FIREBASE_API_KEY) {
  throw new Error('Missing Firebase API key environment variable');
}

if (!process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN) {
  throw new Error('Missing Firebase Auth Domain environment variable');
}

if (!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
  throw new Error('Missing Firebase Project ID environment variable');
}

if (!process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) {
  throw new Error('Missing Firebase Storage Bucket environment variable');
}

if (!process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID) {
  throw new Error('Missing Firebase Messaging Sender ID environment variable');
}

if (!process.env.NEXT_PUBLIC_FIREBASE_APP_ID) {
  throw new Error('Missing Firebase App ID environment variable');
}

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
