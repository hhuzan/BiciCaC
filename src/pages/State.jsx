import { useState, useEffect } from "react";
import getStatus from "../utils/getStatus";
import Tarjeta from "../components/Tarjeta";
import { MdOutlineSettings, MdLogout } from "react-icons/md";
import seleccion from "../seleccion.json";

import React from "react";
import appFirebase from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth(appFirebase);

export const State = ({ correoUsuario, uidUsuario }) => {
  const [status, setStatus] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStatus(setStatus, setLoading);
  }, []);

  return isLoading ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <div>
        <h2>
          bienvenido usuario {correoUsuario}{" "}{uidUsuario}{" "}
          <button onClick={() => signOut(auth)}>Logout</button>
        </h2>
      </div>
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
