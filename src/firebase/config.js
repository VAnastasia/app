import firebase from "firebase/app";
//import firestore from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyCTaiom0f9oFcpAFmI3tmZk3w22wMNJHWs",
  authDomain: "my-project-1555925309327.firebaseapp.com",
  databaseURL: "https://my-project-1555925309327.firebaseio.com",
  projectId: "my-project-1555925309327",
  storageBucket: "my-project-1555925309327.appspot.com",
  messagingSenderId: "423298676480",
  appId: "1:423298676480:web:185d2a3464b7520d5525e5",
  measurementId: "G-JTVC7LB6LX"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();
