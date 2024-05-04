import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { appFirebase } from "./utils/conexionAPIFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Config } from "./pages/Config";
import { ChangePassword } from "./pages/ChangePassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { State } from "./pages/State";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkMode = true;
const darkTheme = createTheme({
	palette: {
		mode: darkMode ? "dark" : "light",
	},
});

const auth = getAuth(appFirebase);

/*
<Route path="/create" element={<State usuario={usuario} />} />
*/

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
					<Route path="/state" element={<State usuario={usuario} />} />
					<Route path="/config" element={<Config usuario={usuario} />} />
					<Route path="/change-password" element={<ChangePassword usuario={usuario} />} />
					<Route path="*" element={<p>Path not resolved</p>} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	) : (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/signUp" element={<SignUp />} />
					<Route path="/forgot-password" element={<ForgotPassword />} />
					<Route path="*" element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
