import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react"
import { Games } from "../interfaces/Games"



interface Props {
    game: Games
}

export const GameCard: FC<Props> = ({game}) => {
  return (
    <Card >     

                <CardMedia 
                
                    component='img'
                    className="imagen"
                 // onLoad={ () => console.log('cargo')}
                 image={ game.img }
                 alt={  game.img }
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


        <CardContent>

        </CardContent>

    </Card>
  )
}
