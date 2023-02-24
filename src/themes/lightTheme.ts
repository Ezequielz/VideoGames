import { createTheme } from '@mui/material/styles';


export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E1E1E'
    },
    secondary: {
      main: '#e4e4e4',
      light: '#4f8aca',

    },
  
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
    
  },
});