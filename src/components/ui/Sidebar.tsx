
import { FC } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { LoadingIcon } from './LoadingIcon';
import { useGenres, usePlatforms, useTags, usePublishers } from '../../games/hooks';
import Divider from '@mui/material/Divider/Divider';
import { CustomAcordion } from './CustomAcordion';



interface Props {
    selectedGenres: string[];
    onGenreChange: ( genreSlug:string ) => void;
    selectedPlatform: string[];
    onPlatformChanged: ( platformID:string ) => void;
    selectedTags: string[];
    onTagChanged: ( tagSlug:string ) => void;
    selectedPublishers: string[];
    onPublisherChanged: ( publisherSlug:string ) => void;
}

export const Sidebar: FC<Props> = ({ selectedGenres, onGenreChange, selectedPlatform, onPlatformChanged,selectedTags, onTagChanged, selectedPublishers, onPublisherChanged  }) => {

    const { genreQuery } = useGenres();
    const { data: genres } = genreQuery;
    
    const { platformQuery } = usePlatforms();
    const { data: platforms } = platformQuery;

    const { tagsQuery } = useTags();
    const { data: tags } = tagsQuery;

    const { publisherQuery } = usePublishers();
    const { data: publishers } = publisherQuery;

  return (
    <Box sx={{ padding: '20px' }}>
     
            <CustomAcordion 
                title={'Genres'}
                array={genres.results}
                selected={selectedGenres}
                onChanged={onGenreChange}
            />
            <CustomAcordion 
                title={'Platforms'}
                array={platforms.results}
                selected={selectedPlatform}
                onChanged={onPlatformChanged}
            />
            <CustomAcordion 
                title={'Tags'}
                array={tags.results}
                selected={selectedTags}
                onChanged={onGenreChange}
            />
            <CustomAcordion 
                title={'Publishers'}
                array={publishers.results}
                selected={selectedPublishers}
                onChanged={onPublisherChanged}
            />

   

    </Box>
  )
}
