import { createTheme } from '@mui/material/styles';


export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#e4e4e4'
    },
    secondary: {
      main: '#292a2d',
      light: '#c4ec1b',
    }
  
  },
  components: {

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 27,
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