export const Tarjeta = ({ seleccionado, stations, status }) => {
  let num_bikes_available;
  let total_anclajes;
  let num_docks_available;
  let name;

  stations.forEach((s) => {
    if (s.station_id == seleccionado) {
      name = s.name;
    }
  });

  status.forEach((s) => {
    if (s.station_id == seleccionado) {
      num_bikes_available = s.num_bikes_available;
      total_anclajes =
        s.num_bikes_available +
        s.num_docks_available +
        s.num_bikes_disabled +
        s.num_docks_disabled;
      num_docks_available = s.num_docks_available;
    }
  });

  return (
    <div className="tarjeta">
      <h2>{name}</h2>
      <h3>{"Bicis Disp: " + num_bikes_available}</h3>
      <h3>{"Anclajes Disp: " + num_docks_available + "/" + total_anclajes}</h3>
    </div>
  );
};
