
import { useContext } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { useGenres, usePlatforms, useTags, usePublishers } from '../../games/hooks';

import { CustomAcordion } from './CustomAcordion';
import { FiltersContext } from '../../context/filters';
import { UiContext } from '../../context/ui';




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
            setSelectedGenres, setSelectedPlatform, setSelectedTags, setSelectedPublishers, filtersClean } = useContext( FiltersContext );

    const { order, orderBy} = useContext( UiContext );


    const handleOrderChange = (event: SelectChangeEvent<string>) => {
        orderBy(event.target.value);
    };

  return (
    <Box sx={{ padding: '20px',marginTop:{sm:'25px'} }}>

            <Typography variant='h5' sx={{ padding: '20px', display:'flex', justifyContent:'center', alignItems:'center', gap:'5px'}}>
                Filtros
                {
                    (selectedGenres.length >= 1 || selectedPlatform.length >=1 || selectedPublishers.length >=1 || selectedTags.length >=1 ) 
                     && 
                        <Box sx={{ marginTop:'8px'}}
                            onClick={filtersClean}
                            >

                            <HighlightOffIcon sx={{ cursor:'pointer' }}/>
                        </Box>
                }
            </Typography>

            <FormControl sx={{ width:'100%', marginBottom:'10px'}} size="small" variant="standard">
                <InputLabel id="demo-select-small" size='small'>Order</InputLabel>
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={order}
                        label="Order"
                        onChange={handleOrderChange}
                    >
                        <MenuItem value={'name'}>Name A-Z </MenuItem>
                        <MenuItem value={'-name'}>Name Z-A </MenuItem>
                        <MenuItem value={'released'}>Released -+</MenuItem>
                        <MenuItem value={'-released'}>Released +-</MenuItem>
                        <MenuItem value={''}>Default</MenuItem>
                    </Select>
            </FormControl>


   
     
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
