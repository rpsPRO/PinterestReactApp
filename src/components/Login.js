import {
  Avatar,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { useContext } from 'react';
import { AuthContext } from "../auth/AuthProvider";
import { login, singInGoogle, singInFacebook } from '../firebase/firebase';

export const Login = () => {

  const { setUser } = useContext(AuthContext);

  const handleSubmit = (event) => {

    event.preventDefault();
    const data = new FormData(event.currentTarget);

    login(data.get('email'), data.get('password')).then(
      ( userCredentials )=> {
         setUser(userCredentials.user);
      }
    ).catch(
      (err)=> {
        console.log(err);
      }
    );

  };

  const handlerSingInFacebook = () => {
    singInFacebook();
  }

  const handlerSingInGoogle = () => {
    singInGoogle();
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        margin="100px"
        fontFamily={"BlinkMacSystemFont"}
        border="1px solid black"
        bgcolor={"white"}
        borderRadius={"32px"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "55%",
        }}
      >
        <Avatar
          alt="Logo Pinterest"
          src="/logo_pinterest.png"
          sx={{ width: 60, height: 60, marginTop: "25px" }}
        />

        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Bienvenido a Pinterest
        </Typography>
        <TextField
          margin="normal"
          required
          sx={{ width: "70%" }}
          id="email"
          label="Correo electrónico"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          sx={{ width: "70%" }}
          name="password"
          label="Contraseña"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Link
          component={RouterLink}
          underline="hover"
          to="/reset"
          variant="body2"
          sx={{ color: "black", fontSize: "1.5em" }}
        >
          ¿Olvidaste tu contraseña?
        </Link>
        <Button
          type="submit"
          style={{
            width: "70%",
            borderRadius: 35,
            backgroundColor: "#E60023",
            color: "white",
            padding: "10px 20px",
            marginTop: "10px",
            fontFamily: "BlinkMacSystemFont",
            fontSize: "18px",
          }}
          variant="contained"
        >
          Iniciar sesión
        </Button>
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          o
        </Typography>
        <Button
        onClick={handlerSingInFacebook}
          style={{
            width: "70%",
            borderRadius: 35,
            backgroundColor:"rgb(37, 150, 190)",
            color: "white",
            fontFamily: "BlinkMacSystemFont",
            fontSize: "18px",
            marginBottom: "20px"
          }}
          variant="contained"
        >
          Iniciar sesión con Facebook
        </Button>
        <Button
          onClick={handlerSingInGoogle}
          style={{
            width: "70%",
            borderRadius: 35,
            backgroundColor:"rgba(255,244,161,255)",
            color:"black",
            fontFamily: "BlinkMacSystemFont",
            fontSize: "18px",
            marginBottom: "20px"
          }}
          variant="contained"
        >
          Iniciar sesión con Google
        </Button>
        <Link
          component={RouterLink}
          underline="none"
          to="/register"
          variant="body2"
          marginBottom={"20px"}
          sx={{ color: "black", fontSize: "1.5em" }}
        >
          ¿Aún no estás en Pinterest? Regístrate
        </Link>
      </Box> 
    </Container>
  );
};
