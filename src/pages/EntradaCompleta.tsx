import React from 'react'
import { Box, Button, Divider, IconButton, InputBase, Link, Paper, Typography } from '@mui/material';
import { ArrowBack, Search } from '@mui/icons-material';

function EntradaCompleta(){
    const width = window.innerWidth;

    return(
        <>
            <Box 
                style={{ 
                    width: width, 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    marginTop: 0,                    
                    borderBottom: '1px solid lightgrey',
                    padding: 15
                }}
            >
                <img src='https://i.imgur.com/FNQxxqV.jpg' style={{ width: width * 0.06 }} />
                <Button variant='text' href='/' style={{ textTransform: 'none', color: 'gray' }}>
                    Pagina Principal
                </Button>
                <Button variant='text' style={{ textTransform: 'none', color: 'gray' }}>
                    Columna: El pequeño guardatextos
                </Button>
                <Button variant='text' style={{ textTransform: 'none', color: 'gray' }}>
                    Escritores Zacatecanos
                </Button>
                <Paper
                  component="form"
                  sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 300, borderRadius: 10 }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscar en el guardatextos"
                    inputProps={{ 'Montserrat': 'buscar en el guarda textos' }}
                  />
                  <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />                  
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <Search />
                  </IconButton>
                </Paper>
            </Box>
        </>
    )
}

export default EntradaCompleta;