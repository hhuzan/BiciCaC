import { getDoc, doc } from "firebase/firestore";
import { db } from "./conexionAPIFirebase";

export const getFavorites = async (id, setFavorites) => {
	const docRef = doc(db, "estacionesSeleccionadas", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const estaciones = await docSnap.data().estaciones;
		setFavorites(estaciones);
	} else {
		console.log("No such document!");
	}
};
