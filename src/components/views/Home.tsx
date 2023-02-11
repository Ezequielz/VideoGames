
import { Box, Grid, Typography } from '@mui/material';
import { FC, useState } from 'react';
import { ListView } from '../../games/views/ListView';
import { GamesLayout } from '../Layouts';
import { Sidebar } from '../ui';



export const Home: FC = () => {

    const [selectedGenres, setSelectedGenres] = useState<string[]>([])

    const onGenreChanged = (genreName: string) => {
        ( selectedGenres.includes( genreName ) )
        ? setSelectedGenres( selectedGenres.filter( genre => genre !== genreName ) )
        : setSelectedGenres([...selectedGenres, genreName]);
    }
  
  return (
      <GamesLayout>

        <Grid 
            container
            className="container mt-3" 
            sx={{ display: 'flex', padding: '60px 0'}}
        >
   
            <Grid item xs={2}>
                <Sidebar 
                    
                    selectedGenres={selectedGenres} 
                    onChange={ (genreName) => onGenreChanged(genreName) }
                />

            </Grid>

            <Grid item xs={10}>

                <Box
                    sx={{ padding: '20px'}}
                >

                    {/* <Typography variant="h1" >
                        Video Juegos!
                    </Typography >
                    <Typography variant='subtitle1'>
                        Todos los detalles de los mejores videojuegos
                    </Typography> */}

                    <ListView />
                </Box>
            </Grid>
     

        
        </Grid>
      </GamesLayout>
  )
}