
import { useContext } from 'react';
import { Box, Typography } from '@mui/material'

import { useGenres, usePlatforms, useTags, usePublishers } from '../../games/hooks';

import { CustomAcordion } from './CustomAcordion';
import { FiltersContext } from '../../context/filters';




export const Sidebar = () => {

    const { genreQuery } = useGenres();
    const { data: genres } = genreQuery;
    
    const { platformQuery } = usePlatforms();
    const { data: platforms } = platformQuery;

    const { tagsQuery } = useTags();
    const { data: tags } = tagsQuery;

    const { publisherQuery } = usePublishers();
    const { data: publishers } = publisherQuery;

    const { selectedGenres, selectedPlatform, selectedTags, selectedPublishers,
            setSelectedGenres, setSelectedPlatform, setSelectedTags, setSelectedPublishers } = useContext( FiltersContext )

  return (
    <Box sx={{ padding: '20px',marginTop:{sm:'25px'} }}>

            <Typography variant='h5' sx={{ padding: '20px', textAlign:'center' }}>
                Filtros
            </Typography>
   
     
            <CustomAcordion 
                title={'Genres'}
                array={genres.results}
                selected={selectedGenres}
                onChanged={setSelectedGenres}
            />
            <CustomAcordion 
                title={'Platforms'}
                array={platforms.results}
                selected={selectedPlatform}
                onChanged={setSelectedPlatform}
            />
            <CustomAcordion 
                title={'Tags'}
                array={tags!.results}
                selected={selectedTags}
                onChanged={setSelectedTags}
            />
            <CustomAcordion 
                title={'Publishers'}
                array={publishers.results}
                selected={selectedPublishers}
                onChanged={setSelectedPublishers}
            />

   

    </Box>
  )
}
