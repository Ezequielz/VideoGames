import { useGenres } from '../../games/hooks/useGenres'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { LoadingIcon } from './LoadingIcon';
import { FC } from 'react';

interface Props {
    selectedGenres: string[];
    onChange: ( genreName:string ) => void;
}

export const Sidebar: FC<Props> = ({ selectedGenres, onChange }) => {

    const { genreQuery } = useGenres();
    const { data } = genreQuery;

  return (
    <Box
        sx={{
          
            height: '100vh',
            // marginTop: '60px',
           
        }}
    >
        <Box 
            sx={{
                padding: '20px'
            }}
        >

     
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Generos</Typography>
                </AccordionSummary>
                <AccordionDetails>
               {genreQuery.isLoading ?
               ( <LoadingIcon />)
               :
                data!.results.map( genre => (
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


        </Box>

    </Box>
  )
}
