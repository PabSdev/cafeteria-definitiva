// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDaex5rrU0CnKrN8rCuNu-TtAytPHrt-WI',
    authDomain: 'cafete-1225a.firebaseapp.com',
    databaseURL:
        'https://cafete-1225a-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'cafete-1225a',
    storageBucket: 'cafete-1225a.firebasestorage.app',
    messagingSenderId: '936611834126',
    appId: '1:936611834126:web:8ce3d378ae4fb3fa6c8f5f',
    measurementId: 'G-L5EPXVNE4E',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
