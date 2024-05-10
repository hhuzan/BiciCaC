import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, updatePassword } from "firebase/auth";
import manejoErrores from "./manejoErrores";
import { appFirebase } from "./conexionAPIFirebase";

class Autenticador {
	constructor(setIsLoggedIn) {
		this.appFirebase = appFirebase;
		this.auth = getAuth(this.appFirebase);
		this.setIsLoggedIn = setIsLoggedIn; // SETTER del useState recibido
		onAuthStateChanged(this.auth, (usuarioFirebase) => {
			setIsLoggedIn(!!usuarioFirebase);
		}); //agrega el OBSERVADOR al instanciar el Objeto
	}

	async login(email, password) {
		let response = "Inicializada";
		try {
			await signInWithEmailAndPassword(this.auth, email, password);
			response = { estado: "OK", mensaje: "" };
		} catch (error) {
			response = { estado: "ERROR", mensaje: manejoErrores(error.code, error.message) };
		}

		return response
	}

	async changePassword(password) {
		let response = "Inicializada";
		try {
			await updatePassword(this.auth.currentUser, password);
			response = { estado: "OK", mensaje: "Cambio exitosamente su contraseña" };
		} catch (error) {
			response = { estado: "ERROR", mensaje: manejoErrores(error.code, error.message) };
		}
	
		return response
	}

    async passwordReset(
        email
    ) {
		let response = "Inicializada";
        try {            
            await sendPasswordResetEmail(this.auth, email);
			response = { estado: "OK", mensaje: "El correo electrónico ha sido enviado; ¡Revisa tu correo!" };
		} catch (error) {
			response = { estado: "ERROR", mensaje: manejoErrores(error.code, error.message) };
		}

		return response
    };


    async register(
        email,
        password
    ) {
		let response = "Inicializada";
        try {
            await createUserWithEmailAndPassword(
                this.auth,
                email,
                password
            );
			response = { estado: "OK", mensaje: "Se creo exitosamente su usuario" };
		} catch (error) {
			response = { estado: "ERROR", mensaje: manejoErrores(error.code, error.message) };
		}

		return response
    };

	async signOut() {
		this.auth.signOut();
	}

	get uid() {
		//esto podría dar error?
		return this.auth.currentUser.uid;
	}

	get email() {
		//esto podría dar error?
		return this.auth.currentUser.email;
	}
}

export default Autenticador;
