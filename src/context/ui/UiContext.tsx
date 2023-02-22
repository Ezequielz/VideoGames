import { createContext } from 'react';


interface ContextProps {
   view: string;
   order?:string;
   infinite?:boolean;
   theme?:string;  
   
   
    viewModule: () => void,
    viewList: () => void,
    orderBy: (order:string) => void,
    setInfinite: (infinite:boolean) => void,
    setTheme: (theme:string) => void,
}


export const UiContext = createContext({} as ContextProps );