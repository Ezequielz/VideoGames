import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Navigate, useParams } from 'react-router'
import { GamesLayout } from '../../components/Layouts'
import { LoadingIcon } from '../../components/ui';

import { GameDetail } from '../components';
import { useGame,  useScreenshots } from '../hooks';

export const DetailView = () => {

  const params = useParams();

  const { id = '0' } = params;

  const gameQuery  = useGame( +id )
  const { data } = gameQuery

  const { screenQuery }  = useScreenshots( +id )
  const { data: screenshots } = screenQuery

 if( !gameQuery.isLoading && !gameQuery.data) {
  return <Navigate to="/"/>
 }

  return (
    <GamesLayout>
      <Box sx={{
        padding: {xs:'20px', xl:'60px'},
        background: `radial-gradient(rgba(24, 26, 33, 0.7) 0%, #181a21 100%)  , url(${ data?.background_image }) no-repeat center `,
        backgroundSize: '100% 100%',
        height: {xs:'100%', xl:'65vh'}
        // marginTop: '-20px'
      }}>
        {( gameQuery.isLoading )
        ?(
          <Box  sx={{display: 'flex', justifyContent:'center', alignItems: 'center', height :'100vh'}}>
              <LoadingIcon /> 
            <Typography sx={{ marginLeft:'5px' }}>
              Cargando Información del juego...
            </Typography>
      
          </Box>
        )
        : (

          <GameDetail game={ data } screenshots={screenshots}/>
        )
        
        }
      </Box>
    </GamesLayout>
  )
}
