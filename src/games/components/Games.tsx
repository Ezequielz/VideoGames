import { Box } from "@mui/material"
import { FC } from "react"
import { GameViews } from './GameViews';



interface Props {
    setSearchTerm: (search:string) => void;
    searchTerm:string;
}


export const Games:FC<Props> = ({ setSearchTerm, searchTerm }) => {

  
  return (
    <Box>

        <GameViews
            searchTerm={searchTerm}

        />

    </Box>


  )
}
