import { Mapa } from "./Mapa";
export const Tarjeta = ({ seleccionado, stations, status }) => {
	let num_bikes_available;
	let total_anclajes;
	let num_docks_available;
	let name;
	let lat;
	let lon;

	stations.forEach((s) => {
		if (s.station_id == seleccionado) {
			name = s.name;
			lat = s.lat;
			lon = s.lon;
		}
	});

	status.forEach((s) => {
		if (s.station_id == seleccionado) {
			num_bikes_available = s.num_bikes_available;
			total_anclajes = s.num_bikes_available + s.num_docks_available + s.num_bikes_disabled + s.num_docks_disabled;
			num_docks_available = s.num_docks_available;
		}
	});

	return (
		<div className="tarjeta">
			<div className="tarjeta_header">
				<p>{name}</p>
				<p>{"Bicis Disp: " + num_bikes_available}</p>
				<p>{"Anclajes Disp: " + num_docks_available + "/" + total_anclajes}</p>
			</div>
			<Mapa lat={lat} lon={lon} height={200} width={300} />
		</div>
	);
};
