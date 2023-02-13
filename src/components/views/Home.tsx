
import { Box, Grid, IconButton } from '@mui/material';

import { FC, useState } from 'react';
import { ListView } from '../../games/views/ListView';
import { GamesLayout } from '../Layouts';
import { Sidebar } from '../ui';
import MenuIcon from '@mui/icons-material/Menu';


export const Home: FC = () => {


const [selectedGenres, setSelectedGenres] = useState<string[]>([])

const onGenreChanged = (genreName: string) => {
    ( selectedGenres.includes( genreName ) )
    ? setSelectedGenres( selectedGenres.filter( genre => genre !== genreName ) )
    : setSelectedGenres([...selectedGenres, genreName]);
}

const spaceToFilters = '250px'
  
  return (
      <GamesLayout>
        <Box sx={{ display:'flex', padding:'80px ' }}>

            <Box 
                sx={{
                    width: `${spaceToFilters}`,
                    padding: '20px'
                }}
            >

                <Sidebar 
                    
                    selectedGenres={selectedGenres} 
                    onChange={ (genreName) => onGenreChanged(genreName) }
                />
            </Box>

            <Box
                sx={{ 
                    width: `calc( 100vw - ${ spaceToFilters } )`,
                    padding: '20px'
                }}
            >
                <ListView />
            </Box>
        </Box>
   

      </GamesLayout>
  )
}