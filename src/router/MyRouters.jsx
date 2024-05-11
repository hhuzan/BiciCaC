import { Routes, Route } from "react-router-dom";
import { ChangePassword } from "../pages/ChangePassword";
import { ForgotPassword } from "../pages/ForgotPassword";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { Status } from "../pages/Status";
import { Config } from "../pages/Config";
import { route } from "./route.jsx";

const MyRoutes = ({ isLoggedIn }) => {
	return isLoggedIn ? (
		<Routes>
			<Route path={route.default} element={<Dashboard />}>
				<Route index element={<Status />} />
				<Route path={route.config} element={<Config />} />
				<Route path={route.changepassword} element={<ChangePassword />} />
				<Route path={route.register} element={<Status />} />
			</Route>
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
