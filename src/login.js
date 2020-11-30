import React from 'react' ;
import firebase from 'firebase';
import { ReactComponent } from '*.svg';

var firebaseConfig = {
    apiKey: "AIzaSyBIHX8ZyuVx4trAU1R43OjIaPHRGr6q1g4",
    authDomain: "kingame-project.firebaseapp.com",
    databaseURL: "https://kingame-project.firebaseio.com",
    projectId: "kingame-project",
    storageBucket: "kingame-project.appspot.com",
    messagingSenderId: "223723811224",
    appId: "1:223723811224:web:87fb2a999331401f477bed"
  };

firebase.initializeApp(firebaseConfig);

class Login extends ReactComponent 
