import React, { useState } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Copyright } from "../components/CopyRight";

const auth = getAuth(appFirebase);

export const ForgotPassword = () => {
	const navigate = useNavigate();
	const [emailMessage, setEmailMessage] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		try {
			await sendPasswordResetEmail(auth, data.get("email"));
			setEmailMessage(true);
		} catch (error) {
			if (error.code === "auth/user-not-found") {
				alert("El usuario no existe");
			}
		}
	};

	return (
		<div>
			{emailMessage ? (
				<>
					<h3>El correo electrónico ha sido enviado; ¡Revisa tu correo!</h3>
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
							Forgot Password
						</Typography>
						<Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										required
										fullWidth
										id="email"
										label="Email Address"
										name="email"
										autoComplete="email"
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
