import { Routes, Route } from "react-router-dom";
import { ChangePassword } from "../pages/ChangePassword";
import { ForgotPassword } from "../pages/ForgotPassword";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { route } from "./route.jsx";

const MyRoutes = ( { isLogin,usuario } ) => {
	return isLogin ? (
		<Routes>
			<Route path={route.default} element={<Dashboard pagina="Status" usuario={usuario} />} />
			<Route path={route.config} element={<Dashboard pagina="Config" usuario={usuario} />} />
			<Route path={route.changepassword} element={<ChangePassword usuario={usuario} />} />
			<Route path={route.register} element={<Dashboard pagina="Status" usuario={usuario} />} />
			<Route path="*" element={<p>Path not resolved</p>} />
		</Routes>
	) : (
		<Routes>
			<Route path={route.register} element={<SignUp />} />
			<Route path={route.forgotpassword} element={<ForgotPassword />} />
			<Route path="*" element={<SignIn />} />
		</Routes>
	);
};

export default MyRoutes;