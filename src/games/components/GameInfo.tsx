import { Box, Grid, Typography,Divider, Card, CardMedia, CardContent, CardActions, Button } from "@mui/material"
import { FC } from "react"
import { LoadingIcon, SlideShow } from "../../components/ui";
import { Screenshots } from "../interfaces";
import { Game } from "../interfaces/game"



interface Props {
    game?: Game;
    screenshots?: Screenshots;
}


export const GameInfo: FC<Props> = ({ game, screenshots }) => {

  return (
    <Box sx={{
        padding: '60px'
    }}>

        <Typography variant="h1" style={{marginTop: '50px'}}>{game?.name}</Typography>
        {/* <data>{game?.released}</data> */}
        <Grid container>
            <Grid item xs={6}>
                <Divider />
                <Typography variant="subtitle1">
                    About
                </Typography>
                <Typography variant="body1">
                    {game?.description_raw}

                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Box sx={{
                    // display:'flex',
                    justifyContent: 'center',
                    margin:'auto',
                    width: '80%'
                }}>

                    {/* <Card 
                        sx={{ maxWidth: 545 }}
                    >
                        <CardMedia
                            component="video"
                            autoPlay
                            controls
                            src="https://steamcdn-a.akamaihd.net/steam/apps/256693661/movie_max.mp4"
                        />
                        
                    </Card> */}
                    {  screenshots && screenshots?.results.length > 1 
                        ? (

                            <SlideShow images={ screenshots?.results }/>
                        )
                        : (
                            <LoadingIcon />
                        )

                    }
                </Box>
            </Grid>

        </Grid>

    </Box>

 
  )
}
