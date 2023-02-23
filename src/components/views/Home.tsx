
import { Box, Typography } from '@mui/material';

import { GamesLayout } from '../Layouts';
import { AppBar, Sidebar } from '../ui';
import { Games } from '../../games/components';
import { useContext, useEffect } from 'react';
import { FiltersContext } from '../../context/filters';


export const Home = () => {

  const { filtersClean } = useContext( FiltersContext );

  useEffect(() => {
    filtersClean()
  },[])

  return (
      <GamesLayout>
      

        <Box sx={{ padding:'80px 0 0 0', width:'100%', textAlign:'center' }}>
          <Typography variant='h1' sx={{fontSize:'5rem'}}>All Video Games</Typography>
        </Box>
        <Box sx={{ display:'flex', padding:'0 60px'}}>

            
                <Sidebar  />

                <Box
                    sx={{ 
                        width: `calc( 100vw - 250px )`,
                        padding: '10px'
                    }}
                >
                    
                    <AppBar />
            
                    <Games />
                </Box>

        </Box>
      </GamesLayout>
  )
}