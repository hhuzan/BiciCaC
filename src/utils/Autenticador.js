import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	updatePassword,
} from "firebase/auth";
import manejoErrores from "./manejoErrores";
import { appFirebase } from "./conexionAPIFirebase";

class Autenticador {
	constructor(setIsLoggedIn) {
		this.appFirebase = appFirebase;
		this.auth = getAuth(this.appFirebase);
		this.setIsLoggedIn = setIsLoggedIn;
		onAuthStateChanged(this.auth, (usuarioFirebase) => {
			setIsLoggedIn(!!usuarioFirebase);
		});
	}

	async login(email, password) {
		try {
			await signInWithEmailAndPassword(this.auth, email, password);
		} catch (error) {
			throw manejoErrores(error.code, error.message);
		}
	}

	async changePassword(password) {
		try {
			await updatePassword(this.auth.currentUser, password);
		} catch (error) {
			throw manejoErrores(error.code, error.message);
		}
	}

	async passwordReset(email) {
		try {
			await sendPasswordResetEmail(this.auth, email);
		} catch (error) {
			throw manejoErrores(error.code, error.message);
		}
	}

	async register(email, password) {
		try {
			await createUserWithEmailAndPassword(this.auth, email, password);
		} catch (error) {
			throw manejoErrores(error.code, error.message);
		}
	}

	async signOut() {
		this.auth.signOut();
	}

	get uid() {
		return this.auth.currentUser.uid;
	}

	get email() {
		return this.auth.currentUser.email;
	}
}

export default Autenticador;
