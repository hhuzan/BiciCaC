import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import PasswordIcon from "@mui/icons-material/Password";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, signOut } from "firebase/auth";

export const mainListItems = (
	<React.Fragment>
		<ListItemButton>
			<ListItemIcon>
				<DashboardIcon />
			</ListItemIcon>
			<ListItemText primary="Status" />
		</ListItemButton>
		<ListItemButton href="/config">
			<ListItemIcon>
				<SettingsIcon />
			</ListItemIcon>
			<ListItemText primary="Config" />
		</ListItemButton>
		<ListItemButton href="/change-password">
			<ListItemIcon>
				<PasswordIcon />
			</ListItemIcon>
			<ListItemText primary="Change Pass." />
		</ListItemButton>
		<ListItemButton onClick={() => signOut(getAuth(appFirebase))}>
			<ListItemIcon>
				<LogoutIcon />
			</ListItemIcon>
			<ListItemText primary="Logout" />
		</ListItemButton>
	</React.Fragment>
);

export const secondaryListItems = (
	<React.Fragment>
		<ListSubheader component="div" inset>
			Saved reports
		</ListSubheader>
		<ListItemButton>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Current month" />
		</ListItemButton>
	</React.Fragment>
);
