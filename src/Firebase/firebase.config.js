// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCyb0oTwM5ULiLCV-k0Hs3Lajr3Pl7lrfE',
  authDomain: 'dragon-news-breaking-eb30e.firebaseapp.com',
  projectId: 'dragon-news-breaking-eb30e',
  storageBucket: 'dragon-news-breaking-eb30e.firebasestorage.app',
  messagingSenderId: '659619391727',
  appId: '1:659619391727:web:9fb2aa8b75d2e0b87a931a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
