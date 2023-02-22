import { createContext } from 'react';


interface ContextProps {
    Genres: string[];
    Publishers: string[];
    Tags: string[];
    Platform: string[];
}


export const FiltersContext = createContext({} as ContextProps );