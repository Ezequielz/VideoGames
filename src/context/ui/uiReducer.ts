import { UiState } from './';

    //  {
    //     "view": "module",
    //     "order": "",
    //     "infinite": false,
    //     "theme": "dark"
    //   }

   type UiActionType = 
   | { type: '[Ui] - View List'  }
   | { type: '[Ui] - View Module'  }
   | { type: '[Ui] - Order', payload: string  }
   | { type: '[Ui] - Infinite', payload: boolean  }
   | { type: '[Ui] - Theme', payload: string  }


   export const UiReducer = ( state: UiState, action: UiActionType ): UiState => {
   
      switch ( action.type ) {
       case '[Ui] - View List':
               return {
                   ...state,
                   view: 'list'
               }
       case '[Ui] - View Module':
               return {
                   ...state,
                   view: 'module'
               }
       case '[Ui] - Order':
               return {
                   ...state,
                   order: action.payload
               }
       case '[Ui] - Infinite':
               return {
                   ...state,
                   infinite: action.payload
               }
       case '[Ui] - Theme':
               return {
                   ...state,
                   theme: action.payload
               }

           default:
               return state;
       }
   };