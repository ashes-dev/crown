import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAPBin9hizPRxhtHudZNw0pFmzaV-LZkQk",
    authDomain: "crown-ashes-dev.firebaseapp.com",
    databaseURL: "https://crown-ashes-dev.firebaseio.com",
    projectId: "crown-ashes-dev",
    storageBucket: "crown-ashes-dev.appspot.com",
    messagingSenderId: "682861392347",
    appId: "1:682861392347:web:61b6677dd53dad95cdb7fe",
    measurementId: "G-98L8PP7P4J"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

// google auth setup
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

// storing user profile
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (err) {
            console.error(err)
        }
    }

    return userRef
}

export default firebase