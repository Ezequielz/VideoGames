
import { FC, useState } from 'react';
import { Box } from '@mui/material';

import { GamesLayout } from '../Layouts';
import { ListView, ListViewInfinite } from '../../games/views';
import { Sidebar } from '../ui';




export const Home: FC = () => {

const [infinite, setInfinite] = useState(true)

const [selectedGenres, setSelectedGenres] = useState<string[]>([])
const [selectedTags, setSelectedTags] = useState<string[]>([])
const [selectedPublishers, setSelectedPublishers] = useState<string[]>([])
const [selectedPlatform, setSelectedPlatform] = useState<number[]>([])

const onGenreChanged = (genreSlug: string) => {
    ( selectedGenres.includes( genreSlug ) )
    ? setSelectedGenres( selectedGenres.filter( genre => genre !== genreSlug ) )
    : setSelectedGenres([...selectedGenres, genreSlug]);
}
const onPlatformChanged = (platformID: number) => {
    ( selectedPlatform.includes( platformID ) )
    ? setSelectedPlatform( selectedPlatform.filter( platform => platform !== platformID ) )
    : setSelectedPlatform([...selectedPlatform, platformID]);
}

const onTagChanged = (tagSlug: string) => {
    ( selectedTags.includes( tagSlug ) )
    ? setSelectedTags( selectedTags.filter( tag => tag !== tagSlug ) )
    : setSelectedTags([...selectedTags, tagSlug]);
}

const onPublisherChanged = (publisherSlug: string) => {
    ( selectedPublishers.includes( publisherSlug ) )
    ? setSelectedPublishers( selectedPublishers.filter( publisher => publisher !== publisherSlug ) )
    : setSelectedPublishers([...selectedPublishers, publisherSlug]);
}

const spaceToFilters = '250px'
  
  return (
      <GamesLayout>
        <Box sx={{ display:'flex', padding:'80px ' }}>

            <Box 
                sx={{
                    width: `${spaceToFilters}`,
                    padding: '20px'
                }}
            >

                <Sidebar                     
                    selectedGenres={selectedGenres} 
                    onGenreChange={ (genreSlug) => onGenreChanged(genreSlug) }
                    selectedPlatform={selectedPlatform} 
                    onPlatformChanged={ (platformID) => onPlatformChanged(platformID) }
                    selectedTags={selectedTags} 
                    onTagChanged={ (tagSlug) => onTagChanged(tagSlug) }
                    selectedPublishers={selectedPublishers} 
                    onPublisherChanged={ (publisherSlug) => onPublisherChanged(publisherSlug) }
                />
            </Box>

            <Box
                sx={{ 
                    width: `calc( 100vw - ${ spaceToFilters } )`,
                    padding: '20px'
                }}
            >
                {
                    infinite
                    ?(

                        <ListViewInfinite
                            selectedGenres={selectedGenres} 
                            selectedPlatform={selectedPlatform} 
                            selectedTags={selectedTags} 
                            selectedPublishers={selectedPublishers} 
                        />
                        )
                        :(
                        <ListView
                            selectedGenres={selectedGenres} 
                            selectedPlatform={selectedPlatform} 
                            selectedTags={selectedTags} 
                            selectedPublishers={selectedPublishers} 
                        />

                    )
                }
            </Box>
        </Box>
      </GamesLayout>
  )
}