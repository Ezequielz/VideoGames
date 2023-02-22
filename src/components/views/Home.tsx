
import { FC, useState } from 'react';
import { Box } from '@mui/material';

import { GamesLayout } from '../Layouts';
import { AppBar, Sidebar } from '../ui';
import { Games } from '../../games/components';
import { useFilters } from '../../games/hooks';





export const Home: FC = () => {

   
const [searchTerm, setSearchTerm] = useState('')

const { onGenreChanged,onPlatformChanged,onPublisherChanged,onTagChanged,
    selectedGenres,selectedPlatform,selectedPublishers,selectedTags } = useFilters()

  return (
      <GamesLayout>


        <Box sx={{ display:'flex', padding:'80px ' }}>
            
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

                <Box
                    sx={{ 
                        width: `calc( 100vw - 250px )`,
                        padding: '10px'
                    }}
                >
                    
                    <AppBar 
                        setSearchTerm={setSearchTerm}
                        searchTerm={searchTerm}
                    />
            
                    <Games 
                        setSearchTerm={setSearchTerm}
                        searchTerm={searchTerm}
                        selectedGenres={selectedGenres}
                        selectedPublishers={selectedPublishers}
                        selectedPlatform={selectedPlatform}
                        selectedTags={selectedTags}

                    />
                </Box>

        </Box>
      </GamesLayout>
  )
}