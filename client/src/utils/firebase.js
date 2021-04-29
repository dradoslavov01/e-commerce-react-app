import firebase from 'firebase/app';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAvTubMODyPsUucUo-26kruW41qMFJyhJA",
    authDomain: "e-commerce-react-app-db953.firebaseapp.com",
    projectId: "e-commerce-react-app-db953",
    storageBucket: "e-commerce-react-app-db953.appspot.com",
    messagingSenderId: "858689186319",
    appId: "1:858689186319:web:2af7069aac87a4354a917a"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};


export default firebase;

export const auth = firebase.auth();