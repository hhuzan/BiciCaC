import { useState, useEffect } from "react";
import { getStatus } from "../utils/getStatus";
import { Tarjeta } from "../components/Tarjeta";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import seleccion from "../seleccion.json";
import appFirebase from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(appFirebase);

export const State = ({ usuario }) => {
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
        {usuario.email}
        <MdLogout onClick={() => signOut(auth)} />
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
