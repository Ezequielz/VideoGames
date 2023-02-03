import { Box, Typography } from '@mui/material'


export const Sidebar = () => {
  return (
    <Box
        sx={{
            width: '160px',
            height: '100vh',
            marginTop: '60px',
           
        }}
    >
        <Box 
            sx={{
                padding: '20px'
            }}
        >

            <Typography>
                Sidebar
            </Typography>
        </Box>

    </Box>
  )
}
