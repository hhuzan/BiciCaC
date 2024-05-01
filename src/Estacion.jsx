import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const Estacion = ({ station, seleccionados, setLat, setLon }) => {
  const [seleccionado, setSeleccionado] = useState(
    seleccionados.includes(Number(station.station_id))
  );

  const handleSeleccion = () => {
    setSeleccionado(!seleccionado);
    alert("Implementar llamado a Backend");
  };

  const handleLocation = () => {
    setLat(station.lat);
    setLon(station.lon);
  };

  return (
    <div className="estacion">
      <div className="estacion_etiqueta">
        <div className="estacion_name">{station.name}</div>
        <div className="estacion_address">
          {station.address}
          <div className="estacion_icon">
            <FaLocationDot onClick={handleLocation} />
          </div>
        </div>
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
