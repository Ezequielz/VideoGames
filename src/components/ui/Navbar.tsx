import { useContext, useState } from 'react';

import { AppBar, Badge, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from '@mui/material';




export const Navbar = () => {


const [searchTerm, setSearchTerm] = useState('');
const [isSearchVisible, setIsSearchVisible] = useState(false);



  return (
    <AppBar >
        <Toolbar>
            
                <Link display='flex' alignItems='center' >
                    <Typography variant='h6'>Video|</Typography>
                    <Typography sx={{ ml: 0.5 , mt: 0.5}}>games</Typography>
                </Link>

            <Box  flex={1}/>

            <Button 
            //   onClick={ toggleSideMenu }
            >
              Menu
            </Button>

        </Toolbar>
    </AppBar>    
  )
}