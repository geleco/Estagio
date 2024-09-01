/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  Container, Box, TextField, Button, Typography, Avatar, CssBaseline, Paper, Grid, Link, Snackbar, Alert
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginPage = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const navigate = useNavigate(); // Inicialize o hook de navegação


  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulação de lógica de autenticação
    setSnackbarMessage('Login bem-sucedido!');
    setSnackbarSeverity('success');
    setOpenSnackbar(true);
  };

  const handleGoogleLogin = () => {
    // Simulação de login com Google
    setSnackbarMessage('Login com Google não implementado.');
    setSnackbarSeverity('info');
    setOpenSnackbar(true);
  };

  const handleForgotPassword = () => {
    // Simulação de recuperação de senha
    setSnackbarMessage('Link de recuperação de senha enviado!');
    setSnackbarSeverity('info');
    setOpenSnackbar(true);
  };

  const handleCreateAccount = () => {
    // Simulação de criação de conta
    setSnackbarMessage('Criar conta não implementado.');
    setSnackbarSeverity('info');
    setOpenSnackbar(true);
    navigate('/create-user'); // Use navigate para redirecionar
  };


  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
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
        <Paper elevation={6} sx={{ padding: 4 }}>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={handleGoogleLogin}
              sx={{ mt: 1, mb: 2 }}
            >
              Login with Google
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2" onClick={handleForgotPassword}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={handleCreateAccount}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity} sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default LoginPage;
