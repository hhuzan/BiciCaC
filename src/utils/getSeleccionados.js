import { getDoc, doc } from "firebase/firestore";
import { db } from "./conexionAPIFirebase";

export const getSeleccionados = async (id, setSelected) => {
    const docRef = doc(db, "estacionesSeleccionadas", "sZw7ScXUMSWkV7w5kwkdmmsLLkG2");
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
        const ver = docSnap.data().estaciones;
        setSelected(ver);
        console.log(ver);
    } else {
        console.log("No such document!");
    }
}

