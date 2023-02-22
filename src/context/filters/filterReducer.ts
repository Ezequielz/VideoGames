import { FiltersState } from './';


   type FiltersActionType = 
   | { type: '[Filters] - ActionName'  }


   export const FiltersReducer = ( state: FiltersState, action: FiltersActionType ): FiltersState => {
   
      switch ( action.type ) {
       case '[Filters] - ActionName':
               return {
                   ...state,
               }

           default:
               return state;
       }
   };