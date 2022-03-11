import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';


export default function BarraInicio() {

  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  }

  const registerHandler = () => {
    navigate("/register");
  }

  return (
    <Box sx={{ flexGrow: 1 }} margin="100px" fontFamily={"BlinkMacSystemFont"}>
      <AppBar style={{ background: "#FFFFFF" }}>
        <Toolbar>
          <Avatar
            alt="Logo Pinterest"
            src="/logo_pinterest.png"
            sx={{ width: 56, height: 56 }}
          />
          <Typography
            variant="h6"
            component="div"
            color={"#E60023"}
            fontFamily="BlinkMacSystemFont"
            fontSize={"2.8em"}
            textAlign={"left"}
            sx={{ flexGrow: 1 }}
          >
            Pinterest
          </Typography>

          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "#E60023",
              color: "white",
              padding: "10px 20px",
              marginRight: "10px",
              fontFamily: "BlinkMacSystemFont",
              fontSize: "18px"
            }}
            variant="contained"
            onClick={loginHandler}
          >
            Iniciar sesión 
          </Button>
          <Button
            style={{
              borderRadius: 35,
              backgroundColor: "#EFEFEF",

              color: "black",
              padding: "10px 20px",
              fontFamily: "BlinkMacSystemFont",
              fontSize: "18px",
            }}
            variant="contained"
            onClick={registerHandler}
          >
            Registrarse
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
