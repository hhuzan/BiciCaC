import React, { useContext } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import { useNavigate, useLocation } from "react-router-dom";
import AutContext from "../utils/AutContex";

export const MainListItems = () => {
	const autenticador = useContext(AutContext);
	const navigate = useNavigate();
	let location = useLocation();
	return (
		<>
			<ListItemButton selected={location.pathname === "/"} onClick={() => navigate("/")}>
				<ListItemIcon>
					<DashboardIcon />
				</ListItemIcon>
				<ListItemText primary="Status" />
			</ListItemButton>
			<ListItemButton selected={location.pathname === "/config"} onClick={() => navigate("/config")}>
				<ListItemIcon>
					<SettingsIcon />
				</ListItemIcon>
				<ListItemText primary="Config" />
			</ListItemButton>
			<ListItemButton selected={location.pathname === "/change-password"} onClick={() => navigate("/change-password")}>
				<ListItemIcon>
					<PasswordIcon />
				</ListItemIcon>
				<ListItemText primary="Change Pass." />
			</ListItemButton>
			<ListItemButton onClick={() => autenticador.signOut()}>
				<ListItemIcon>
					<LogoutIcon />
				</ListItemIcon>
				<ListItemText primary="Logout" />
			</ListItemButton>
		</>
	);
};
