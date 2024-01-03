import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react'
import ParallaxText from './ParallaxBarText';

function TopAppBar(){
    const height = window.innerHeight;
    const width = window.innerWidth;


    return(
        <div style={{ width: width}}>
            <Box
                style={{
                    height: height,
                    width: width,
                }}
            >
                <img src='https://i.imgur.com/FNQxxqV.jpg' style={{ width: width * 0.4, margin: 20}} />
                <br />
                <br />
                <section>
                    <ParallaxText baseVelocity={-5} variant={1}>El Guardatextos</ParallaxText>
                    <br />
                    <br />
                    <ParallaxText baseVelocity={5} variant={3}>Revista / Web mexicana de literatura</ParallaxText>
                </section>                    


            </Box>
            <Box 
                style={{ 
                    width: width, 
                    display: 'flex', 
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    borderTop: '1px solid lightgrey',                    
                    borderBottom: '1px solid lightgrey',
                    padding: 30
                }}
            >
                <Button variant='text' style={{ textTransform: 'none', color: 'gray' }}>
                    Pagina Principal
                </Button>
                <Button variant='text' style={{ textTransform: 'none', color: 'gray' }}>
                    Columna: El pequeño guardatextos
                </Button>
                <Button variant='text' style={{ textTransform: 'none', color: 'gray' }}>
                    Escritores Zacatecanos
                </Button>
            </Box>
        </div>

    )   
}

export default TopAppBar;