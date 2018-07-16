import { firebase } from '@firebase/app'
import '@firebase/firestore/dist/index.node.cjs'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBnxzmatcKH2X3ytP0IM8kt8lSbFFGDBeI',
  authDomain: 'vuedemo-16bf5.firebaseapp.com',
  databaseURL: 'https://vuedemo-16bf5.firebaseio.com',
  projectId: 'vuedemo-16bf5',
  storageBucket: 'vuedemo-16bf5.appspot.com',
  messagingSenderId: '1066292120232'
})

export const db = firebaseApp.firestore()
