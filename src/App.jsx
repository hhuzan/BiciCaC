import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { appFirebase } from "./utils/conexionAPIFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ChangePassword } from "./pages/ChangePassword";
import { ForgotPassword } from "./pages/ForgotPassword";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkMode = true;
const theme = createTheme({
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

	const MyRoutes = () => {
		return usuario ? (
			<Routes>
				<Route path="/" element={<Dashboard pagina="Status" usuario={usuario} />} />
				<Route path="/config" element={<Dashboard pagina="Config" usuario={usuario} />} />
				<Route path="/signUp" element={<Dashboard pagina="Status" usuario={usuario} />} />
				<Route path="/change-password" element={<ChangePassword usuario={usuario} />} />
				<Route path="*" element={<p>Path not resolved</p>} />
			</Routes>
		) : (
			<Routes>
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="*" element={<SignIn />} />
			</Routes>
		);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<BrowserRouter>
				<MyRoutes />
			</BrowserRouter>
		</ThemeProvider>
	);
};

export default App;
