
import { FC, useState } from 'react';
import { Box } from '@mui/material';
import { ClearOutlined, SearchOutlined } from '@mui/icons-material';
import { GamesLayout } from '../Layouts';
import { ListView, ListViewInfinite } from '../../games/views';
import { Sidebar } from '../ui';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';




export const Home: FC = () => {

const [infinite, setInfinite] = useState(false)
const [view, setView] = useState('module');

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

const handleViewChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
    setView(nextView);
  };

const handleInfiniteChange = (event: React.MouseEvent<HTMLElement>, infinite: boolean) => {
    setInfinite(infinite);
  };

  
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
                    padding: '10px'
                }}
            >

                <Box sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                  
                }}>

                    <ToggleButtonGroup
                    sx={{ padding:'15px 0' }}
                        orientation="horizontal"
                        value={view}
                        exclusive
                        onChange={handleViewChange}
                    >
                        <ToggleButton value="list" aria-label="list">
                            <ViewListIcon />
                        </ToggleButton>
                        <ToggleButton value="module" aria-label="module">
                            <ViewModuleIcon />
                        </ToggleButton>

                    </ToggleButtonGroup>

                   
                    <Input
                        sx={{ display: { xs: 'none', sm: 'flex', width:'50%'} }}
                        className='fadeIn'
                        autoFocus
                        //  value={ searchTerm }
                        //  onChange={ (e) => setSearchTerm( e.target.value ) }
                        //  onKeyPress={ (e)=> e.key === 'Enter' ? onSearchTerm() : null }
                        type='text'
                        placeholder="Search Game..."
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    //    onClick={ () => setIsSearchVisible(false) }
                                >
                                <SearchOutlined />
                                </IconButton>
                            </InputAdornment>
                        }
                    />

                    <ToggleButtonGroup
                    sx={{ padding:'15px 0' }}
                        orientation="horizontal"
                        value={infinite}
                        exclusive
                        onChange={handleInfiniteChange}
                    >
                        <ToggleButton value={true} aria-label="infinite">
                            <AllInclusiveIcon />
                        </ToggleButton>
                        <ToggleButton value={false} aria-label="pagination">
                            <Filter1OutlinedIcon />
                        </ToggleButton>


                    </ToggleButtonGroup>
                </Box>




                {
                    infinite 
                    ?(

                        <ListViewInfinite
                            selectedGenres={selectedGenres} 
                            selectedPlatform={selectedPlatform} 
                            selectedTags={selectedTags} 
                            selectedPublishers={selectedPublishers}
                            view={view} 
                        />
                        )
                        :(
                        <ListView
                            selectedGenres={selectedGenres} 
                            selectedPlatform={selectedPlatform} 
                            selectedTags={selectedTags} 
                            selectedPublishers={selectedPublishers} 
                            view={view}
                        />

                    )
                }
            </Box>
        </Box>
      </GamesLayout>
  )
}