import { useState, useEffect, useContext } from "react";
import { fetchStations } from "../utils/fetchStations";
import { fetchStatus } from "../utils/fetchStatus";
import { getFavorites } from "../utils/getFavorites";
import { Tarjeta } from "../components/Tarjeta";
import { Box, CircularProgress, Typography } from "@mui/material";
import AutContext from "../utils/AutContex";
import PedalBikeIcon from "@mui/icons-material/PedalBike";

export const Status = () => {
	const autenticador = useContext(AutContext);
	const [stations, setStations] = useState([]);
	const [status, setStatus] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [isLoading1, setLoading1] = useState(true);
	const [isLoading2, setLoading2] = useState(true);

	useEffect(() => {
		fetchStations(setStations, setLoading1);
		fetchStatus(setStatus, setLoading2);
		getFavorites(autenticador.uid, setFavorites);
		let timer = setInterval(() => {
			fetchStatus(setStatus, setLoading2);
		}, 20000);
	}, []);

	if (isLoading1 || isLoading2)
		return (
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress />
			</Box>
		);

	return favorites.length ? (
		<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", rowGap: "24px" }}>
			{favorites.map((favorite) => {
				return (
					<Tarjeta key={favorite} favorite={favorite} stations={stations.data.stations} status={status.data.stations} />
				);
			})}
		</Box>
	) : (
		<Box
			padding={"48px"}
			gap={"64px"}
			sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}
		>
			<Box gap={"32px"} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
				<PedalBikeIcon fontSize="large" />
				<Typography component="h2" variant="h2">
					<b>Bici-CaC</b>
				</Typography>
				<PedalBikeIcon fontSize="large" />
			</Box>
			<Typography component="h4" variant="h4">
				Agregue Sus Estaciones Favoritas en <b>Config</b>
			</Typography>
		</Box>
	);
};
