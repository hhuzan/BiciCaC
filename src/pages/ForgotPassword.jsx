import React, { useContext, useState } from "react";
import { Avatar, Button, TextField, Grid, Box, Typography, Container, Link } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";
import { Copyright } from "../components/CopyRight";
import validarCorreoElectronico from "../utils/validarCorreoElectronico";
import AutContext from "../utils/AutContex";
import { AlertDialog } from "../components/AlertDialog";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const autenticador = useContext(AutContext);
  const [success, setSuccess] = useState(false);

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

    try {
      await autenticador.passwordReset(data.get("email"));
      setSuccess(true);
    } catch (error) {
      setDialogContent(error);
      setDialogActionLabel("Reintentar");
      setOpenDialog(true);
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
          {"    El correo electrónico ha sido enviado; ¡Revisa tu correo!"}
        </Typography>
        <Button onClick={() => navigate("/")} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
          Ir a la página de inicio de sesión
        </Button>
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
          Olvido su contraseña
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField required fullWidth id="email" label="Correo electrónico" name="email" autoComplete="email" />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Solicitar
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link onClick={() => navigate("/")} variant="body2">
                ¿Recordó la contraseña? Iniciar sesión
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
      <AlertDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title="Olvido su contraseña"
        content={dialogContent}
        label={dialogActionLabel}
      />
    </Container>
  );
};
