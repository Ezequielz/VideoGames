
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { AppBar, Link, Toolbar, Typography } from '@mui/material';

import { UiContext } from '../../context/ui';
import { SwitchTheme } from './';


export const Navbar = () => {

const navigate = useNavigate();

const { theme, setTheme } = useContext( UiContext );

const handleClick = ():void => {

 if ( theme === 'dark' ) {
  setTheme('light')
 }else{
  setTheme('dark')
 }
}

  return (
    <AppBar 
      sx={{ padding:'0 60px', bgcolor:'secondary.main'}}
      
    >
        <Toolbar sx={{ display:'flex', justifyContent:'space-between' }} >
            
          <Link sx={{ cursor: 'pointer', fontWeight:'800', textDecoration:'none'}} color='primary' display='flex' alignItems='center'  onClick={() => navigate('/')}>
              <Typography variant='h6' sx={{ fontWeight:'900', letterSpacing:'5px', fontSize:'1.45rem',  }} >Video|</Typography>
              <Typography sx={{ ml: 0.5 , mt: 0.5}} color='secondary.light'>games</Typography>
          </Link>

         
       
          <SwitchTheme 
            onClick={ handleClick }
          />
          
        </Toolbar>
    </AppBar>    
  )
}