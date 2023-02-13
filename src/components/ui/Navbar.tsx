import { useState } from 'react';
import { useNavigate } from 'react-router';

import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material';





export const Navbar = () => {

const navigate = useNavigate();
const [searchTerm, setSearchTerm] = useState('');
const [isSearchVisible, setIsSearchVisible] = useState(false);



  return (
    <AppBar sx={{ padding:'0 60px' }}>
        <Toolbar >
            
                <Link sx={{ cursor: 'pointer' }} display='flex' alignItems='center'  onClick={() => navigate('/')}>
                    <Typography variant='h6' >Video|</Typography>
                    <Typography sx={{ ml: 0.5 , mt: 0.5}}>games</Typography>
                </Link>
 
            <Box  flex={1}/>

            <Button 
              // onClick={ toggleSideMenu }
            >
              Menu
            </Button>



        </Toolbar>
    </AppBar>    
  )
}