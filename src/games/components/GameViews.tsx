import { FC, useContext } from 'react';
import { UiContext } from '../../context/ui';
import { ListView, ListViewInfinite } from "../views";

interface Props {

    searchTerm:string;
    selectedGenres:string[];
    selectedPublishers:string[];
    selectedPlatform:string[];
    selectedTags:string[];
}


export const GameViews:FC<Props> = ({searchTerm,selectedGenres, selectedPublishers, selectedPlatform, selectedTags}) => {
    const { infinite } = useContext( UiContext )
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
                    searchTerm={searchTerm}
                  
                />
                )
                :(
                <ListView
                    selectedGenres={selectedGenres} 
                    selectedPlatform={selectedPlatform} 
                    selectedTags={selectedTags} 
                    selectedPublishers={selectedPublishers} 
                    searchTerm={searchTerm}
                  
                />

            )
        }
    
    
    </>
  )
}
