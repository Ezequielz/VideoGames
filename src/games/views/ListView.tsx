
import { useContext } from 'react';
import { Box, Typography, CardActionArea, Grid } from "@mui/material"

import { LoadingIcon } from "../../components/ui";
import { GameCard, PaginationsButtons, GameCardList } from "../components"

import { useGames } from "../hooks/useGames";

import { UiContext } from '../../context/ui';
import { FiltersContext } from '../../context/filters';

import { Game } from "../interfaces/game";


export const ListView = () => {

  
  const { view, order } = useContext( UiContext );
  const { search } = useContext( FiltersContext );
  
  const { gamesQuery, page, nextPage, prevPage } = useGames({ search, order });
  const { data } = gamesQuery

  if ( gamesQuery.isLoading )
  return ( 
    <Box  sx={{display: 'flex'}}>
        <LoadingIcon /> 
      <Typography sx={{ marginLeft:'5px' }}>
         Cargando juegos...
      </Typography>

    </Box>
   )

   if (data && data?.results.length < 1  )
   return (
    <>
      <Typography>No se encontro ningún juego con esos filtros</Typography>
    </>
   )

  return (

    <Box >

      {
        view === 'module'
         ? (
          <Grid container spacing={2} >
                  
              {
                  data?.results.map( (game:Game) =>(
                      
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
          )
          :(
          <Grid container spacing={2}>
                  
              {
                  data?.results.map( (game:Game) =>(
                      
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

      <PaginationsButtons 
        gamesQuery={gamesQuery}
        nextPage={nextPage}
        page={page}
        prevPage={prevPage}
      />
    </Box>

    
  )
}
