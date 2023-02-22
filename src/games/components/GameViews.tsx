import { useContext } from 'react';

import { UiContext } from '../../context/ui';
import { ListView, ListViewInfinite } from "../views";


export const GameViews = () => {
    const { infinite } = useContext( UiContext );
 
  return (
    <>
        {
            infinite 
            ?(<ListViewInfinite />)
            :(<ListView />)
        }
    </>
  )
}
