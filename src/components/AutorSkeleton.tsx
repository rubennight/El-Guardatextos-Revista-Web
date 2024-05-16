import { Box, Skeleton, Typography } from '@mui/material';

function AutorSkeleton(){
    const width = window.innerWidth;
    const height = window.innerHeight;

    const cardStyle ={
        width: width * 0.4,
        height: height * 0.55,
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: 8,
        padding: 20
    }
    
    return(
        <Box style={cardStyle}>
            <Box style={{ display: 'flex', alignItems: 'center', textAlign: 'center', flexDirection: 'column'}}>
                <Skeleton variant="circular" width={width * 0.1} height={height * 0.2} />
            </Box>
            <br />
            <Box style={{ textAlign: 'center', alignItems: 'center' }}>
                <Typography variant='h5'>
                    <Skeleton width={ width * 0.2}/>
                </Typography>
                <br />
                <Typography variant='h6'>
                    <Skeleton width={width * 0.25} />
                </Typography>
                <br />
                <Typography variant='body2'>
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </Typography>                
            </Box>
        </Box>
    )
}

export default AutorSkeleton;