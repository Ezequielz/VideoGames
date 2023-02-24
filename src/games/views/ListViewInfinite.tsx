
import { FC, useContext } from 'react';
import { CardActionArea, Grid } from "@mui/material"
import {Box, Typography} from '@mui/material';
import Button from '@mui/material/Button/Button';

import { LoadingIcon } from "../../components/ui";
import { GameCard, InfiniteButton } from "../components"
import { useGamesInfinite } from '../hooks';
import { Game } from "../interfaces/game";
import { GameCardList } from '../components/GameCardList';
import { UiContext } from '../../context/ui';
import { FiltersContext } from '../../context/filters';


export const ListViewInfinite = () => {
  const { view, order } = useContext( UiContext )
  const { search } = useContext( FiltersContext );

  const { gamesQuery } = useGamesInfinite({ search, order });
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

     <Box sx={{ display:'flex', justifyContent:'space-between'}}>

        <Button 
          sx={{ marginTop:'15px' }}
          disabled={ !gamesQuery.hasNextPage }
          onClick={ () => gamesQuery.fetchNextPage() }
        >
          <Typography >Load More</Typography>
        </Button>

        <InfiniteButton />
     </Box>


    </Box>

    
  )
}
