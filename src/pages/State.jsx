import { useState, useEffect } from "react";
import getStatus from "../utils/getStatus";
import Tarjeta from "../components/Tarjeta";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import seleccion from "../seleccion.json";

const State = () => {
  const [status, setStatus] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStatus(setStatus, setLoading);
  }, []);

  return isLoading ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <header>
        <a href="/config">
          <MdOutlineSettings />
        </a>
        <a href="/">
          <MdLogout />
        </a>
      </header>
      <h1>Estados</h1>
      <div className="tarjetero">
        {status.data.stations.map((station) => {
          return (
            <Tarjeta
              key={station.station_id}
              station={station}
              seleccionados={seleccion.seleccionados}
            />
          );
        })}
      </div>
    </>
  );
};

export default State;
