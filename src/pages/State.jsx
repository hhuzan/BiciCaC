import { useState, useEffect } from "react";
import { getStations } from "../utils/getStations";
import { getStatus } from "../utils/getStatus";
import { Tarjeta } from "../components/Tarjeta";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";
import { getFavorites } from "../utils/getFavorites";
import CircularProgress from "@mui/material/CircularProgress";

const auth = getAuth(appFirebase);

export const State = ({ usuario }) => {
	const [stations, setStations] = useState([]);
	const [status, setStatus] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [isLoading1, setLoading1] = useState(true);
	const [isLoading2, setLoading2] = useState(true);

	useEffect(() => {
		getStations(setStations, setLoading1);
		getStatus(setStatus, setLoading2);
		getFavorites(usuario.uid, setFavorites);
		let timer = setInterval(() => {
			getStatus(setStatus, setLoading2);
		}, 20000);
	}, []);

	useEffect(() => {
		if (stations.length != 0 && status.length != 0) {
			// Armar diccionarios aca
		}
	}, [stations, status]);

	return isLoading1 || isLoading2 ? (
		<CircularProgress />
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
				{favorites.map((favorite) => {
					return (
						<Tarjeta
							key={favorite}
							favorite={favorite}
							stations={stations.data.stations}
							status={status.data.stations}
						/>
					);
				})}
			</div>
		</>
	);
};
