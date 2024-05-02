const Mapa = ({ lat, lon }) => {
  const url = lat
    ? "https://google.com/maps/?q=" + lat + "," + lon + "&output=embed"
    : "";
  return (
    <iframe
      className="mapa"
      src={url}
      height="400"
      width="600"
      title="Iframe Example"
    ></iframe>
  );
};

export default Mapa;
