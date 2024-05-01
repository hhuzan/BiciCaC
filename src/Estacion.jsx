import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Estacion = ({ station, seleccionados }) => {
  const [seleccionado, setSeleccionado] = useState(
    seleccionados.includes(Number(station.station_id))
  );

  const handleSeleccion = () => {
    setSeleccionado(!seleccionado);
    alert("Implementar llamado a Backend");
  };

  const url = "https://google.com/maps/?q=" + station.lat + "," + station.lon;
  return (
    <div className="estacion">
      <div className="estacion_name">{station.name}</div>
      <div className="estacion_address">
        {station.address}
        <a
          className="estacion_icon"
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <FaLocationDot />
        </a>
      </div>

      <input
        type="checkbox"
        onChange={handleSeleccion}
        checked={seleccionado}
      />
    </div>
  );
};

export default Estacion;
