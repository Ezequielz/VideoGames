import { useState } from 'react';

export function useFilters() {

    const [selectedGenres, setSelectedGenres] = useState<string[]>([])
    const [selectedPublishers, setSelectedPublishers] = useState<string[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
      
    const [selectedPlatform, setSelectedPlatform] = useState<string[]>([])
    
    const onPublisherChanged = (publisherSlug: string) => {
        ( selectedPublishers.includes( publisherSlug ) )
        ? setSelectedPublishers( selectedPublishers.filter( publisher => publisher !== publisherSlug ) )
        : setSelectedPublishers([...selectedPublishers, publisherSlug]);
    }
    const onGenreChanged = (genreSlug: string) => {
        ( selectedGenres.includes( genreSlug ) )
        ? setSelectedGenres( selectedGenres.filter( genre => genre !== genreSlug ) )
        : setSelectedGenres([...selectedGenres, genreSlug]);
    }
    
    const onPlatformChanged = (platformID: string) => {
        ( selectedPlatform.includes( platformID ) )
        ? setSelectedPlatform( selectedPlatform.filter( platform => platform !== platformID ) )
        : setSelectedPlatform([...selectedPlatform, platformID]);
    }
    
    const onTagChanged = (tagSlug: string) => {
        ( selectedTags.includes( tagSlug ) )
        ? setSelectedTags( selectedTags.filter( tag => tag !== tagSlug ) )
        : setSelectedTags([...selectedTags, tagSlug]);
    }
    
        return {
            selectedGenres,
            selectedPublishers,
            selectedTags,
            selectedPlatform,
            onPublisherChanged,
            onGenreChanged,
            onPlatformChanged,
            onTagChanged,
        }
    
    
    }