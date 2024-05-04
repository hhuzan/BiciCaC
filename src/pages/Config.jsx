import { Estacion } from "../components/Estacion";
import { Mapa } from "../components/Mapa";
import { getStations } from "../utils/getStations";
import { useState, useEffect } from "react";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";
import { getFavorites } from "../utils/getFavorites";
import { Container, IconButton, AppBar, Box, Typography, CircularProgress, List } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

const auth = getAuth(appFirebase);

export const Config = ({ usuario }) => {
	const [stations, setStations] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [lat, setLat] = useState();
	const [lon, setLon] = useState();
	const [favorites, setFavorites] = useState([]);
	const [selected, setSelected] = useState();

	useEffect(() => {
		getStations(setStations, setLoading);
		getFavorites(usuario.uid, setFavorites);
	}, []);

	useEffect(() => {
		if (stations.length != 0) {
			setSelected(stations.data.stations[0].station_id);
			setLat(stations.data.stations[0].lat);
			setLon(stations.data.stations[0].lon);
		}
	}, [stations]);

	const Header = () => {
		return (
			<AppBar
				position="sticky"
				sx={{ display: "flex", flexFlow: "row", justifyContent: "space-between", alignItems: "center" }}
			>
				<IconButton size="large" href="/state">
					<HomeIcon />
				</IconButton>
				<Typography variant="h3">Estaciones Favoritas</Typography>
				<Typography variant="h6">{usuario.email}</Typography>
				<IconButton size="large" onClick={() => signOut(auth)}>
					<LogoutIcon />
				</IconButton>
			</AppBar>
		);
	};

	const Body = () => {
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

	return (
		<Container>
			<Header />
			<Body />
		</Container>
	);
};
