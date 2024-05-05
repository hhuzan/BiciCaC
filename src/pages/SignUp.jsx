import React from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Copyright } from "../components/CopyRight";
import manejoErrores from "../utils/manejoErrores";
import validarCorreoElectronico from "../utils/validarCorreoElectronico";

const auth = getAuth(appFirebase);

export const SignUp = () => {
	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
				
		if (! validarCorreoElectronico(data.get("email"))) {
			alert("No es una dirreción de correo válida.");
			return;
		}

		if ((data.get("password")).length < 8 ) {
			alert("El largo de la contraseña debe ser mayor o igual a 8 caracteres.");
			return;
		}

		try {
			await createUserWithEmailAndPassword(auth, data.get("email"), data.get("password"));
		} catch (error) {
			const descripcionError = manejoErrores(error.code,error.message);
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
					Sign up
				</Typography>
				<Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="new-password"
							/>
						</Grid>
					</Grid>
					<Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link href="/SignIn" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
			<Copyright sx={{ mt: 5 }} />
		</Container>
	);
};
