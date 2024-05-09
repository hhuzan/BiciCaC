import { Routes, Route } from "react-router-dom";
import { ChangePassword } from "../pages/ChangePassword";
import { ForgotPassword } from "../pages/ForgotPassword";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Status } from "../components/Status";
import { Config } from "../components/Config";
import { route } from "./route.jsx";

const MyRoutes = ({ isLoggedIn, autenticador }) => {
	return isLoggedIn ? (
		<Routes>
			<Route path={route.default} element={<Dashboard autenticador={autenticador} />}>
				<Route index element={<Status uid={autenticador.uid} />} />
				<Route path={route.config} element={<Config uid={autenticador.uid} />} />
				<Route path={route.changepassword} element={<ChangePassword autenticador={autenticador} />} />
				<Route path={route.register} element={<Status autenticador={autenticador} />} />
			</Route>
			<Route path="*" element={<p>Path not resolved</p>} />
		</Routes>
	) : (
		<Routes>
			<Route path={route.register} element={<SignUp autenticador={autenticador} />} />
			<Route path={route.forgotpassword} element={<ForgotPassword />} />
			<Route path="*" element={<SignIn autenticador={autenticador} />} />
		</Routes>
	);
};

export default MyRoutes;
