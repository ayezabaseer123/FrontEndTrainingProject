import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measure
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBw0WGwYpYRLvxTEK1rVOwblvl1n01jACM',
  authDomain: 'bs-learning-project-287f4.firebaseapp.com',
  databaseURL: 'https://bs-learning-project-287f4.firebaseio.com',
  projectId: 'bs-learning-project-287f4',
  storageBucket: 'bs-learning-project-287f4.firebasestorage.app',
  messagingSenderId: '714110588093',
  appId: '1:714110588093:web:7c65b3815c062f34a713d4',
  measurementId: 'G-16PYT1W0QY',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = getAuth(app)
