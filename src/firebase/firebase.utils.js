import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAyEK7ma7hYIs2MjjLkZjpRsBPSSAQluwo",
    authDomain: "crownecomm.firebaseapp.com",
    databaseURL: "https://crownecomm.firebaseio.com",
    projectId: "crownecomm",
    storageBucket: "crownecomm.appspot.com",
    messagingSenderId: "717402463198",
    appId: "1:717402463198:web:9b1f4fbb5b5721575c5b4f",
    measurementId: "G-V733ETZYKL"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase