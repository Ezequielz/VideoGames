import { FC } from "react"
import { useNavigate } from "react-router";

import { Box, Grid, Typography,Divider, Card, CardMedia, CardContent, CardActions, Button, Link } from "@mui/material"
import * as dayjs from 'dayjs'

import { LoadingIcon, SlideShow } from "../../components/ui";
import { Screenshots } from "../interfaces";
import { Game } from "../interfaces/game"



interface Props {
    game?: Game;
    screenshots?: Screenshots;
}


export const GameDetail: FC<Props> = ({ game, screenshots }) => {

    
    var released = dayjs(game?.released).format('DD MMMM YYYY');
    const navigate = useNavigate();


  return (
    <Box sx={{ padding: {xs:'60px 0', sm:'60px'} }}>

 
        <Grid  container >

            <Grid item xs={12} lg={6}>
                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center'
                }}> 
                    <Typography variant="h1">{game?.name}</Typography>.

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
 

        <Grid container sx={{ marginTop:'5px' }}>

           <Grid item xs={12} lg={6} >
              <Grid container sx={{ display:'flex',justifyContent:'space-between'}}>

                <Grid item xs={12} md={5}  xl={6}>
                    <Typography variant="body1" sx={{ padding: '5px ',textAlign:''}}>Platforms</Typography>
                    <Grid container  style={{ display: 'flex', gap: '5px', }}>
                            {
                                game?.platforms.map( platform => (
                                    
                                    <Box 
                                        key={platform.platform.id}
                                        sx={{ display:'flex', gap:'2px' }}
                                        onClick={() => navigate(`/games/platform/${ platform.platform.slug }`)}
                                        className='btn '
                                    >

                                        <Typography 
                                    
                                            style={{
                                                // backgroundColor:'red',
                                                padding:'5px',
                                                borderRadius:'5px',
                                                cursor: 'pointer',
                                                fontSize:'.9rem'
                                            }}
                                            
                                        >
                                            { (platform.platform.name) }
                                        </Typography>
                                    </Box>

                                

                                ))
                            }
                    </Grid>
                
                </Grid>

                <Grid item xs={12} md={5}  xl={6}>
                    <Typography variant="body1" sx={{ padding: '5px ',textAlign:''}}>Tags</Typography>          
                    <Grid container  style={{ display: 'flex', gap: '5px', }}>
                            {
                                game?.tags.map( tag => (
                                    
                                    <Box 
                                        key={tag.id}
                                        sx={{ display:'flex', gap:'2px' }}
                                        onClick={() => navigate(`/games/tag/${ tag.slug }`)}
                                        className='btn '
                                    >

                                        <Typography 
                                    
                                            style={{
                                                // backgroundColor:'red',
                                                padding:'5px',
                                                borderRadius:'5px',
                                                cursor: 'pointer',
                                                fontSize:'.9rem'
                                            }}
                                            
                                        >
                                            { (tag.name) }
                                        </Typography>
                                    </Box>

                                

                                ))
                            }
                    </Grid>
                </Grid>

                <Grid item xs={12} md={4} xl={6}>
                    <Typography variant="body1" sx={{ padding: '5px', textAlign:''}}>Genres</Typography>
                    <Grid container  style={{ display: 'flex', gap: '5px' , justifyContent:''}}>
                            {
                                game?.genres.map( genre => (
                                    
                                    <Box 
                                        key={genre.id}
                                        sx={{ display:'flex', gap:'2px'}}
                                        onClick={() => navigate(`/games/genre/${ genre.slug }`)}
                                        className='btn '
                                    >

                                        <Typography 
                                    
                                            style={{
                                                // backgroundColor:'red',
                                                padding:'5px',
                                                borderRadius:'5px',
                                                cursor: 'pointer',
                                                fontSize:'.9rem'
                                            }}
                                            
                                        >
                                            { (genre.name) }
                                        </Typography>
                                    </Box>

                                

                                ))
                            }
                    </Grid>
             
                </Grid>

                <Grid item xs={12} md={6} >
                    <Typography variant="body1"  sx={{ padding: '5px',textAlign:''}}>Publisher</Typography>
                    {
                         game?.publishers && 
                         
                         game?.publishers.map( publisher => (
                                
                                <Box 
                                    key={ publisher.id }
                                    sx={{ display:'flex', gap:'2px'}}
                                    onClick={() => navigate(`/games/publisher/${ publisher.slug }`)}
                                    className='btn '
                                >

                                    <Typography 

                                        style={{
                                            // backgroundColor:'red',
                                            padding:'5px',
                                            borderRadius:'5px',
                                            cursor: 'pointer',
                                            fontSize:'.9rem'
                                        }}
                                        
                                    >
                                        { (publisher.name) }
                                    </Typography>
                                </Box>

                            

                            ))
                        }
                 
                </Grid>

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

                <Box sx={{ textAlign:'center', marginTop:'30px'} }>
                    <Link href={ game?.website } underline="none" target="_blank" rel="noreferrer">
                        <Button
                            className="btn"
                            sx={{ fontSize:'2rem', padding:'5px 30px', borderRadius:'40px'}}
                        >WEBSITE</Button>
                    </Link>
                </Box>
                
              
           </Grid>

        </Grid>



    </Box>

 
  )
}
