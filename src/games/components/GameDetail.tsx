import { FC, useContext } from "react"
import { useNavigate } from "react-router";

import { Box, Grid, Typography,Divider, Button, Link } from "@mui/material"
import moment from 'moment';

import { LoadingIcon, SlideShow } from "../../components/ui";
import {  Screenshots } from "../interfaces";
import { Game } from "../interfaces/game"
import { Platform } from '../interfaces/platforms';
import { FiltersContext } from "../../context/filters";
import { Genre } from "../interfaces/genres";
import { Tag } from "../interfaces/tags";
import { Publisher } from "../interfaces/publishers";




interface Props {
    game?: Game;
    screenshots?: Screenshots;
}


export const GameDetail: FC<Props> = ({ game, screenshots }) => {

    const { setSelectedPlatform, setSelectedGenres, setSelectedTags, setSelectedPublishers, filtersClean } = useContext( FiltersContext );
    const released = moment(game?.released).format('DD MMMM YYYY');
    const navigate = useNavigate();

    const handlePlatform = async(platform: Platform) => {
        await filtersClean()
        await setSelectedPlatform((platform.id).toString())
        navigate(`/games/platform/${ platform.slug }`)
    }
    const handleGenre = async( e: React.MouseEvent<HTMLElement> , genre: Genre ) => {
    
        await filtersClean()
        await setSelectedGenres((genre.id).toString())
        navigate(`/games/genre/${ genre.slug }`)
    }

    const handleTag = async( e: React.MouseEvent<HTMLElement> , tag: Tag ) => {
    
        await filtersClean()
        await setSelectedTags((tag.id).toString())
        navigate(`/games/tag/${ tag.slug }`)
    }

    const handlePublisher = async( e: React.MouseEvent<HTMLElement> , publisher: Publisher ) => {
    
        await filtersClean()
        await setSelectedPublishers((publisher.id).toString())
        navigate(`/games/publisher/${ publisher.slug }`)
    }

  return (
    < >

 
        <Grid  container sx={{
            marginTop:'40px',
            padding: {xs:'20px', md:'60px'},
            backgroundColor:'transparent',
            backgroundImage: `linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)), linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)), url(${ game?.background_image })`,
            backgroundSize:'cover'
        }}>
            

            <Grid item xs={12} lg={6}>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}> 
                    <Typography variant="h1" >{game?.name}</Typography>.

                    <Box sx={{ bgcolor:'#ffff',color:'black', padding:'4px 12px', borderRadius:'10px', fontStyle:'italic'}}>

                        <Typography variant="body2">{released}</Typography>
                    </Box>

                </Box>
                    <Divider />
                    <Typography variant="subtitle1">
                        About
                    </Typography>
                    <Typography variant="body1">
                        {game?.description_raw}

                    </Typography>
            </Grid>

            <Grid item xs={12} lg={6}>
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

        <Grid container sx={{ padding: {xs:'20px', md:'0px 60px'} }}>


           <Grid item xs={12} lg={6} >
                <Grid container>

                    <Grid item lg={4}  sx={{padding:'10px'}}>
                        <Typography>Genres</Typography>
                        {
                            game?.genres.map(genre => (

                                    <Typography 
                                        variant="caption" 
                                        key={genre.id} 
                                        className="btn" 
                                        style={{margin:'2px'}}
                                        onClick={ (e) => handleGenre(e, genre) }
                                    >
                                        {genre.name}
                                    </Typography>
                                    ))
                                }
                    </Grid >

                    <Grid item lg={4}  sx={{padding:'10px'}}>
                        <Typography>Publishers</Typography>
                            {   game?.publishers &&
                                game?.publishers!.map((publisher) => (

                                <Typography 
                                    variant="caption" 
                                    key={publisher.id} 
                                    className="btn" 
                                    style={{margin:'2px'}}
                                    onClick={(e) => handlePublisher(e, publisher)}
                                >
                                    {publisher.name} 
                                </Typography>
                                ))
                            }
                    </Grid >
                    
                    <Grid item lg={4}  sx={{padding:'10px'}}>
                        <Typography>Website</Typography>
                        <Link href={ game?.website } underline="none" target="_blank" rel="noreferrer">
                        <Typography variant="caption" className="btn" style={{margin:'2px'}}> {game?.website} </Typography>
                        </Link>      
                    </Grid >

                    <Grid item lg={8}  sx={{padding:'10px'}}>
                        <Typography>Tags</Typography>
                        {
                            game?.tags.map(tag => (

                                    <Typography 
                                        variant="caption" 
                                        key={tag.id} 
                                        className="btn" 
                                        style={{margin:'2px'}}
                                        onClick={(e) => handleTag(e, tag)}
                                    >
                                        {tag.name} 
                                    </Typography>
                                    ))
                        }
                    </Grid >
                    
                    <Grid item lg={4}  sx={{padding:'10px'}}>
                        <Typography>Platforms</Typography>
                        {
                            game?.platforms.map(({platform}) => (

                                    <Typography 
                                        variant="caption" 
                                        key={platform.id} 
                                        className="btn" 
                                        style={{margin:'2px'}}
                                        onClick={(Platform) => handlePlatform(platform as Platform) }
                                    >
                                        {platform.name}
                                    </Typography >
                                    ))
                                }
                    </Grid >

                </Grid>
           </Grid>

           <Grid item xs={12} lg={6} >
             
                 <Box
                 sx={{
                    margin:'auto',
                    width: '80%'
                 }}
                 >
                    <Typography variant="body1" sx={{ padding: '5px ' }}>Stores</Typography>
                    <Grid container  style={{ display: 'flex', gap: '5px' }}>

                                {
                                    game?.stores.map( store => (
                                        <Box  key={store.id}>

                                            <Link underline="none" href={ `https://${store.store.domain}` } target='_blank' rel="noreferrer">
                                                <Button className="btn-store" >
                                                    { store.store.name } 
                                                </Button>
                                            </Link>
                                        </Box>
                                    ))
                                }
                                
                                    

                    </Grid>
                </Box>       


                
              
           </Grid>

        </Grid>



    </>

 
  )
}
