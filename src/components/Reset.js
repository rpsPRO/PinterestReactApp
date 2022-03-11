import React from 'react'
import {
  Avatar,
  Button,
  Container,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useContext, useState } from 'react';
import { AuthContext } from "../auth/AuthProvider";
import { Box } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import { resetPassword } from '../firebase/firebase';

const Reset = () => {

  const { setUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    resetPassword(data.get('email')).then(
      ()=>{
        setOpen(true);
        setUser(null);
      }
    );
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
          Recupera tu contraseña
        </Typography>
        <Typography
          component="h2"
          variant="h7"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Introduce tu correo electrónico donde te enviaremos el formulario de reseteo de contraseña
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
          Recuperar contraseña
        </Button>
        <Link
          component={RouterLink}
          underline="hover"
          to="/login"
          variant="body2"
          sx={{ color: "black", fontSize: "1.5em", margin: "20px"}}
        >
          Volver al Login
        </Link>
      </Box> 
    </Container>
  )
}

export default Reset;