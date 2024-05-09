import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { MUIWrapper } from "./components/MUIWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import MyRoutes from "./router/MyRouters";
import Autenticador from "./utils/Autenticador";

const App = () => {
	const [isLoggedIn, setIsLoggedIn] = useState();
	const autenticador = new Autenticador(setIsLoggedIn);

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
