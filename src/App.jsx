import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import State from "./pages/State";
import Config from "./pages/Config";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Todas las rutas deberían ir a Login si el usurio aun no está logeado!!! */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/state" element={<State />} />
        <Route path="/config" element={<Config />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
