import { Avatar, Box, Typography } from '@mui/material'

function AutorTarjeta({ id, nombre, apellidos, url, lNacimiento, aNacimiento, estudiosProfesion, descripcion  } : Autor) {

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
            <Box style={{ textAlign: 'center', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <Avatar src={url} sx={{ width: width * 0.1, height: height * 0.2}} />
            </Box>
            <br />
            <Box>
                <Typography variant='h5' fontFamily={'Montserrat'}>
                    {nombre} {apellidos}
                </Typography>
                <br />
                <Typography variant='h6' fontFamily={'Montserrat'}>
                    ({lNacimiento}, {aNacimiento})
                </Typography>
                <br />
                <Typography variant='body2' textAlign={'justify'} fontFamily={'Montserrat'}>
                    {estudiosProfesion}
                <br />
                <br />
                    {descripcion}
                </Typography>
            </Box>
        </Box>
    )
}

export default AutorTarjeta;