import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAhdAswVwZMFD-oWSShJgfcD9puCLstmwI",
    authDomain: "drinksproject-8bb12.firebaseapp.com",
    projectId: "drinksproject-8bb12",
    storageBucket: "drinksproject-8bb12.appspot.com",
    messagingSenderId: "649257956842",
    appId: "1:649257956842:web:b4b9c4324dd4fe58baae93"
};

firebase.initializeApp(firebaseConfig);
export default firebase;