import React, { useContext, useState } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container, FormControlLabel, Checkbox, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../components/CopyRight";
import validarCorreoElectronico from "../utils/validarCorreoElectronico";
import AutContext from "../utils/AutContex";
import { AlertDialog } from "../components/AlertDialog";

export const SignIn = () => {
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
      setDialogContent("Dirección de Correo No Válida.");
      setDialogActionLabel("Reintentar");
      setOpenDialog(true);
      return;
    }

    if (data.get("password").length < 8) {
      setDialogContent("La Contraseña debe tener 8 o más Caracteres.");
      setDialogActionLabel("Reintentar");
      setOpenDialog(true);
      return;
    }

    try {
      await autenticador.login(data.get("email"), data.get("password"));
    } catch (error) {
      setDialogContent(error);
      setDialogActionLabel("Reintentar");
      setOpenDialog(true);
    }
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField margin="normal" required fullWidth id="email" label="Correo electrónico" name="email" autoFocus />
            <TextField margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" />
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

      <AlertDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title="Iniciar sesión"
        content={dialogContent}
        label={dialogActionLabel}
      />
    </>
  );
};
