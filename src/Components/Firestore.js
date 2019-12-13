import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyD7ckd0JNPOI2pmgPNjWnbhMUrHq9iSxcg",
    authDomain: "community-161dc.firebaseapp.com",
    databaseURL: "https://community-161dc.firebaseio.com",
    projectId: "community-161dc",
    storageBucket: "community-161dc.appspot.com",
    messagingSenderId: "6767080484",
    appId: "1:6767080484:web:17afeb447fa25e84c614b1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
