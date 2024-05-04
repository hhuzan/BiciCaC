import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(appFirebase);

export const Create = () => {
    
	const handleSubmit = async (e) => {
		e.preventDefault();
		const correo = e.target.email.value;
		const constraseña = e.target.password.value;

		try {
			await createUserWithEmailAndPassword(auth, correo, constraseña);
		} catch (error) {
			alert("Asegúrece que la contraseña tenga más de 8 caracteres");
		}
	};

	return (
		<>
			<h2>CREAR USUARIO</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email:</label>
					<input type="email" name="email" id="email" required placeholder="johndoe@email.com" />
				</div>
				<div>
					<label>Contrase&ntilde;a:</label>
					<input type="password" name="password" id="password" required placeholder="********" />
				</div>
				<div>
					<input type="submit" value="Crear" />
				</div>
			</form>
		</>
	);
};
