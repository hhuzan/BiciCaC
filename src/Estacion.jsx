import { useState } from "react";

const Estacion = ({ station, seleccionados }) => {
  const [seleccionado, setSeleccionado] = useState(
    seleccionados.includes(Number(station.station_id))
  );

  const handleSeleccion = () => {
    setSeleccionado(!seleccionado);
    alert("Implementar llamado a Backend");
  };

  return (
    <div className="estacion">
      <div className="estacion_name">{station.name}</div>
      <div className="estacion_address">{station.address}</div>
      <input
        type="checkbox"
        onChange={handleSeleccion}
        checked={seleccionado}
      />
    </div>
  );
};

export default Estacion;
