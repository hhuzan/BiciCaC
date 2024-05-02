import { getDoc, doc } from "firebase/firestore";
import { db } from "./conexionAPIFirebase";

export const getFavorites = async (id, setSelected) => {
	const docRef = doc(db, "estacionesSeleccionadas", id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		const ver = await docSnap.data().estaciones;
		setSelected(ver);
	} else {
		console.log("No such document!");
	}
};
