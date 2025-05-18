import firebase, { getApp, getApps } from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";
import { getAuth } from "firebase/auth";





const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId:process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
//old style - that doesn't take into account server side rendering
//export const fb = firebase.initializeApp(firebaseConfig);

export const fb = !getApps().length?firebase.initializeApp(firebaseConfig):getApp()

// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();

export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();

export const fbProvider = new firebase.auth.FacebookAuthProvider();

export const auth = getAuth(fb) /* firebase.auth();*/

export const static_img = 'https://firebasestorage.googleapis.com/v0/b/bridgetech-advance-project.appspot.com/o/profile_images%2Fprofile.jpg?alt=media&token=b3c94ada-1b08-4834-bbd1-647882c7195a';






