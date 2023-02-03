import { FC } from "react"
import { useNavigate } from "react-router"
import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material"
import { Game } from "../interfaces/games"




interface Props {
    game: Game
}

export const GameCard: FC<Props> = ({game}) => {

    const navigate = useNavigate();

  return (
    <Card 
        onClick={() => navigate(`/game/detail/${ game.id }`)}
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
                        // padding: '5px',
                        minHeight: '50px', 
                        display: 'flex',
                        alignItems:'center',
                        justifyContent:'center' 
                    }} 
                    className='fadeIn'
            >
                <Typography 
                    fontWeight={{ xs:700 }} 
                    fontSize={{xs:'0.72rem',sm:"0.85rem"}} 
                    padding={{xs:'0 2px', md:'0 5px'}}
                    textAlign='center' 
                    
                >{ game.name }</Typography>


            </Box>
                <Box sx={{
                    // display: 'flex',
                    padding: '5px',
                    textAlign: 'center',
                    margin: 'auto',
        
                }}>
                    {
                        game.genres.map(genre => (

                            <Chip label={ genre.name } color="primary" size="small" sx={{ fontSize: '10px', margin: '1px' }} />
                        ))
                    }

                </Box>

        <CardContent>

        </CardContent>

    </Card>
  )
}
