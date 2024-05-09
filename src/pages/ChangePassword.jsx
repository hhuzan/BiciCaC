import React, { useContext, useState } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AutContext from "../utils/AutContex";

export const ChangePassword = () => {
	const autenticador = useContext(AutContext);
	const [success, setSuccess] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (data.get("password") !== data.get("passwordConfirm")) {
			alert("La contraseña no es igual.");
			return;
		}

		if (data.get("password").length < 8) {
			alert("El largo de la contraseña debe tener una longitud igual o mayor a 8 caracteres.");
			return;
		}

		try {
			await autenticador.changePassword(data.get("password"));
			setSuccess(true);
		} catch (error) {
			alert(error);
		}
	};

	return success ? (
		<Container>
			<Box
				sx={{
					padding: "120px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "space-evenly",
					alignItems: "center",
				}}
			>
				<ThumbUpIcon fontSize="large" color="success" />
				<Typography component="h1" variant="h5">
					{"    Su Contraseña Ha Cambiado Con Exito!!!"}
				</Typography>
			</Box>
		</Container>
	) : (
		<Container component="main" maxWidth="xs">
			<Box
				sx={{
					marginTop: 8,
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Change Password
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								fullWidth
								id="email"
								name="email"
								label="Correo electrónico"
								value={autenticador.email}
								disabled
								variant="outlined"
								InputProps={{ readOnly: true }}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								required
								fullWidth
								name="password"
								label="Contraseña"
								type="password"
								id="password"
								autoComplete="password"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								margin="normal"
								required
								fullWidth
								name="passwordConfirm"
								label="Confirmar contraseña"
								type="password"
								id="passwordConfirm"
								autoComplete="passwordConfirm"
							/>
						</Grid>
					</Grid>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Solicitar
					</Button>
				</Box>
			</Box>
		</Container>
	);
};
