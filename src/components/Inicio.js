import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import "./Inicio.css";
import BarraInicio from "./BarraInicio";
import Slideshow from './Slideshow';

function Inicio() {

  return (
    <div>
      <Container maxWidth="xl" bgcolor="#FFF5EE">
        <Box
          sx={{
            height: "100vh",
            textAlign: "center",
          }}
        >
          <BarraInicio />
          <Slideshow />         
        </Box>
      </Container>
    </div>
  );
}

export default Inicio;
