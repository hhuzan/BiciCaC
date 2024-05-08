import React, { useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { appFirebase } from "../utils/conexionAPIFirebase";
import { getAuth, updatePassword } from "firebase/auth";
import { Copyright } from "../components/CopyRight";
import manejoErrores from "../utils/manejoErrores";

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

    if (data.get("password").length < 8) {
      alert(
        "El largo de la contraseña debe tener una longitud igual o mayor a 8 caracteres."
      );
      return;
    }

    try {
      await updatePassword(auth.currentUser, data.get("password"));
      setSuccessMessage(true);
    } catch (error) {
      const descripcionError = manejoErrores(error.code, error.message);
      alert(descripcionError);
    }
  };

  return successMessage ? (
    <>
      <h3>¡Éxito! Su Contraseña ha cambiado con éxito</h3>
      <button onClick={() => navigate("/")}>
        Ir a la página de inicio de sesión
      </button>
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
                label="Correo electrónico"
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Solicitar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => navigate("/")} variant="body2">
                Volver a la página principal
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};
