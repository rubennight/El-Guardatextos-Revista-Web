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
                    borderBottom: '1px solid lightgrey',
                }}
            >
                <Box>
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

                <Box style={{ 
                    width: width, 
                    display: 'flex', 
                    flexDirection: 'row',
                    }}>
                    <Button variant='text' style={{ textTransform: 'none' }}>
                        Pagina Principal
                    </Button>
                </Box>
            </Box>
        </div>

    )   
}

export default TopAppBar;