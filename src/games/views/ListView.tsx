import { CardActionArea, Grid } from "@mui/material"
import { GameCard } from "../components"
import { Games } from "../interfaces/Games"


const gamesList: Games[] = [
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    {name: 'GTA',
     img: 'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'
     }, 
     {name: 'The Witcher 3: Wild Hunt',
      img: 'https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg' },
    ]

export const ListView = () => {
  return (

    <Grid container spacing={2}>
            
        {
            gamesList.map( (game, index) =>(
                
                <Grid
                    key={ index }
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
