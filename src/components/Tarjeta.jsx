import { Mapa } from "./Mapa";
import { GrBike } from "react-icons/gr";
import { PiLockersBold } from "react-icons/pi";

export const Tarjeta = ({ favorite, stations, status }) => {
	let num_bikes_available;
	let total_anclajes;
	let num_docks_available;
	let name;
	let lat;
	let lon;

	stations.forEach((s) => {
		if (s.station_id == favorite) {
			name = s.name;
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
	if (num_bikes_available < 1) color_bicis = "rojo";
	else if (num_bikes_available < 4) color_bicis = "amarillo";
	else color_bicis = "verde";
	let color_anclaje;

	if (num_docks_available < 1) color_anclaje = "rojo";
	else if (num_docks_available < 4) color_anclaje = "amarillo";
	else color_anclaje = "verde";

	return (
		<div className="tarjeta">
			<div className="tarjeta_header">
				<p className="tarjeta_name">{name}</p>
				<div className={color_bicis}>
					<GrBike />
					<p>{num_bikes_available}</p>
				</div>

				<div className={color_anclaje}>
					<PiLockersBold />
					<p>{num_docks_available + "/" + total_anclajes}</p>
				</div>
			</div>
			<Mapa lat={lat} lon={lon} height={200} width={300} />
		</div>
	);
};
