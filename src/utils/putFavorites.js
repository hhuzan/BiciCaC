import { setDoc, doc } from "firebase/firestore";
import { db } from "./conexionAPIFirebase";

export const putFavorites = async (id, docData) => {
	const docRef = doc(db, "estacionesSeleccionadas", id);

	try {
		const docSnap = await setDoc(docRef, docData);
	} catch (error) {
		alert("Error");
		console.log(error);
	}
};
