import { Box } from "@mui/material"
import { FC } from "react"
import { GameViews } from './GameViews';



interface Props {
    setOrderBy: (event:string) => void;
    setView: (event:string) => void;
    setSearchTerm: (search:string) => void;
    setInfinite: (event:boolean) => void;
    searchTerm:string;
    view:string;
    orderBy:string;
    infinite:boolean;
    selectedGenres:string[];
    selectedPublishers:string[];
    selectedPlatform:string[];
    selectedTags:string[];
}


export const Games:FC<Props> = ({setOrderBy, setView, setInfinite, setSearchTerm, searchTerm, view, orderBy, infinite,selectedGenres, selectedPublishers, selectedPlatform, selectedTags}) => {

  
  return (
    <Box>

        <GameViews
            searchTerm={searchTerm}
            view={view}
            orderBy={orderBy}
            infinite={infinite} 
            selectedGenres={selectedGenres}
            selectedPublishers={selectedPublishers}
            selectedPlatform={selectedPlatform}
            selectedTags={selectedTags}
        />

    </Box>


  )
}
