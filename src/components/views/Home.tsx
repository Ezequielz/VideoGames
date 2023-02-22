
import { FC, useState } from 'react';
import { Box } from '@mui/material';

import { GamesLayout } from '../Layouts';
import { AppBar, Sidebar } from '../ui';
import { Games } from '../../games/components';






export const Home: FC = () => {

  return (
      <GamesLayout>


        <Box sx={{ display:'flex', padding:'80px ' }}>
            
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