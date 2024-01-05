import { Box, Typography } from '@mui/material'
import React from 'react'

interface AutorIntroCard{
    id: string;
    nombre: string;
    apellidos: string,
    aNacimiento: number; 
    lNacimiento: string;
    estudiosProfesion: string;
    url: string;
}



function AutorCarta({id, nombre, apellidos, aNacimiento, lNacimiento, url} : AutorIntroCard) {
    const width = window.innerWidth

    const height = window.innerHeight

    const cardStyle ={
        width: width * 0.4,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        overflow: 'hidden',
        '&:hover': {
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        },
        padding: 20
    }

    return(
        <Box style={cardStyle} >
            <Box>
                <img src={url} />
            </Box>
            <br />
            <Box>
                <Typography variant='h4'>
                    {nombre} {apellidos}
                </Typography>
                <br />

            </Box>
        </Box>
    )
}

export default AutorCarta;