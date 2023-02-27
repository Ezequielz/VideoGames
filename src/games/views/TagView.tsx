import { Box, Typography } from "@mui/material";
import { useParams } from "react-router";
import { GamesLayout } from "../../components/Layouts"
import { CustomBar } from "../../components/ui";
import { Games } from "../components";
import { motion } from 'framer-motion';


export const TagView = () => {

  const params = useParams();

  const { tag } = params;

  // console.log(tag)

  return (
    <GamesLayout>
        <Box sx={{ padding:'80px 0 0 0', width:'100%', textAlign:'center' }}>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.1,
              // ease: [0, 0.71, 0.2, 1.01]
            }}
          >
         

              <Typography variant='h1' sx={{fontSize:{xs:'2rem',lg:'5rem'}}}>Games Of {tag}</Typography>
           
          </motion.div>

        </Box>

        <Box sx={{ padding:{xs:'20px',sm:'60px'}}}>
          <CustomBar />
          <Games />

        </Box>
    </GamesLayout>
  )
}