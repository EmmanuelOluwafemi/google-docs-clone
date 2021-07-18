import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCTF3tTzAq9oeHjYOMzFvsHYcWsAiALuuM",
  authDomain: "docs-ea183.firebaseapp.com",
  projectId: "docs-ea183",
  storageBucket: "docs-ea183.appspot.com",
  messagingSenderId: "502126876120",
  appId: "1:502126876120:web:d79056fe38ff7ea20d8ead"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = app.firestore()

export { db }