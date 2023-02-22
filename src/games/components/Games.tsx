import { Box } from "@mui/material"
import { FC } from "react"
import { GameViews } from './GameViews';



interface Props {
    setSearchTerm: (search:string) => void;
    searchTerm:string;
    selectedGenres:string[];
    selectedPublishers:string[];
    selectedPlatform:string[];
    selectedTags:string[];
}


export const Games:FC<Props> = ({ setSearchTerm, searchTerm,selectedGenres, selectedPublishers, selectedPlatform, selectedTags}) => {

  
  return (
    <Box>

        <GameViews
            searchTerm={searchTerm}
            selectedGenres={selectedGenres}
            selectedPublishers={selectedPublishers}
            selectedPlatform={selectedPlatform}
            selectedTags={selectedTags}
        />

    </Box>


  )
}
