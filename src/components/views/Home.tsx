
import { useContext, useEffect, useState } from 'react';
import { Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';

import { GamesLayout } from '../Layouts';
import { CustomBar, Sidebar } from '../ui';
import { Games } from '../../games/components';
import { FiltersContext } from '../../context/filters';

import MenuIcon from '@mui/icons-material/Menu';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}


export const Home = (props: Props ) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerWidth = 240;
  const { filtersClean } = useContext( FiltersContext );

  useEffect(() => {
    filtersClean()
  },[])

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Sidebar  />
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
      <GamesLayout>

<Box sx={{ display:{sm:'flex'} }}>
    
      <Box
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          padding:'60px 0',
          // ml: { sm: `${drawerWidth}px` },
          
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2,display: { lg: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

        </Toolbar>
      </Box>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { lg: 0 }}}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
          
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height:'90vh', marginTop:'60px' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, height:'70vh', marginTop:{sm:'110px'} },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{  
          padding:{xs:'20px',sm:'60px',} 
          // width: { sm: `calc(100% - ${drawerWidth}px)` }
         }}
      >
       <Box sx={{ padding:'40px 0 0 0', width:'100%', textAlign:'center' }}>
          <Typography variant='h1' sx={{fontSize:{xs:'3rem',lg:'5rem'}}}>All Video Games</Typography>
        </Box>

        <Box >
            
            <CustomBar />
    
            <Games />
        </Box>

      </Box>
    </Box>
      

        {/* <Box sx={{ padding:'80px 0 0 0', width:'100%', textAlign:'center' }}>
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

        </Box> */}
      </GamesLayout>
  )
}