import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Navigate, useParams } from 'react-router'
import { GamesLayout } from '../../components/Layouts'
import { LoadingIcon } from '../../components/ui';

import { GameDetail } from '../components';
import { useGame,  useScreenshots } from '../hooks';

export const DetailView = () => {

  const params = useParams();

  const { slug } = params;

  const gameQuery  = useGame( slug! )
  const { data } = gameQuery

  const { screenQuery }  = useScreenshots( slug! )
  const { data: screenshots } = screenQuery

 if( !gameQuery.isLoading && !gameQuery.data) {
  return <Navigate to="/"/>
 }

  return (
    <GamesLayout>
      <Box >
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
