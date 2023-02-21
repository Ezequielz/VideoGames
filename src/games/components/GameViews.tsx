import { FC } from "react"
import { ListView, ListViewInfinite } from "../views";

interface Props {

    searchTerm:string;
    view:string;
    orderBy:string;
    infinite:boolean;
    selectedGenres:string[];
    selectedPublishers:string[];
    selectedPlatform:string[];
    selectedTags:string[];
}


export const GameViews:FC<Props> = ({searchTerm, view, orderBy, infinite,selectedGenres, selectedPublishers, selectedPlatform, selectedTags}) => {
  return (
    <>
    
        {
            infinite 
            ?(

                <ListViewInfinite
                    selectedGenres={selectedGenres} 
                    selectedPlatform={selectedPlatform} 
                    selectedTags={selectedTags} 
                    selectedPublishers={selectedPublishers}
                    view={view} 
                    searchTerm={searchTerm}
                    order={orderBy}
                />
                )
                :(
                <ListView
                    selectedGenres={selectedGenres} 
                    selectedPlatform={selectedPlatform} 
                    selectedTags={selectedTags} 
                    selectedPublishers={selectedPublishers} 
                    view={view}
                    searchTerm={searchTerm}
                    order={orderBy}
                />

            )
        }
    
    
    </>
  )
}
