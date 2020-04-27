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

export const createUserProfileDocument = async( userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get()
    
    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()
    
        try{
        await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
        })
        } catch(error) {
        console.log('error creating user', error.message)
        }
    }
    return userRef
}



firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase