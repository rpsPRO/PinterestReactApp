import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { getImageUrl, getPosts, deletePostById } from "../firebase/firebase";
import { Box } from "@mui/system";

export const Gallery = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts(async (snapshot) => {
      const newPostsPromise = snapshot.docs.map(async (doc) => {
        const imageName = doc.data().image;
        const url = await getImageUrl(imageName);
        return { id: doc.id, ...doc.data(), image: url };
      });
      const list = await Promise.all(newPostsPromise);
      setPosts(list);
    });
  }, []);

  const navigate = useNavigate();

  const handleAddNewPost = () => {
    navigate("/nueva");
  };

  const deletePost = (id) => {
    try {
      console.log("Borrar post", id);
      deletePostById(id);
    } catch (error) {
      console.log("Error al borrar el post");
    }
  };

  const updatePost = (id) => {
      
  }

  return (
    <Box>
      <Container sx={{ py: 2 }} maxWidth="md">
        <Grid container spacing={4}>
          {posts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card
                sx={{ height: "200", display: "flex", flexDirection: "column" }}
              >
                <CardMedia
                  component="img"
                  image={
                    post.image && post.image !== ""
                      ? post.image
                      : "https://www.iesvirgendelcarmen.com/wp-content/uploads/2021/01/Museo-Ciencias-1-1024x768.jpg"
                  }
                  alt={post.name}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {post.titulo}
                  </Typography>
                  <Typography>{post.description}</Typography>
                </CardContent>
                <CardActions>
                  <Box sx={{ flexGrow: 1 }}></Box>
                  <IconButton 
                  aria-label="edit"
                  onClick={() => updatePost(post.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deletePost(post.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
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
    </Box>
  );
};
