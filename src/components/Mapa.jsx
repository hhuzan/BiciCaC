export const Mapa = ({ lat, lon, height, width }) => {
	const url = lat ? "https://google.com/maps/?q=" + lat + "," + lon + "&output=embed" : "";
	return (
		<iframe
			style={{
				position: "sticky",
				top: 80,
			}}
			src={url}
			height={height}
			width={width}
		/>
	);
};
