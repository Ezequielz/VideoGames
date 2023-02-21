
import { FC } from 'react';
import { CardActionArea, Grid } from "@mui/material"
import { LoadingIcon } from "../../components/ui";
import { GameCard } from "../components"

import { useGames } from "../hooks/useGames";
import {Box, Typography} from '@mui/material';
import { Game } from "../interfaces/game";
import Button from '@mui/material/Button/Button';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { GameCardList } from '../components/GameCardList';


interface Props {
  selectedGenres: string[];
  selectedPlatform: string[];
  selectedTags: string[];
  selectedPublishers: string[];
  view?:string;
  searchTerm?:string;
  order?:string;
}

export const ListView: FC<Props> = ({ selectedGenres, selectedPlatform,selectedTags, selectedPublishers , view, searchTerm, order}) => {

  const { gamesQuery, page, nextPage, prevPage } = useGames({ genres: selectedGenres, platforms: selectedPlatform, tags: selectedTags, publishers: selectedPublishers, searchTerm, order});
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
          <Grid container spacing={2}>
                  
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
            // <Grid container spacing={2}>
            //   {
            //     data?.results.map( (game:Game) => (
            //       <CardActionArea key={game.id} sx={{ padding:'3px' }}>

            //         <GameCardList  game={game} />
            //       </CardActionArea>
            //     ))
            //   }
            // </Grid>
    
          )
      }

          <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'end'
          }}>
            <Button
              onClick={ prevPage }
              disabled={ gamesQuery.isFetching }
            > <NavigateBeforeIcon />
            </Button>
            
            <Typography> {page} </Typography>

            <Button
              onClick={ nextPage }
              disabled={ gamesQuery.isFetching }
            ><NavigateNextIcon />
            </Button>
          </Box>
    </Box>

    
  )
}
