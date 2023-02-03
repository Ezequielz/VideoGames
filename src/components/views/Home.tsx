
import { Box, Typography } from '@mui/material';
import { FC } from 'react';
import { ListView } from '../../games/views/ListView';



export const Home: FC = () => {
  
  return (
        <Box 
            className="container mt-3" 
            sx={{ padding: '60px'}}
        >
            
            <Typography variant="h1" >
                Video Juegos!
             </Typography >
            <Typography variant='subtitle1'>
                 Todos los detalles de los mejores videojuegos
            </Typography>

            <ListView />
        
        </Box>
  )
}