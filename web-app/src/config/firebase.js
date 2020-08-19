import * as firebase from 'firebase/app';
require('firebase/auth');

const config = {
  apiKey: "AIzaSyAt_3zfXaTlsgSrTB4vaNvhQU8x0AClJJ8",
  authDomain: "musculata-app.firebaseapp.com",
  databaseURL: "https://musculata-app.firebaseio.com",
  projectId: "musculata-app",
  storageBucket: "musculata-app.appspot.com",
  messagingSenderId: "822004733684",
  appId: "1:822004733684:web:98551ee9caa14af8a730a1",
  measurementId: "G-RNNQD5EZW2"
};

const firebaseApp = firebase.initializeApp(config); 

export default firebaseApp;
