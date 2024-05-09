import { useState, useEffect } from "react";
import { fetchStations } from "../utils/fetchStations";
import { fetchStatus } from "../utils/fetchStatus";
import { getFavorites } from "../utils/getFavorites";
import { Tarjeta } from "./Tarjeta";
import { Box, CircularProgress } from "@mui/material";

export const Status = ({ uid }) => {
	const [stations, setStations] = useState([]);
	const [status, setStatus] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [isLoading1, setLoading1] = useState(true);
	const [isLoading2, setLoading2] = useState(true);

	useEffect(() => {
		fetchStations(setStations, setLoading1);
		fetchStatus(setStatus, setLoading2);
		getFavorites(uid, setFavorites);
		let timer = setInterval(() => {
			fetchStatus(setStatus, setLoading2);
		}, 20000);
	}, []);

	return isLoading1 || isLoading2 ? (
		<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<CircularProgress />
		</Box>
	) : (
		<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "24px" }}>
			{favorites.map((favorite) => {
				return (
					<Tarjeta key={favorite} favorite={favorite} stations={stations.data.stations} status={status.data.stations} />
				);
			})}
		</Box>
	);
};
