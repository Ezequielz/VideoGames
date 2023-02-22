import { FC, useContext } from 'react';
import { UiContext } from '../../context/ui';
import { ListView, ListViewInfinite } from "../views";

interface Props {

    searchTerm:string;

}


export const GameViews:FC<Props> = ({ searchTerm }) => {
    const { infinite } = useContext( UiContext )
  return (
    <>
    
        {
            infinite 
            ?(

                <ListViewInfinite

                    searchTerm={searchTerm}
                  
                />
                )
                :(
                <ListView

                    searchTerm={searchTerm}
                  
                />

            )
        }
    
    
    </>
  )
}
