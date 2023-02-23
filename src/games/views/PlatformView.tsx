import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { GamesLayout } from "../../components/Layouts"
import { AppBar } from "../../components/ui";
import { Games } from "../components";


export const PlatformView = () => {

  const params = useParams();

  const { platform } = params;

  // console.log(platform)
  

  return (
    <GamesLayout>
        <Box sx={{ padding:'80px 0 0 0', width:'100%', textAlign:'center' }}>
          <Typography variant='h1' sx={{fontSize:'5rem'}}>Games Of {platform}</Typography>
        </Box>
        <Box sx={{ padding:'0 80px' }}>
          <AppBar />
          <Games />

        </Box>
    </GamesLayout>
  )
}
