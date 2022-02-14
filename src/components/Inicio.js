import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './Inicio.css';
import { textAlign } from '@mui/system';

function Inicio() {

    return (
        
        <Container maxWidth="xl" >
            <Box sx={{ bgcolor: '#FFF5EE', height: '100vh', textAlign: "center"}} >
                    <Typography
                        component="h1"
                        variant="h1"
                        align="center"
                        color="text.primary"
                        fontFamily={'Playfair Display'}
                        fontSize={"6em"}
                        bgcolor="rgb(212, 148, 146)"
                    >
                        Pinterest
                    </Typography>
            </Box>
        </Container>
        
    )
}

export default Inicio