import { createContext } from 'react';



interface ContextProps {
    selectedGenres: string[];
    selectedPublishers: string[];
    selectedTags: string[];
    selectedPlatform: string[];

    // Methods
    setSelectedGenres: (genre: string) => void;
    setSelectedPublishers: (publisher: string) => void;
    setSelectedTags: (tag: string) => void;
    setSelectedPlatform: (platform: string) => void;
    search: (search: string) => void;
}


export const FiltersContext = createContext({} as ContextProps );