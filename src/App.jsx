import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

//importando los modulos de firebase
import appFirebase from "./utils/conexionAPIFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth(appFirebase);

//importar nuestro componentes
import { Login } from "./pages/Login";
import Register from "./pages/Register";
import { State } from "./pages/State";
import Config from "./pages/Config";
import {Create} from "./pages/Create";

function App() {
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });
  //<div>{usuario ? <State correoUsuario={usuario.email} uidUsuario={usuario.uid} /> : <Login />}</div>
  return (
    <div><Create /></div>

 /* Todas las rutas deberían ir a Login si el usurio aun no está logeado!!! */
    /*
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/state" element={<State />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
*/    
  );
}

export default App;
