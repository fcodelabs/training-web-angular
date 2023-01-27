import { initializeApp } from 'firebase/app'
import { environment } from './../environments/environment'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: environment.firebase.apiKey,
    authDomain: environment.firebase.authDomain,
    projectId: environment.firebase.projectId,
    storageBucket: environment.firebase.storageBucket,
    messagingSenderId: environment.firebase.massegingSenderId,
    appId: environment.firebase.appId,
    measurementId: environment.firebase.measurementId,
}

const app = initializeApp(firebaseConfig)
