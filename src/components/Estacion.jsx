import { useState, useEffect } from "react";
import { ListItem, ListItemText, ListItemButton, ListItemIcon, Checkbox, Divider } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

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
