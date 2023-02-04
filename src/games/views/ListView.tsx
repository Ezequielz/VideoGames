
import { CardActionArea, Grid } from "@mui/material"
import { LoadingIcon } from "../../components/ui";
import { GameCard } from "../components"

import { useGames } from "../hooks/useGames";
import {Box, Typography} from '@mui/material';
import { Game } from "../interfaces/game";


export const ListView = () => {

  const { gamesQuery } = useGames();
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

  return (

    <Grid container spacing={2}>
            
        {
            data!.results.map( (game:Game) =>(
                
                <Grid
                    key={ game.id }
                    item
                    xs={6} 
                    sm={4}
                    md={3}
                    lg={2}   
                >

                        <CardActionArea>
                            
                            <GameCard game={game} />

                        </CardActionArea>

                </Grid>
            
                
            ))
        }
    </Grid>
    
  )
}
