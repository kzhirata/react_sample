import firebase from 'firebase';
import firebaseConfig from './config/firebase';

firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(user => {
    alert("register complete!")
  })
  .catch(error => {
    alert('firebase error :' + error);
  });
