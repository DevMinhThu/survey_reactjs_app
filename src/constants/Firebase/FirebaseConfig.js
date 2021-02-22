import firebase from "firebase";

// add the firebase services
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB1szWYQfR2hyDFJi5F5a8deqvO-nu5A_I",
  authDomain: "surveywebapp-eee11.firebaseapp.com",
  databaseURL: "https://surveywebapp-eee11.firebaseio.com",
  projectId: "surveywebapp-eee11",
  storageBucket: "surveywebapp-eee11.appspot.com",
  messagingSenderId: "38293433025",
  appId: "1:38293433025:web:04c96001e74e80143b8240",
  measurementId: "G-RJNKJZ2J9Y",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
