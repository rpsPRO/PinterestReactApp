import { IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LogoutIcon from "@mui/icons-material/Logout";
import { useState, useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import { logout } from "../firebase/firebase";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


const Home = () => {
  const { loggedIn, user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    if (loggedIn) {
      logout();
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAddNewPost = () => {
    navigate("/nueva");
  }

  return (
    <Box sx={{ flexGrow: 1 }} margin="100px" fontFamily={"BlinkMacSystemFont"}>
      <AppBar style={{ background: "#FFFFFF", fontFamily:"BlinkMacSystemFont"}}>
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

          {loggedIn && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="error"
                sx={{marginRight:"20px"}}
              >
                <AccountCircleIcon style= {{ fontSize: 50 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                <AccountCircleIcon sx={{marginRight:"10px"}} style= {{ fontSize: 30 }}/> {user.displayName || "Anónimo"}
                </MenuItem>
                <MenuItem onClick={handleLogout}><LogoutIcon sx={{marginRight:"10px"}} style= {{ fontSize: 30 }}/>Cerrar sesión</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      
      <Box  sx={{ flexGrow: 1, p: 3, position:"relative"}}>       
        <Outlet />
      </Box>
    </Box>
  );
};

export default Home;
