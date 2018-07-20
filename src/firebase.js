import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    // apiKey: "AIzaSyC_UwZY_kNUD3hroNEKALXlzpIFad0lpgc",
    // authDomain: "vouchershop-96768.firebaseapp.com",
    // databaseURL: "https://vouchershop-96768.firebaseio.com",
    // projectId: "vouchershop-96768",
    // storageBucket: "",
    // messagingSenderId: "854417877433"

    apiKey: "AIzaSyAMhuFsddO482nDpQp-jr6tUwyw-mjG6Us",
    authDomain: "abacus-company-project.firebaseapp.com",
    databaseURL: "https://abacus-company-project.firebaseio.com",
    projectId: "abacus-company-project",
    storageBucket: "abacus-company-project.appspot.com",
    messagingSenderId: "799769146157"
})

const firestore = firebaseApp.firestore()
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
export const db = firestore
export const firebaseAuth = firebase.auth

