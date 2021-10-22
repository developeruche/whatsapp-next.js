import firebase from 'firebase';
import conf from './firebase_key';

// checking if application is initialized or not YET
const app = !firebase.apps.length
	? firebase.initializeApp(conf)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
