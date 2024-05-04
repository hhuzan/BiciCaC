import { Mapa } from "./Mapa";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import PedalBikeIcon from "@mui/icons-material/PedalBike";
import DoorSlidingIcon from "@mui/icons-material/DoorSliding";

export const Tarjeta = ({ favorite, stations, status }) => {
	let num_bikes_available;
	let total_anclajes;
	let num_docks_available;
	let name;
	let address;
	let lat;
	let lon;

	stations.forEach((s) => {
		if (s.station_id == favorite) {
			name = s.name;
			address = s.address;
			lat = s.lat;
			lon = s.lon;
		}
	});

	status.forEach((s) => {
		if (s.station_id == favorite) {
			num_bikes_available = s.num_bikes_available;
			total_anclajes = s.num_bikes_available + s.num_docks_available + s.num_bikes_disabled + s.num_docks_disabled;
			num_docks_available = s.num_docks_available;
		}
	});

	let color_bicis;
	if (num_bikes_available < 1) color_bicis = "red";
	else if (num_bikes_available < 4) color_bicis = "yellow";
	else color_bicis = "green";
	let color_anclaje;

	if (num_docks_available < 1) color_anclaje = "red";
	else if (num_docks_available < 4) color_anclaje = "yellow";
	else color_anclaje = "green";

	return (
		<Card variant="outlined">
			<CardHeader title={name.substring(6)} subheader={address} />
			<CardContent>
				<Typography
					color={color_bicis}
					sx={{ display: "flex", flexFlow: "row", justifyContent: "start", alignItems: "center", gap: "24px" }}
				>
					<PedalBikeIcon />
					{num_bikes_available}
				</Typography>
				<Typography
					color={color_anclaje}
					sx={{ display: "flex", flexFlow: "row", justifyContent: "start", alignItems: "center", gap: "24px" }}
				>
					<DoorSlidingIcon />
					{num_docks_available + "/" + total_anclajes}
				</Typography>
			</CardContent>
			<Mapa lat={lat} lon={lon} height={200} width={300} />
		</Card>
	);
};
