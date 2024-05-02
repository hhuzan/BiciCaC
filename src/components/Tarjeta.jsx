export const Tarjeta = ({ station, seleccionados }) => {
  let total_anclajes;
  if (seleccionados.includes(Number(station.station_id))) {
    total_anclajes =
      station.num_bikes_available +
      station.num_docks_available +
      station.num_bikes_disabled +
      station.num_docks_disabled;
    return (
      <div className="tarjeta">
        <h2>{"Id: " + station.station_id}</h2>
        <h3>{"Bicis Disp: " + station.num_bikes_available}</h3>
        <h3>
          {"Anclajes Disp: " +
            station.num_docks_available +
            "/" +
            total_anclajes}
        </h3>
      </div>
    );
  }
};
