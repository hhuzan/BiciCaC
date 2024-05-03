import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { appFirebase } from "./utils/conexionAPIFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Login } from "./pages/Login";
import { State } from "./pages/State";
import { Config } from "./pages/Config";
import { Create } from "./pages/Create";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkMode = true;
const darkTheme = createTheme({
	palette: {
		mode: darkMode ? "dark" : "light",
	},
});

const auth = getAuth(appFirebase);

const App = () => {
	const [usuario, setUsuario] = useState(null);

	onAuthStateChanged(auth, (usuarioFirebase) => {
		setUsuario(usuarioFirebase);
	});

	return usuario ? (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<State usuario={usuario} />} />
					<Route path="/create" element={<State usuario={usuario} />} />
					<Route path="/state" element={<State usuario={usuario} />} />
					<Route path="/config" element={<Config usuario={usuario} />} />
					<Route path="*" element={<p>Path not resolved</p>} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	) : (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />{" "}
			<BrowserRouter>
				<Routes>
					<Route path="/create" element={<Create />} />
					<Route path="*" element={<Login />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
