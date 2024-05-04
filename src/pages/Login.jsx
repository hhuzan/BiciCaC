import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

export const Login = () => {
	const handleSubmit = async (e) => {
		e.preventDefault();
		const correo = e.target.email.value;
		const constraseña = e.target.password.value;
		try {
			await signInWithEmailAndPassword(auth, correo, constraseña);
		} catch (error) {
			alert("El correo o la contraseña son incorrectos");
		}
	};

	return (
		<>
			<h2>INGRESAR A MI CUENTA</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input type="email" name="email" id="email" required placeholder="johndoe@email.com" />
				</div>
				<div>
					<label>Contraseña:</label>
					<input type="password" name="password" id="password" required placeholder="*******" />
				</div>
				<div>
					<input type="submit" value="Ingresar" />
				</div>
				<a href="/create">Registrarse</a>
                <a href="/forgot-password">Olvid&eacute; mi contrase&ntilde;a</a>
			</form>
		</>
	);
};
