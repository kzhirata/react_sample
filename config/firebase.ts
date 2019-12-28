import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCrHDAOpN9A3O9YF_Xd8zIUP1VlgHKLJqE",
  authDomain: "react-sample001.firebaseapp.com",
  databaseURL: "https://react-sample001.firebaseio.com",
  projectId: "react-sample001",
  storageBucket: "react-sample001.appspot.com",
  messagingSenderId: "178921859528",
  appId: "react-sample001"
};

firebase.initializeApp(config);

export default firebase;
