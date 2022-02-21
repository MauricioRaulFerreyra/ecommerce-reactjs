import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import env from "@beam-australia/react-env";

const firebaseConfig = {
  apiKey: env("API_KEY"),
  authDomain: env("AUTH_DOMAIN"),
  projectId: env("PROJECT_ID"),
  storageBucket: env("STORAGE_BUCKET"),
  messagingSenderId: env("MESSAGE_SENDER_ID"),
  appId: env("APP_ID"),
};

const app = firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore(app)
