import React from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container, FormControlLabel, Checkbox, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../components/CopyRight";
import manejoErrores from "../utils/manejoErrores";
import validarCorreoElectronico from "../utils/validarCorreoElectronico";

export const SignIn = ({ autenticador }) => {
	const navigate = useNavigate();
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (!validarCorreoElectronico(data.get("email"))) {
			alert("No es una dirreción de correo válida.");
			return;
		}

		if (data.get("password").length < 8) {
			alert("El largo de la contraseña debe tener una longitud igual o mayor a 8 caracteres.");
			return;
		}

		try {
			await autenticador.login(data.get("email"), data.get("password"));
		} catch (error) {
			const descripcionError = manejoErrores(error.code, error.message);
			alert(descripcionError);
		}
	};

	return (
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
					Iniciar sesión
				</Typography>
				<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
					<TextField
						margin="normal"
						required
						fullWidth
						id="email"
						label="Correo electrónico"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						margin="normal"
						required
						fullWidth
						name="password"
						label="Contraseña"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
					<FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Recordame" />
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Iniciar sesión
					</Button>
					<Grid container>
						<Grid item xs>
							<Link onClick={() => navigate("/forgot-password")} variant="body2">
								¿Olvido la contraseña?
							</Link>
						</Grid>
						<Grid item>
							<Link onClick={() => navigate("/SignUp")} variant="body2">
								¿No tiene cuenta? Registrese
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 8, mb: 4 }} />
		</Container>
	);
};
