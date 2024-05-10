import React, { useContext, useState } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../components/CopyRight";
import validarCorreoElectronico from "../utils/validarCorreoElectronico";
import AutContext from "../utils/AutContex";
import { AlertDialog } from "../components/AlertDialog";

export const SignUp = () => {
  const navigate = useNavigate();
  const autenticador = useContext(AutContext);

  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [dialogActionLabel, setDialogActionLabel] = useState("");

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!validarCorreoElectronico(data.get("email"))) {
      setDialogContent("No es una dirección de correo válida.");
      setDialogActionLabel("Reintentar");
      setOpenDialog(true);
      return;
    }

    if (data.get("password").length < 8) {
      setDialogContent("El largo de la contraseña debe tener una longitud igual o mayor a 8 caracteres.");
      setDialogActionLabel("Reintentar");
      setOpenDialog(true);
      return;
    }

    try {
      await autenticador.register(data.get("email"), data.get("password"));
    } catch (error) {
      setDialogContent(response.mensaje);
      setDialogActionLabel("Reintentar");
      setOpenDialog(true);
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
          Registrate
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Correo electrónico" name="email" autoFocus />
            </Grid>
            <Grid item xs={12}>
              <TextField required fullWidth name="password" label="Contraseña" type="password" id="password" />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Registrate
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => navigate("/")} variant="body2">
                ¿Ya tiene una cuenta? Iniciar sesión
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
      <AlertDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title="Registrate"
        content={dialogContent}
        label={dialogActionLabel}
      />{" "}
    </Container>
  );
};
