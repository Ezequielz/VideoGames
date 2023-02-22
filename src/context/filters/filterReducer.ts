
import { FiltersState } from './';


    //  {
    //     "Genres": "[]",
    //     "Publishers": "[]",
    //     "Tags": "[]",
    //     "Platform": "[]",
    //     "Search: "",
    //   },

   type FiltersActionType = 
   | { type: '[Filters] - Genre', payload: string  }
   | { type: '[Filters] - Platform', payload: string  }
   | { type: '[Filters] - Tag', payload: string  }
   | { type: '[Filters] - Publisher', payload: string  }
   | { type: '[Filters] - Search', payload: string  }
   | { type: '[Filters] - Clean'  }


   export const FiltersReducer = ( state: FiltersState, action: FiltersActionType ): FiltersState => {
   
      switch ( action.type ) {
        
       case '[Filters] - Genre':
                return {
                    ...state,
                        selectedGenres: state.selectedGenres.includes( action.payload )
                                ? state.selectedGenres.filter( genre => genre !== action.payload )
                                : [...state.selectedGenres, action.payload]
                }

       case '[Filters] - Publisher':
                return {
                    ...state,
                        selectedPublishers: state.selectedPublishers.includes( action.payload )
                                ? state.selectedPublishers.filter( publisher => publisher !== action.payload )
                                : [...state.selectedPublishers, action.payload]
                }

       case '[Filters] - Tag':
                return {
                    ...state,
                        selectedTags: state.selectedTags.includes( action.payload )
                                ? state.selectedTags.filter( tag => tag !== action.payload )
                                : [...state.selectedTags, action.payload]
                }

       case '[Filters] - Platform':
                return {
                    ...state,
                        selectedPlatform: state.selectedPlatform.includes( action.payload )
                                ? state.selectedPlatform.filter( platform => platform !== action.payload )
                                : [...state.selectedPlatform, action.payload]
                }

       case '[Filters] - Search':
                return {
                    ...state,
                    search: action.payload
                }        

       case '[Filters] - Clean':
               return {
                   ...state,
                    selectedGenres: [],
                    selectedPublishers: [],
                    selectedTags: [],
                    selectedPlatform: []
               }

           default:
               return state;
       }
   };