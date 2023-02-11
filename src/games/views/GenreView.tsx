import { useParams } from "react-router";
import { Box } from "@mui/material"
import { GamesLayout } from "../../components/Layouts"



export const GenreView = () => {


    const params = useParams();

    const { genre } = params;

  return (
    <GamesLayout>
      <Box sx={{
        padding: '60px',
        // background: `radial-gradient(rgba(24, 26, 33, 0.7) 0%, #181a21 100%)  , url(${ data?.background_image }) no-repeat center `,
        backgroundSize: '100% 100%',
        height: '100vh',
        // marginTop: '-20px'
      }}>
      { genre }
      </Box>
    </GamesLayout>
  )
}
