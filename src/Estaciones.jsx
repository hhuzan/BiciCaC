import Estacion from "./Estacion";
import { useState, useEffect } from "react";
import seleccion from "./seleccion.json";

const Estaciones = () => {
  const [stations, setStations] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = async () => {
    const url = "stationInformation?";
    try {
      const response = await fetch(
        url +
          new URLSearchParams({
            client_id: import.meta.env.VITE_CLIENT_ID,
            client_secret: import.meta.env.VITE_CLIENT_SECRET,
          })
      );
      const data = await response.json();
      setStations(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return isLoading ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <h1>Estaciones</h1>
      {stations.data.stations.map((station) => {
        return (
          <Estacion
            key={station.station_id}
            station={station}
            seleccionados={seleccion.seleccionados}
          />
        );
      })}
    </>
  );
};

export default Estaciones;
