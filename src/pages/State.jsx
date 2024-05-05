import { useState, useEffect } from "react";
import { getStations } from "../utils/getStations";
import { getStatus } from "../utils/getStatus";
import { Tarjeta } from "../components/Tarjeta";
import { getFavorites } from "../utils/getFavorites";
import { Box, Typography, Container, CircularProgress, IconButton } from "@mui/material";

import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { mainListItems, secondaryListItems } from "./listItems";

export const State = ({ usuario }) => {
	const [stations, setStations] = useState([]);
	const [status, setStatus] = useState([]);
	const [favorites, setFavorites] = useState([]);
	const [isLoading1, setLoading1] = useState(true);
	const [isLoading2, setLoading2] = useState(true);

	useEffect(() => {
		getStations(setStations, setLoading1);
		getStatus(setStatus, setLoading2);
		getFavorites(usuario.uid, setFavorites);
		let timer = setInterval(() => {
			getStatus(setStatus, setLoading2);
		}, 60000);
	}, []);

	useEffect(() => {
		if (stations.length != 0 && status.length != 0) {
			// Armar diccionarios aca
		}
	}, [stations, status]);

	const Body = () => {
		return isLoading1 || isLoading2 ? (
			<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
				<CircularProgress />
			</Box>
		) : (
			<Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "32px", padding: "32px" }}>
				{favorites.map((favorite) => {
					return (
						<Tarjeta
							key={favorite}
							favorite={favorite}
							stations={stations.data.stations}
							status={status.data.stations}
						/>
					);
				})}
			</Box>
		);
	};

	const drawerWidth = 240;
	const AppBar = styled(MuiAppBar, {
		shouldForwardProp: (prop) => prop !== "open",
	})(({ theme, open }) => ({
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		...(open && {
			marginLeft: drawerWidth,
			width: `calc(100% - ${drawerWidth}px)`,
			transition: theme.transitions.create(["width", "margin"], {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
		}),
	}));

	const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(({ theme, open }) => ({
		"& .MuiDrawer-paper": {
			position: "relative",
			whiteSpace: "nowrap",
			width: drawerWidth,
			transition: theme.transitions.create("width", {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen,
			}),
			boxSizing: "border-box",
			...(!open && {
				overflowX: "hidden",
				transition: theme.transitions.create("width", {
					easing: theme.transitions.easing.sharp,
					duration: theme.transitions.duration.leavingScreen,
				}),
				width: theme.spacing(7),
				[theme.breakpoints.up("sm")]: {
					width: theme.spacing(9),
				},
			}),
		},
	}));

	const [open, setOpen] = useState(true);
	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Box sx={{ display: "flex" }}>
			<AppBar position="absolute" open={open}>
				<Toolbar
					sx={{
						pr: "24px", // keep right padding when drawer closed
					}}
				>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						sx={{
							marginRight: "36px",
							...(open && { display: "none" }),
						}}
					>
						<MenuIcon />
					</IconButton>
					<Typography component="h1" variant="h4" color="inherit" noWrap sx={{ flexGrow: 3 }}>
						Status
					</Typography>
					{/* <IconButton color="inherit">
						<Badge badgeContent={4} color="secondary">
							<NotificationsIcon />
						</Badge>
					</IconButton> */}
					<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
						{usuario.email}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer variant="permanent" open={open}>
				<Toolbar
					sx={{
						display: "flex",
						alignItems: "center",
						justifyContent: "flex-end",
						px: [1],
					}}
				>
					<IconButton onClick={toggleDrawer}>
						<ChevronLeftIcon />
					</IconButton>
				</Toolbar>
				<Divider />
				<List component="nav">
					{mainListItems}
					{/* <Divider sx={{ my: 1 }} /> */}
					{/* {secondaryListItems} */}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{
					backgroundColor: (theme) =>
						theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
					flexGrow: 1,
					height: "100vh",
					overflow: "auto",
				}}
			>
				<Toolbar />
				<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
					<Grid container spacing={3}>
						<Body />
					</Grid>
				</Container>
			</Box>
		</Box>
	);
};
