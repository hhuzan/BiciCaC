import { useState, useEffect, useContext } from "react";
import { ListItem, ListItemText, ListItemButton, ListItemIcon, Checkbox, Divider } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { putFavorites } from "../utils/putFavorites";
import AutContext from "../utils/AutContex";

export const Estacion = ({ station, uid, favorites, setLat, setLon, selected, setSelected }) => {
	const [favorite, setFavorite] = useState(favorites.includes(station.station_id));
	const autenticador = useContext(AutContext);

	useEffect(() => {
		if (favorites.length != 0) {
			setFavorite(favorites.includes(station.station_id));
		}
	}, [favorites]);

	const handleFavorite = () => {
		let estaba;
		for (let i = 0; i < favorites.length; i++) {
			if (favorites[i] === station.station_id) {
				favorites.splice(i, 1);
				estaba = true;
			}
		}
		if (!estaba) {
			favorites.push(station.station_id);
		}
		const doc = {};
		doc["estaciones"] = favorites;
		putFavorites(autenticador.uid, doc);
		setFavorite(!favorite);
	};

	const handleSelected = () => {
		setLat(station.lat);
		setLon(station.lon);
		setSelected(station.station_id);
	};

	return (
		<>
			<ListItem secondaryAction={<Checkbox edge="end" onChange={handleFavorite} checked={favorite} />}>
				<ListItemButton selected={station.station_id == selected} onClick={handleSelected}>
					<ListItemIcon>
						<PlaceIcon />
					</ListItemIcon>
					<ListItemText primary={station.name.substring(6)} secondary={station.address} />
				</ListItemButton>
			</ListItem>
			<Divider variant="middle" component="li" />
		</>
	);
};
