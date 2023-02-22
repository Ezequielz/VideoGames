import { FC, useReducer } from 'react';

import { UiContext , UiReducer} from './';

export interface UiState {
    view: string;
    order?:string;
    infinite?:boolean;
    theme?:string;    
}


const Ui_INITIAL_STATE: UiState = {
    view:'module',
    order:'',
    infinite:false,
    theme: 'dark'
}

interface Props {
   children?: React.ReactNode
}


export const UiProvider:FC<Props> = ({ children }) => {


   const [state, dispatch] = useReducer( UiReducer, Ui_INITIAL_STATE );

   const viewModule = () => {
    dispatch({ type: '[Ui] - View Module' })
   };

   const viewList = () => {
    dispatch({ type: '[Ui] - View List' })
   };

   const orderBy = ( order:string ) => {
    dispatch({ type: '[Ui] - Order', payload: order })
   };
   
   const setInfinite = ( infinite:boolean ) => {
       dispatch({ type: '[Ui] - Infinite', payload: infinite})
    };
    
   const setTheme = ( theme:string ) => {
    dispatch({ type: '[Ui] - Theme', payload: theme })
   };


   return (
       <UiContext.Provider value={{
          ...state,


            // Methods
            viewModule,
            viewList,
            orderBy,
            setInfinite,
            setTheme,

       }} >
         { children }
       </UiContext.Provider>
   )
};