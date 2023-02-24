import { FC } from "react"
import { useNavigate } from "react-router"
import { useQueryClient } from "@tanstack/react-query"
import { motion } from "framer-motion";

import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { Game } from "../interfaces/game"





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
    <motion.div
        initial={{ x:15, opacity: 0, scale:0.9 }}          
        whileInView={{ x: 0,opacity: 1 , scale:1}}
    
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >   
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
                            height: '50px', 
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
                        variant="body2"
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
    </motion.div>
  )
}
