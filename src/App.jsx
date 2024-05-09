import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { MUIWrapper } from "./components/MUIWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import MyRoutes from "./router/MyRouters";
import Autenticador from "./utils/Autenticador";
import AutContext from "./utils/AutContex";
const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState();
	const autenticador = new Autenticador(setIsLoggedIn);
	// Se crea el autenticador con un setter del useState para
	// que pueda cambiar el estada y eso dispara un render.
	// Cuando se renderiza MyRoutes es que CAMBIAN las rutas.

	return (
		<MUIWrapper>
			<CssBaseline />
			<AutContext.Provider value={autenticador}>
				<BrowserRouter>
					<MyRoutes isLoggedIn={isLoggedIn} autenticador={autenticador} />
				</BrowserRouter>
			</AutContext.Provider>
		</MUIWrapper>
	);
};

export default App;
