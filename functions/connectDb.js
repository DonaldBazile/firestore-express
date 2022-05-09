import myCredentials from './credentials.js';
import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";


export const connectDb = () => {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(myCredentials),
      });
    }
    return getFirestore();
  } 