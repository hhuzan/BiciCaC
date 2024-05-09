import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { appFirebase } from "./utils/conexionAPIFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { MUIWrapper } from "./components/MUIWrapper";
import CssBaseline from "@mui/material/CssBaseline";
import MyRoutes from "./router/MyRouters";

const auth = getAuth(appFirebase);

const App = () => {
	const [usuario, setUsuario] = useState(null);

	onAuthStateChanged(auth, (usuarioFirebase) => {
		setUsuario(usuarioFirebase);
	});

	return (
		<MUIWrapper>
			<CssBaseline />
			<BrowserRouter>
				<MyRoutes isLogin={Boolean(usuario)} usuario={usuario} />
			</BrowserRouter>
		</MUIWrapper>
	);
};

export default App;
