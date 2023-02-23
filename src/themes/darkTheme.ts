import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff'
    },
    secondary: {
      main: '#1E1E1E'
    }
  
  },
  components: {

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 30,
          fontWeight: 600
        },
        h2: {
          fontSize: 20,
          fontWeight: 400
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root:{
          padding:'0px'
        }
      }
    }
    
  },
});