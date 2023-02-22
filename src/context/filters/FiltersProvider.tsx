import { FC, useReducer } from 'react';

import { FiltersContext , FiltersReducer} from './';

export interface FiltersState {
    selectedGenres: string[];
    selectedPublishers: string[];
    selectedTags: string[];
    selectedPlatform: string[];
    search: string;
}


const FILTERS_INITIAL_STATE: FiltersState = {
    selectedGenres: [],
    selectedPublishers: [],
    selectedTags: [],
    selectedPlatform: [],
    search: '',
}

interface Props {
   children?: React.ReactNode
}


export const FiltersProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer( FiltersReducer, FILTERS_INITIAL_STATE );

   const setSelectedGenres = ( genre:string ) => {
    dispatch({ type: '[Filters] - Genre', payload: genre })
   };
   const setSelectedPublishers = ( publisher:string ) => {
    dispatch({ type: '[Filters] - Publisher', payload: publisher })
   };
   const setSelectedTags = ( tag:string ) => {
    dispatch({ type: '[Filters] - Tag', payload: tag })
   };
   const setSelectedPlatform = ( platform:string ) => {
    dispatch({ type: '[Filters] - Platform', payload: platform })
   };
   const setSearch = ( search:string ) => {
    dispatch({ type: '[Filters] - Search', payload: search })
   };
   

   return (
       <FiltersContext.Provider value={{
          ...state,


          // Methods
          setSelectedGenres,
          setSelectedPublishers,
          setSelectedTags,
          setSelectedPlatform,
          setSearch,
       }} >
         { children }
       </FiltersContext.Provider>
   )
};