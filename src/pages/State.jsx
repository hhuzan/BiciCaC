import { useState, useEffect } from "react";
import { getStations } from "../utils/getStations";
import { getStatus } from "../utils/getStatus";
import { Tarjeta } from "../components/Tarjeta";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import seleccion from "../seleccion.json";
import {appFirebase} from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(appFirebase);

export const State = ({ usuario }) => {
	const [stations, setStations] = useState([]);
	const [status, setStatus] = useState([]);
	const [isLoading1, setLoading1] = useState(true);
	const [isLoading2, setLoading2] = useState(true);

	useEffect(() => {
		getStations(setStations, setLoading1);
		getStatus(setStatus, setLoading2);
	}, []);

	useEffect(() => {
		if (stations.length != [] && status.length != []) {
			// Armar diccionarios aca
		}
	}, [stations, status]);

	return isLoading1 || isLoading2 ? (
		<h1>Cargando...</h1>
	) : (
		<>
			<header>
				<a href="/config">
					<MdOutlineSettings />
				</a>
				{usuario.email}
				<MdLogout onClick={() => signOut(auth)} />
			</header>
			<div className="tarjetero">
				{seleccion.seleccionados.map((seleccionado) => {
					return (
						<Tarjeta
							key={seleccionado}
							seleccionado={seleccionado}
							stations={stations.data.stations}
							status={status.data.stations}
						/>
					);
				})}
			</div>
		</>
	);
};
