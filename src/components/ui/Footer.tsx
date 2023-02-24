import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export const Footer = () => {
  return (
    <Box sx={{
        height:'10vh',
        display:'flex',
        justifyContent:'center',
        bgcolor:'secondary.main',
        alignItems:'center',
        color:'secondary.light',
        position:'absolute',
        width:'100%'
    }}
    >
        
        <Typography> Desarrollado por Ezequiel Zapata</Typography>
    </Box>
  )
}
