import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { appFirebase } from '../utils/conexionAPIFirebase';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

const auth = getAuth(appFirebase);

const defaultTheme = createTheme();

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export const ForgotPassword = () => {

  const navigate = useNavigate()
  const [emailMessage, setEmailMessage] = useState(false);

  const handleSubmit = async(event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    try {
      await sendPasswordResetEmail(auth,data.get('email'));
      setEmailMessage(true);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("El usuario no existe");
      }
    }
  };

  return (
    <div>
      { emailMessage ? (
        <>
          <h3>El correo electrónico ha sido enviado; ¡Revisa tu correo!</h3>
          <button onClick={() => navigate("/")}>
            Ir a la página de inicio de sesión
          </button>
        </>
        ) : (
          <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
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
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Solicitar
                  </Button>
                </Box>
              </Box>
              <Copyright sx={{ mt: 5 }} />
            </Container>
          </ThemeProvider>
        )
      }
    </div>
  );
}