import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { GamesLayout } from "../../components/Layouts"
import { CustomBar } from "../../components/ui";
import { Games } from "../components";


export const PublisherView = () => {

  const params = useParams();

  const { publisher } = params;

  // console.log(publisher)

  return (
    <GamesLayout>
        <Box sx={{ padding:'80px 0 0 0', width:'100%', textAlign:'center' }}>
          <Typography variant='h1' sx={{fontSize:'5rem'}}>Games Of {publisher}</Typography>
        </Box>
        <Box sx={{ padding:'0 80px' }}>
          <CustomBar />
          <Games />

        </Box>
    </GamesLayout>
  )
}