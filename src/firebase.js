import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC_UwZY_kNUD3hroNEKALXlzpIFad0lpgc",
    authDomain: "vouchershop-96768.firebaseapp.com",
    databaseURL: "https://vouchershop-96768.firebaseio.com",
    projectId: "vouchershop-96768",
    storageBucket: "",
    messagingSenderId: "854417877433"
})

export const db = firebaseApp.firestore()


