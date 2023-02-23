import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { GamesLayout } from "../../components/Layouts"
import { CustomBar } from "../../components/ui";
import { Games } from "../components";


export const TagView = () => {

  const params = useParams();

  const { tag } = params;

  // console.log(tag)

  return (
    <GamesLayout>
        <Box sx={{ padding:'80px 0 0 0', width:'100%', textAlign:'center' }}>
          <Typography variant='h1' sx={{fontSize:'5rem'}}>Games Of {tag}</Typography>
        </Box>
        <Box sx={{ padding:'0 80px' }}>
          <CustomBar />
          <Games />

        </Box>
    </GamesLayout>
  )
}