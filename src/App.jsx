import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { MUIWrapper } from "./components/MUIWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import MyRoutes from "./router/MyRouters";
import Autenticador from "./utils/Autenticador";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState();
	const autenticador = new Autenticador(setIsLoggedIn);
	// Se crea el autenticador con un setter del useState para
	// que pueda cambiar el estada y eso dispara un render.
	// Cuando se renderiza MyRoutes es que CAMBIAN las rutas.

	return (
		<MUIWrapper>
			<CssBaseline />
			<BrowserRouter>
				<MyRoutes isLoggedIn={isLoggedIn} autenticador={autenticador} />
			</BrowserRouter>
		</MUIWrapper>
	);
};

export default App;
