export const Mapa = ({ lat, lon, height, width }) => {
  const url = lat
    ? "https://google.com/maps/?q=" + lat + "," + lon + "&output=embed"
    : "";
  return (
    <iframe
      className="mapa"
      src={url}
      height={height}
      width={width}
      title="Iframe Example"
    ></iframe>
  );
};
