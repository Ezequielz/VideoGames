import { FC, useReducer } from 'react';

import { FiltersContext , FiltersReducer} from './';

export interface FiltersState {
    Genres: string[];
    Publishers: string[];
    Tags: string[];
    Platform: string[];

}


const FILTERS_INITIAL_STATE: FiltersState = {
    Genres: [],
    Publishers: [],
    Tags: [],
    Platform: [],

}

interface Props {
   children?: React.ReactNode
}


export const FiltersProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer( FiltersReducer, FILTERS_INITIAL_STATE );

   return (
       <FiltersContext.Provider value={{
          ...state
       }} >
         { children }
       </FiltersContext.Provider>
   )
};