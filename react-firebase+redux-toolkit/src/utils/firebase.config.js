import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import { getFirestore } from "firebase/firestore"

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-firebase-redux-485d4.firebaseapp.com",
  projectId: "react-firebase-redux-485d4",
  storageBucket: "react-firebase-redux-485d4.appspot.com",
  messagingSenderId: "102562335744",
  appId: "1:102562335744:web:492db5026e56c41ea39ce5",
})

export const auth = app.auth()
export const db = getFirestore()
export default app
