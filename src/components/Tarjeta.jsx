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
	if (num_bikes_available < 1) color_bicis = "error";
	else if (num_bikes_available < 4) color_bicis = "warning";
	else color_bicis = "success";
	let color_anclaje;

	if (num_docks_available < 1) color_anclaje = "error";
	else if (num_docks_available < 4) color_anclaje = "warnig";
	else color_anclaje = "success";

	return (
		<Card variant="outlined" sx={{ maxWidth: 302 }}>
			<CardHeader
				sx={{
					display: "flex",
					overflow: "hidden",
					"& .MuiCardHeader-content": {
						overflow: "hidden",
					},
				}}
				title={name.substring(6)}
				titleTypographyProps={{ noWrap: true }}
				subheader={address}
				subheaderTypographyProps={{ noWrap: true }}
			/>
			<CardContent>
				<Typography sx={{ display: "flex", flexFlow: "row", justifyContent: "start", alignItems: "center", gap: "24px" }}>
					<PedalBikeIcon color={color_bicis} />
					{num_bikes_available}
				</Typography>
				<Typography sx={{ display: "flex", flexFlow: "row", justifyContent: "start", alignItems: "center", gap: "24px" }}>
					<DoorSlidingIcon color={color_anclaje} />
					{num_docks_available + "/" + total_anclajes}
				</Typography>
			</CardContent>
			<Mapa lat={lat} lon={lon} height={200} width={300} />
		</Card>
	);
};
