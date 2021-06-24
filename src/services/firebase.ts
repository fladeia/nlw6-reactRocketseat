import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID
//   };

const firebaseConfig = {
  apiKey: "AIzaSyA5EMCHxrn-lDjuGStBUXjIEUV0T7Ep-9M",
  authDomain: "letmeask-eb750.firebaseapp.com",
  databaseURL: "https://letmeask-eb750-default-rtdb.firebaseio.com",
  projectId: "letmeask-eb750",
  storageBucket: "letmeask-eb750.appspot.com",
  messagingSenderId: "868671156064",
  appId: "1:868671156064:web:e4b5946cc410f0755b3805"
};

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()

export { firebase, auth, database }