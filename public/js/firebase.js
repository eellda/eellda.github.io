// import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAkvUJqRK9E1BLuj2OwADiRE8fZXjrttK8",
    authDomain: "bolgging-website-346af.firebaseapp.com",
    projectId: "bolgging-website-346af",
    storageBucket: "bolgging-website-346af.appspot.com",
    messagingSenderId: "72953590512",
    appId: "1:72953590512:web:18003fe443f35a62ef0835",
    measurementId: "G-7NLT8WGYFW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
