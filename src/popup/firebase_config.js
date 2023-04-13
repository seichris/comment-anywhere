import { initializeApp } from 'firebase/app';

// TODO Fill Me! 
// Find my details from Firebase Console

// config after registering firebase App 
const config = {
    apiKey: "AIzaSyB8sGINgeYr7_-Gm2hBy7IcAgXBA6H8tl8",
    authDomain: "comment-anywhere-a648f.firebaseapp.com",
    projectId: "comment-anywhere-a648f",
    storageBucket: "comment-anywhere-a648f.appspot.com",
    messagingSenderId: "561733013204",
    appId: "1:561733013204:web:db06d75b9fea520fb5b541"
};

// This creates firebaseApp instance
// version: SDK 9
const firebaseApp = initializeApp(config)

export{
    firebaseApp
}