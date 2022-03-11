import { IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const Gallery = () => {
  const navigate = useNavigate();

  const handleAddNewPost = () => {
    navigate("/nueva");
  };

  return (
    <>
      <Typography
        variant="h6"
        component="div"
        color={"rgb(199,191,32)"}
        fontFamily="BlinkMacSystemFont"
        fontSize={"2.3em"}
        position="absolute"
        top="11.5em"
        sx={{ flexGrow: 1 }}
      >
        Añadir Post
      </Typography>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleAddNewPost}
        style={{ position: "absolute", left: "2.5em", top: "20em" }}
        color="inherit"
      >
        <AddCircleOutlineIcon
          style={{ backgroundColor: "white", fontSize: 70 }}
        />
      </IconButton>
    </>
  );
};
