import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useParams } from 'react-router'
import { GamesLayout } from '../../components/Layouts'
import { LoadingIcon } from '../../components/ui';
import { GameInfo } from '../components/GameInfo';
import { useGame, useScreenshots } from '../hooks';

export const DetailView = () => {

  const params = useParams();

  const { id = '0' } = params;

  const gameQuery  = useGame( +id )
  const { data } = gameQuery

  const { screenQuery }  = useScreenshots( +id )
  const { data: screenshots } = screenQuery


  return (
    <GamesLayout>
      <Box sx={{
        padding: '60px',
        background: `radial-gradient(rgba(24, 26, 33, 0.7) 0%, #181a21 100%)  , url(${ data?.background_image }) no-repeat center `,
        backgroundSize: '100% 80%',
        height: '100vh',
        marginTop: '-20px'
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

          <GameInfo game={ data } screenshots={screenshots}/>
        )
        }
      </Box>
    </GamesLayout>
  )
}
