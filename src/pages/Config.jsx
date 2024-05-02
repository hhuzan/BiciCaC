import { Estacion } from "../components/Estacion";
import { Mapa } from "../components/Mapa";
import { getStations } from "../utils/getStations";
import { useState, useEffect } from "react";
/*import seleccion from "../seleccion.json";*/
import { MdHome, MdLogout } from "react-icons/md";
import {appFirebase} from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";
import { getSeleccionados } from "../utils/getSeleccionados";

const auth = getAuth(appFirebase);

export const Config = ({ usuario }) => {
<<<<<<< HEAD
  const [stations, setStations] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [lat, setLat] = useState();
  const [lon, setLon] = useState();
  const [selected, setSelected] = useState();
  
  useEffect(() => {
    getStations(setStations, setLoading);
    getSeleccionados(usuario.uid, setSelected);
    console.log(selected);
  }, []);
=======
	const [stations, setStations] = useState([]);
	const [isLoading, setLoading] = useState(true);
	const [lat, setLat] = useState();
	const [lon, setLon] = useState();
	const [selected, setSelected] = useState();

	useEffect(() => {
		getStations(setStations, setLoading);
	}, []);
>>>>>>> 2552382497d3603425f2d145090d36595355794f

	useEffect(() => {
		if (stations.length != []) {
			setSelected(stations.data.stations[0].station_id);
			setLat(stations.data.stations[0].lat);
			setLon(stations.data.stations[0].lon);
		}
	}, [stations]);

<<<<<<< HEAD
  return isLoading ? (
    <h1>Cargando...</h1>
  ) : (
    <>
      <header>
        <a href="/state">
          <MdHome />
        </a>
        {usuario.email}
        <MdLogout onClick={() => signOut(auth)} />
      </header>
      <h1>Estaciones Favoritas</h1>
      <div className="estaciones">
        <div>
          {stations.data.stations.map((station) => {
            return (
              <Estacion
                key={station.station_id}
                station={station}
                seleccionados={selected}
                setLat={setLat}
                setLon={setLon}
                selected={selected}
                setSelected={setSelected}
              />
            );
          })}
        </div>
        <Mapa lat={lat} lon={lon} height={400} width={600} />
      </div>
    </>
  );
=======
	return isLoading ? (
		<h1>Cargando...</h1>
	) : (
		<>
			<header>
				<a href="/state">
					<MdHome />
				</a>
				{usuario.email}
				<MdLogout onClick={() => signOut(auth)} />
			</header>
			<h1>Estaciones Favoritas</h1>
			<div className="estaciones">
				<div>
					{stations.data.stations.map((station) => {
						return (
							<Estacion
								key={station.station_id}
								station={station}
								seleccionados={seleccion.seleccionados}
								setLat={setLat}
								setLon={setLon}
								selected={selected}
								setSelected={setSelected}
							/>
						);
					})}
				</div>
				<Mapa lat={lat} lon={lon} height={400} width={600} />
			</div>
		</>
	);
>>>>>>> 2552382497d3603425f2d145090d36595355794f
};
