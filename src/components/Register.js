import React, { useState } from 'react'
import { useContext } from 'react';
import { AuthContext } from "../auth/AuthProvider";
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
import { register, updateName } from '../firebase/firebase';

const Register = () => {

  const { setUser } = useContext(AuthContext);
  const [password, setPassword] = useState(" ");
  const [errorPassword, setErrorPassword] = useState(false);
 
  const handleSubmit = (event) => {

    event.preventDefault();

    const data = new FormData(event.currentTarget);

    register(data.get('email'), data.get('password'))
    .then(
      (userCredentials) => {
        setUser(userCredentials.user);
        updateName({displayName: `${data.get('nombre')} ${data.get('apellidos')}`})
        .then(()=>{})
        .catch((err)=>{console.log(err)})
      }
    )
    .catch(
      (err) => {
        console.log(err);
      }
    )

  };

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
        onSubmit={handleSubmit}
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
        <Typography
          component="h2"
          variant="h5"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Encuentra nuevas ideas para probar
        </Typography>
        <TextField
          margin="normal"
          required
          sx={{ width: "70%" }}
          id="nombre"
          label="Nombre"
          name="nombre"
          autoComplete="nombre"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          sx={{ width: "70%" }}
          id="apellidos"
          label="Apellidos"
          name="apellidos"
          autoComplete="apellidos"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          sx={{ width: "70%" }}
          type="email"
          id="email"
          label="Correo electrónico"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          onChange={(e) => {
            if(password.length < 5){
              console.log("menos que 6 --> "+password);
              setPassword(e.target.value);
              setErrorPassword(true);
            } else {
              console.log("más que 6 --> "+password);
              setPassword(e.target.value);
              setErrorPassword(false);
            }
          }}
          sx={{ width: "70%" }}
          name="password"
          label="Contraseña"
          type="password"
          error= {errorPassword}
          id="outlined-error-helper-text"
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
          Registrarse
        </Button>
        
        
        <Link
          component={RouterLink}
          underline="none"
          to="/login"
          variant="body2"
          marginBottom={"20px"}
          sx={{ color: "black", fontSize: "1.5em" }}
        >
          ¿Ya eres miembro? Inicia Sesión
        </Link>
      </Box> 
    </Container>
  )
}

export default Register