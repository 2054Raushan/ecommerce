import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';




const config = {
    apiKey: "AIzaSyBn4SmRMmUZHYxUENJYPZ6Qktdc559JVMk",
    authDomain: "ecom-database-a41ad.firebaseapp.com",
    databaseURL: "https://ecom-database-a41ad.firebaseio.com",
    projectId: "ecom-database-a41ad",
    storageBucket: "ecom-database-a41ad.appspot.com",
    messagingSenderId: "853096931467",
    appId: "1:853096931467:web:2320cca2c255c842e3748e"
};


firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;