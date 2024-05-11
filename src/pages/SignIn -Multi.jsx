import React, { useContext, useState } from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  Checkbox,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../components/CopyRight";
import validarCorreoElectronico from "../utils/validarCorreoElectronico";
import AutContext from "../utils/AutContex";
import { AlertDialog } from "../components/AlertDialog";

export const SignIn = () => {
  const navigate = useNavigate();
  const autenticador = useContext(AutContext);

  const [openDialogErrorEmail, setOpenDialogErrorEmail] = useState(false);
  const [openDialogErrorPassword, setOpenDialogErrorPassword] = useState(false);
  const [openDialogAutenticador, setOpenDialogAutenticador] = useState(false);
  const [dialogContentAutenticador, setDialogContentAutenticador] = useState("");

  const handleCloseDialogErrorEmail = () => {
    setOpenDialogErrorEmail(false);
  };

  const handleCloseDialogErrorPassword = () => {
    setOpenDialogErrorPassword(false);
  };

  const handleCloseDialogAutenticador = () => {
    setOpenDialogAutenticador(false);
  };

  const dialogErrorEmailActions = [
    { label: "Reintentar", handler: handleCloseDialogErrorEmail },
  ];

  const dialogErrorPasswordActions = [
    { label: "Reintentar", handler: handleCloseDialogErrorPassword },
  ];

  const dialogAutenticadorActions = [
    { label: "Reintentar", handler: handleCloseDialogAutenticador },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!validarCorreoElectronico(data.get("email"))) {
      setOpenDialogErrorEmail(true);
      return;
    }

    if (data.get("password").length < 8) {
      setOpenDialogErrorPassword(true);
      return;
    }

    const response = await autenticador.login(
      data.get("email"),
      data.get("password")
    );

    setDialogContentAutenticador(response);
    setOpenDialogAutenticador(true);
  };

  return (
    <>
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
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Correo electrónico"
              name="email"
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
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordame"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Iniciar sesión
            </Button>
            <Grid container>
              <Grid item xs>
                <Link
                  onClick={() => navigate("/forgot-password")}
                  variant="body2"
                >
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

      <AlertDialog
        open={openDialogErrorEmail}
        handleClose={handleCloseDialogErrorEmail}
        title="Login Error"
        content="No es una dirección de correo válida."
        actions={dialogErrorEmailActions}
      />

      <AlertDialog
        open={openDialogErrorPassword}
        handleClose={handleCloseDialogErrorPassword}
        title="Login Error"
        content="El largo de la contraseña debe tener una longitud igual o mayor a 8 caracteres."
        actions={dialogErrorPasswordActions}
      />

      <AlertDialog
        open={openDialogAutenticador}
        handleClose={handleCloseDialogAutenticador}
        title="Login Error"
        content={dialogContentAutenticador}
        actions={dialogAutenticadorActions}
      />
    </>
  );
};
