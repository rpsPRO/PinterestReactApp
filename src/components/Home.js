import { List, ListItem } from '@mui/material';
import React from 'react'
import { Outlet } from 'react-router-dom';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { logout } from "../firebase/firebase";

const Home = () => {

  const { loggedIn, user } = useContext(AuthContext);

  const handleLogout = () => {
    if (loggedIn) {
      logout();
    }
  };

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

        </Toolbar>
      </AppBar>
      <List>
          <ListItem button key="Cerrar sesión" onClick={handleLogout}>
            <ListItemIcon>
            
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión" />
          </ListItem>
        </List>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}

export default Home