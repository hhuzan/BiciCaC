import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, updatePassword } from "firebase/auth";
import manejoErrores from "./manejoErrores";
import { appFirebase } from "./conexionAPIFirebase";

class Autenticador {
	constructor(setIsLoggedIn) {
		this.appFirebase = appFirebase;
		this.auth = getAuth(this.appFirebase);
		this.setIsLoggedIn = setIsLoggedIn;
		this.observador = onAuthStateChanged(this.auth, (usuarioFirebase) => {
			setIsLoggedIn(!!usuarioFirebase);
		});
	}

	async login(email, password) {
		try {
			await signInWithEmailAndPassword(this.auth, email, password);
		} catch (error) {
			const descripcionError = manejoErrores(error.code, error.message);
			alert(descripcionError);
		}
	}

	async changePassword(password) {
		try {
			await updatePassword(this.auth.currentUser, password);
		} catch (error) {
			const descripcionError = manejoErrores(error.code, error.message);
			throw descripcionError;
		}
	}

	async signOut() {
		this.auth.signOut();
	}

	get uid() {
		//esto podría dar error
		return this.auth.currentUser.uid;
	}

	get email() {
		//esto podría dar error
		return this.auth.currentUser.email;
	}
}

export default Autenticador;
