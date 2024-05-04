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
import { useSearchParams, useNavigate } from "react-router-dom"
import { appFirebase } from '../utils/conexionAPIFirebase';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

const defaultFormFields = {
  password: '',
  confirmPassword: '',
}

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

export const ResetPassword = ({ usuario }) => {

  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [successMessage, setSuccessMessage] = useState(false)
//  const [formFields, setFormFields] = useState(defaultFormFields)

  let oobCode = searchParams.get('oobCode')
  alert(oobCode)


  const handleSubmit = async(event) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('password') !== data.get('passwordConfirm')) {
      alert("La contraseña no es igual.");
      return;
    }

    try {
      await confirmPasswordReset(auth.currentUser, data.get('password'));
      setSuccessMessage(true);
    } catch (error) {
      alert (error)
      alert(error.message);
      if (error.code === "auth/invalid-action-code") {
        alert("Algo estuvo mal. Probar nuevamente.");
      }
      
    }
  };

  return (
    <div>
      {successMessage ? (
        <div>
          <h3>¡Éxito! Su Contraseña ha cambiado con éxito</h3>
          <button onClick={() => navigate("/")}>
            Ir a la página de inicio de sesión
          </button>
        </div>
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
                  Reset Password
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
                          value={ usuario.email }
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
