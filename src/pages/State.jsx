import { useState, useEffect } from "react";
import { getStations } from "../utils/getStations";
import { getStatus } from "../utils/getStatus";
import { Tarjeta } from "../components/Tarjeta";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";
import { getFavorites } from "../utils/getFavorites";
import { Box, Typography, Container, CircularProgress, AppBar, IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";

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
		}, 60000);
	}, []);

	useEffect(() => {
		if (stations.length != 0 && status.length != 0) {
			// Armar diccionarios aca
		}
	}, [stations, status]);

	const Header = () => {
		return (
			<AppBar
				position="sticky"
				sx={{ display: "flex", flexFlow: "row", justifyContent: "space-between", alignItems: "center" }}
			>
				<Typography variant="h3">Bici CaC</Typography>
				<Typography variant="h6">{usuario.email}</Typography>
				<IconButton size="large" href="/config">
					<SettingsIcon />
				</IconButton>
				<IconButton size="large" href="/change-password">
					<PasswordIcon />
				</IconButton>
				<IconButton size="large" onClick={() => signOut(auth)}>
					<LogoutIcon />
				</IconButton>
			</AppBar>
		);
	};

	const Body = () => {
		return isLoading1 || isLoading2 ? (
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress />
			</Box>
		) : (
			<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", padding: "32px" }}>
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
