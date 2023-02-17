import { FC } from "react"
import { useNavigate } from "react-router"
import { useQueryClient } from "@tanstack/react-query"

import moment from 'moment';
import { Box, Card, CardMedia, Typography } from "@mui/material"
import { Game } from "../interfaces/game"





interface Props {
    game: Game
}

export const GameCardList: FC<Props> = ({game}) => {

    const navigate = useNavigate();

    const queryClient = useQueryClient();
    const preSetData = () => {
        

        queryClient.setQueryData(
            [ 'game', game.slug ],
            game,
        );

    }

   
    const released = moment(game?.released).format('DD MMMM YYYY');

  return (
    <Card 
        onClick={() => navigate(`/game/${ game.slug }`)}
        onMouseEnter={ preSetData }
        sx={{ display: 'flex', alignItems:'center', justifyContent:'center'}}
    >     

                <CardMedia 
                    sx={{ maxWidth:'150px', height:'70px', objectFit:'cover'}}
                    component='img'
                    className="imagen"
                    // onLoad={ () => console.log('cargo')}
                    image={ game.background_image }
                    alt={  `imagen de ${game.name}` }
                    
                />
       

   
                <Typography 
                    fontWeight={{ xs:700 }} 
                   sx={{ width:'25%' }}
                    // fontSize={{xs:'0.72rem',sm:"0.85rem"}} 
                    // padding={{xs:'0 2px', md:'0 5px'}}
                    textAlign='center' 
                    
                >{ game.name }</Typography>

               <Box   sx={{ width:'25%' }} textAlign='center'>
                <Typography variant="body2"  >Genres</Typography>
                {game.genres.map( genre => (

                    <Typography  variant="caption" key={genre.id} sx={{ padding:'2px' }}>{genre.name}</Typography>
                ) )}
               </Box>

               <Box    sx={{ width:'25%' }} textAlign='center'>
                <Typography variant="body2"  >Platforms</Typography>
                {game.platforms.map( ({platform}) => (

                    <Typography  variant="caption" key={platform.id} sx={{ padding:'2px' }}>{platform.name}</Typography>
                ) )}
               </Box>

             

               <Box    sx={{ width:'25%' }} textAlign='center'>
                <Typography variant="body2"  >Released</Typography>
               

                    <Typography variant="caption" sx={{ padding:'2px' }}>{released}</Typography>

               </Box>

  
                
            


    </Card>
  )
}
