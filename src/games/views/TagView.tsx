import { Box } from "@mui/material";
import { useParams } from "react-router";
import { GamesLayout } from "../../components/Layouts"


export const TagView = () => {

  const params = useParams();

  const { tag } = params;

  console.log(tag)

  return (
    <GamesLayout>
      <Box sx={{
        padding: '60px',
        // background: `radial-gradient(rgba(24, 26, 33, 0.7) 0%, #181a21 100%)  , url(${ data?.background_image }) no-repeat center `,
        backgroundSize: '100% 100%',
        height: '100vh',
        // marginTop: '-20px'
      }}>
        { tag }
      </Box>
    </GamesLayout>
  )
}