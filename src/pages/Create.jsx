import appFirebase from "../utils/conexionAPIFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

export const Create = () => {
	const functAutenticacion = async (e) => {
		e.preventDefault();
		const correo = e.target.email.value;
		const constraseña = e.target.password.value;

		try {
			await createUserWithEmailAndPassword(auth, correo, constraseña);
		} catch (error) {
			alert("Asegurecé que la contraseña tenga más de 8 caracteres");
		}
	};

	return (
		<>
			<h2>CREAR USUARIO</h2>
			<form onSubmit={functAutenticacion}>
				<div>
					<label>Email:</label>
					<input type="text" name="email" id="email" placeholder="johndoe@email.com" />
				</div>
				<div>
					<label>Contrase&ntilde;a:</label>
					<input type="password" name="password" id="password" placeholder="********" />
				</div>
				<div>
					<input type="submit" value="Crear" />
				</div>
			</form>
		</>
	);
};
