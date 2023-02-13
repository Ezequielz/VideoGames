
import { FC } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import { LoadingIcon } from './LoadingIcon';
import { useGenres, usePlatforms, useTags, usePublishers } from '../../games/hooks';
import Divider from '@mui/material/Divider/Divider';



interface Props {
    selectedGenres: string[];
    onChange: ( genreName:string ) => void;
}

export const Sidebar: FC<Props> = ({ selectedGenres, onChange }) => {

    const { genreQuery } = useGenres();
    const { data: genres } = genreQuery;
    
    const { platformQuery } = usePlatforms();
    const { data: platforms } = platformQuery;

    const { tagsQuery } = useTags();
    const { data: tags } = tagsQuery;

    const { publisherQuery } = usePublishers();
    const { data: publishers } = publisherQuery;

  return (
    <Box >
     

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Genres</Typography>
                </AccordionSummary>
                <AccordionDetails>
               {genreQuery.isLoading ?
               ( <LoadingIcon />)
               :
               genres!.results.map( genre => (
                    <Box 
                        className={`${selectedGenres.includes(genre.name) ? 'genre-active': 'genre'}`}
                        key={genre.id}
                        onClick={ () => onChange( genre.name ) }
                        sx={{
                           margin:'3px 1px'
                        }}
                    >

                        <Typography>
                        {genre.name}
                        </Typography>
                    </Box>

                ))
               }
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Platforms</Typography>
                </AccordionSummary>
                <AccordionDetails>
               {genreQuery.isLoading ?
               ( <LoadingIcon />)
               :
               platforms!.results.map( platform => (
                    <Box 
                        className={`${selectedGenres.includes(platform.name) ? 'genre-active': 'genre'}`}
                        key={platform.id}
                        onClick={ () => onChange( platform.name ) }
                        sx={{
                           margin:'3px 1px'
                        }}
                    >

                        <Typography>
                        {platform.name}
                        </Typography>
                    </Box>

                ))
               }
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Tags</Typography>
                </AccordionSummary>
                <AccordionDetails>
               {genreQuery.isLoading ?
               ( <LoadingIcon />)
               :
               tags!.results.map( tag => (
                    <Box 
                        className={`${selectedGenres.includes(tag.name) ? 'genre-active': 'genre'}`}
                        key={tag.id}
                        onClick={ () => onChange( tag.name ) }
                        sx={{
                           margin:'3px 1px'
                        }}
                    >

                        <Typography>
                        {tag.name}
                        </Typography>
                    </Box>

                ))
               }
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Publishers</Typography>
                </AccordionSummary>
                <AccordionDetails>
               {genreQuery.isLoading ?
               ( <LoadingIcon />)
               :
               publishers!.results.map( publisher => (
                    <Box 
                        className={`${selectedGenres.includes(publisher.name) ? 'genre-active': 'genre'}`}
                        key={publisher.id}
                        onClick={ () => onChange( publisher.name ) }
                        sx={{
                           margin:'3px 1px'
                        }}
                    >

                        <Typography>
                        {publisher.name}
                        </Typography>
                    </Box>

                ))
               }
                </AccordionDetails>
            </Accordion>


   

    </Box>
  )
}
