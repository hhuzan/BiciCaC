import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

export const Estacion = ({ station, favorites, setLat, setLon, selected, setSelected }) => {
	const [favorite, setFavorite] = useState(favorites.includes(Number(station.station_id)));

	useEffect(() => {
		if (favorites.length != 0) {
			setFavorite(favorites.includes(Number(station.station_id)));
		}
	}, [favorites]);

	const handleFavorite = () => {
		setFavorite(!favorite);
		alert("Implementar llamado a Backend");
	};

	const handleSelected = () => {
		setLat(station.lat);
		setLon(station.lon);
		setSelected(station.station_id);
	};

	let clase = station.station_id == selected ? "estacion_seleccionada" : "estacion";
	return (
		<div className={clase}>
			<div className="estacion_etiqueta" onClick={handleSelected}>
				<div className="estacion_name">{station.name}</div>
				<div className="estacion_address">
					{station.address}
					<div className="estacion_icon">
						<FaLocationDot />
					</div>
				</div>
			</div>
			<input type="checkbox" onChange={handleFavorite} checked={favorite} />
		</div>
	);
};
