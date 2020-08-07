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

export default firebase