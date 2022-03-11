import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { FormControl, FormHelperText, InputLabel, MenuItem, Select, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { addPost, uploadImage } from '../firebase/firebase';
import useForm from '../hooks/useForm';
import { useNavigate } from 'react-router-dom';

export const NewPost = () => {

  const initialValues = {
    titulo: "",
    descripcion : "",
    imagen : ""
  }

  const [values, errors, onChangeField, onChangeFileField, isValid ]= useForm(initialValues);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isValid()) {
      try {
        const image = await uploadImage(values.image[0]);
        console.log(image);
        const doc = {
          titulo: values.titulo,
          descripcion: values.descripcion,
          image: values.image[0].name 
        }
        console.log(doc);
        await addPost(doc);
        console.log('Post subido correctamente');
        navigate('/');
      } catch (error) {
        //TODO Muchos errores posibles por tratar.
        console.log(error)
      }
    }
  };

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Container component="main" maxWidth="lg">
      <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            alt="Logo Pinterest"
            src="/logo_pinterest.png"
            sx={{ width: 56, height: 56 }}
          />
          <Typography component="h1" variant="h5">
            Nuevo Post
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value = {values.titulo}
              onBlur = {onChangeField}
              onChange = {onChangeField}
              id="titulo"
              label="Título"
              name="titulo"
              autoFocus
              {...(errors['titulo'] && { error: true, helperText: errors['titulo'] })}
            />
              
            <TextField
              margin="normal"
              required
              fullWidth
              onBlur = {onChangeField}
              value={values.descripcion}
              onChange={onChangeField}
              name="descripcion"
              label="Descripción"
              multiline
              rows={4}
              id="descripcion"
              {...(errors['descripcion'] && { error: true, helperText: errors['descripcion'] })}
            />
            <Stack direction="row" alignItems="center" spacing={2}>
            <label htmlFor="contained-button-file">
                <Input accept="image/*" 
                id="contained-button-file" 
                multiple
                name="image"
                onChange={onChangeFileField}
                type="file" />
                <Button variant="contained" component="span">
                Subir imagen
                </Button>
                <Typography component="span" sx={{m:1}}>
                {values.image && values.image[0].name}
                </Typography>
            </label>
            </Stack>
            <Button
              type="submit"
              fullWidth
              disabled={!isValid()}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Guardar Post
            </Button>
          </Box>
        </Box>
      
      </Container>
  )
}
