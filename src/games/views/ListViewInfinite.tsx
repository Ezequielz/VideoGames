
import { FC } from 'react';
import { CardActionArea, Grid } from "@mui/material"
import {Box, Typography} from '@mui/material';
import Button from '@mui/material/Button/Button';

import { LoadingIcon } from "../../components/ui";
import { GameCard } from "../components"
import { useGamesInfinite } from '../hooks';
import { Game } from "../interfaces/game";
import { GameCardList } from '../components/GameCardList';



interface Props {
  selectedGenres: string[];
  selectedPlatform: number[];
  selectedTags: string[];
  selectedPublishers: string[];
  view: string;
}

export const ListViewInfinite: FC<Props> = ({ selectedGenres, selectedPlatform,selectedTags, selectedPublishers, view }) => {

  const { gamesQuery } = useGamesInfinite({ genres: selectedGenres, platforms: selectedPlatform, tags: selectedTags, publishers: selectedPublishers });
  const data = gamesQuery.data?.pages.flat()

  if ( gamesQuery.isLoading )
  return ( 
    <Box  sx={{display: 'flex'}}>
        <LoadingIcon /> 
      <Typography sx={{ marginLeft:'5px' }}>
         Cargando juegos...
      </Typography>

    </Box>
   )

   if (data && data?.length < 1  )
   return (
    <>
      <Typography>No se encontro ningún juego con esos filtros</Typography>
    </>
   )

  return (

    <Box >

    
              
          { view === 'module'
            ? (
            <Grid container spacing={2}>
             {
              data?.map( (game:Game) =>(
                  
                  <Grid
                      key={ game.id }
                      item
                      xs={6} 
                      sm={4}
                      md={3}
                      
                  >

                          <CardActionArea>
                              
                              <GameCard game={game} />

                          </CardActionArea>

                  </Grid>

                ))
             }
              
              </Grid>   
            ):(
              <Grid container spacing={2}>
                  
              {
                  data?.map( (game:Game) =>(
                      
                      <Grid
                          key={ game.id }
                          item
                          xs={12} 
                       
                      >

                              <CardActionArea>
                                  
                                   <GameCardList  game={game} />

                              </CardActionArea>

                      </Grid>
                  
                      
                  ))
              }

          </Grid>
            )
          }

     

      <Button 
        sx={{ marginTop:'15px' }}
        disabled={ !gamesQuery.hasNextPage }
        onClick={ () => gamesQuery.fetchNextPage() }
      >
        <Typography>Load More</Typography>
      </Button>

    </Box>

    
  )
}
