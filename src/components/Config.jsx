import { Estacion } from "./Estacion";
import { Mapa } from "./Mapa";
import { fetchStations } from "../utils/fetchStations";
import { useState, useEffect, useContext } from "react";
import { getFavorites } from "../utils/getFavorites";
import { Box, CircularProgress, List } from "@mui/material";
import AutContext from "../utils/AutContex";

export const Config = () => {
	const autenticador = useContext(AutContext);
	const [stations, setStations] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [lat, setLat] = useState();
	const [lon, setLon] = useState();
	const [favorites, setFavorites] = useState([]);
	const [selected, setSelected] = useState();

	useEffect(() => {
		fetchStations(setStations, setLoading);
		getFavorites(autenticador.uid, setFavorites);
	}, []);

	useEffect(() => {
		if (stations.length != 0) {
			setSelected(stations.data.stations[0].station_id);
			setLat(stations.data.stations[0].lat);
			setLon(stations.data.stations[0].lon);
		}
	}, [stations]);

	return isLoading ? (
		<Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
			<CircularProgress />
		</Box>
	) : (
		<Box sx={{ display: "flex" }}>
			<List>
				{stations.data.stations.map((station) => {
					return (
						<Estacion
							key={station.station_id}
							station={station}
							favorites={favorites}
							setLat={setLat}
							setLon={setLon}
							selected={selected}
							setSelected={setSelected}
						/>
					);
				})}
			</List>
			<Mapa lat={lat} lon={lon} height={400} width={600} />
		</Box>
	);
};
