import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_apiKey,
	authDomain: import.meta.env.VITE_FIREBASE_authDomain,
	projectId: import.meta.env.VITE_FIREBASE_projectId,
	storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
	messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
	appId: import.meta.env.VITE_FIREBASE_appId,
};

<<<<<<< HEAD
export const appFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(appFirebase);
=======
// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;
>>>>>>> 2552382497d3603425f2d145090d36595355794f
