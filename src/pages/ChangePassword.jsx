import React, { useState } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, updatePassword } from "firebase/auth";
import { Copyright } from "../components/CopyRight";

const auth = getAuth(appFirebase);

export const ChangePassword = ({ usuario }) => {
	const navigate = useNavigate();
	const [successMessage, setSuccessMessage] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);

		if (data.get("password") !== data.get("passwordConfirm")) {
			alert("La contraseña no es igual.");
			return;
		}

		try {
			await updatePassword(auth.currentUser, data.get("password"));
			setSuccessMessage(true);
		} catch (error) {
			alert(error);
			alert(error.message);
			if (error.code === "auth/invalid-action-code") {
				alert("Algo estuvo mal. Probar nuevamente.");
			}
		}
	};

	return (
		<div>
			{successMessage ? (
				<>
					<h3>¡Éxito! Su Contraseña ha cambiado con éxito</h3>
					<button onClick={() => navigate("/")}>Ir a la página de inicio de sesión</button>
				</>
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
										label="Email Address"
										value={usuario.email}
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
					<Copyright sx={{ mt: 5 }} />
				</Container>
			)}
		</div>
	);
};
