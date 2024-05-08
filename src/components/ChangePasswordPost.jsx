import React from "react";
import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Copyright } from "../components/CopyRight";

const ChangePasswordPost = ({ usuario }) => {
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
        Change Password
      </Typography>
      <Box component="form" onClick={() => navigate("/")} noValidate sx={{ mt: 3 }}>
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
              fullWidth
              name="resultado"
              value="¡Éxito! Su Contraseña ha cambiado con éxito"
              type="text"
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Volver a la página principal
        </Button>
      </Box>
    </Box>
    <Copyright sx={{ mt: 5 }} />
  </Container>
  )
};

export default ChangePasswordPost;
