import { useParams } from "react-router";
import { Box, Typography } from "@mui/material"
import { GamesLayout } from "../../components/Layouts"

import { Games } from "../components";
import { CustomBar } from "../../components/ui";



export const GenreView = () => {


    const params = useParams();

    const { genre } = params;

  return (
    <GamesLayout>
        <Box sx={{ padding:'80px 0 0 0', width:'100%', textAlign:'center' }}>
          <Typography variant='h1' sx={{fontSize:'5rem'}}>Games Of {genre}</Typography>
        </Box>
        <Box sx={{ padding:'0 80px' }}>
          <CustomBar />
          <Games />

        </Box>
    </GamesLayout>
  )
}
