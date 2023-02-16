import { FC } from "react"
import { useNavigate } from "react-router"
import { useQueryClient } from "@tanstack/react-query"

import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material"
import { Game } from "../interfaces/game"
import { getGameInfo } from "../hooks/useGame"




interface Props {
    game: Game
}

export const GameCard: FC<Props> = ({game}) => {

    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const preSetData = () => {
        

        queryClient.setQueryData(
            [ 'game', game.slug ],
            game,
        );

    }

  return (
    <Card 
        onClick={() => navigate(`/game/${ game.slug }`)}
        onMouseEnter={ preSetData }
    >     

                <CardMedia 
                    sx={{ height: '150px' }}
                    component='img'
                    className="imagen"
                    // onLoad={ () => console.log('cargo')}
                    image={ game.background_image }
                    alt={  `imagen de ${game.name}` }
                />
       

            <Box sx={{ 
                        padding: '25px 0 0 0',
                        // minHeight: '50px', 
                        display: 'flex',
                        alignItems:'center',
                        justifyContent:'center' 
                    }} 
               
            >
                <Typography 
                    fontWeight={{ xs:700 }} 
                    // fontSize={{xs:'0.72rem',sm:"0.85rem"}} 
                    // padding={{xs:'0 2px', md:'0 5px'}}
                    textAlign='center' 
                    
                >{ game.name }</Typography>


            </Box>
                {/* <Box sx={{
                    // display: 'flex',
                    padding: '5px',
                    textAlign: 'center',
                    margin: 'auto',
        
                }}>
                    {
                        game.genres.map(genre => (

                            <Chip 
                                key={genre.id}
                                label={ genre.name } 
                                color="primary" 
                                size="small" 
                                sx={{ fontSize: '10px', margin: '1px' }} />
                        ))
                    }

                </Box> */}

        <CardContent>

        </CardContent>

    </Card>
  )
}
