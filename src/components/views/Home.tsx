
import { FC, useState, useCallback } from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { SearchOutlined } from '@mui/icons-material';
import { GamesLayout } from '../Layouts';
import { ListView, ListViewInfinite } from '../../games/views';
import { Sidebar } from '../ui';
import debounce from "just-debounce-it";

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';


export const Home: FC = () => {

const [infinite, setInfinite] = useState(false)
const [view, setView] = useState('module');

const [orderBy, setOrderBy] = useState('');

const handleOrderChange = (event: SelectChangeEvent<string>) => {
    setOrderBy(event.target.value);
};

const [search, setSearch] = useState('')
const [searchTerm, setSearchTerm] = useState('')

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

const debouncedGetGame = useCallback(
    debounce((search: string) => {
    console.log('search', search)
    setSearchTerm(search);
}, 300)
, [searchTerm]
)

const onSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {

    const newSearch = e.target.value;
    if ( newSearch.startsWith(' ') ) return
    setSearch(newSearch);
    debouncedGetGame(newSearch)

}

  
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
                         value={ search }
                        //  onChange={ (e) => setSearchTerm( e.target.value ) }
                         onChange={ onSearchTerm }
                        //  onKeyPress={ (e)=> e.key === 'Enter' ? onSearchTerm() : null }
                        //  onKeyPress={ onSearchTerm }
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

                    <FormControl sx={{ width:'200px' }}>
                    <InputLabel id="demo-simple-select-label">Order</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={orderBy}
                            label="Order"
                            onChange={handleOrderChange}
                        >
                            <MenuItem value={'name'}>Name A-Z </MenuItem>
                            <MenuItem value={'-name'}>Name Z-A </MenuItem>
                            <MenuItem value={'released'}>Released -+</MenuItem>
                            <MenuItem value={'-released'}>Released +-</MenuItem>
                            <MenuItem value={''}>Default</MenuItem>
                        </Select>
                    </FormControl>


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
                            searchTerm={searchTerm}
                            order={orderBy}
                        />
                        )
                        :(
                        <ListView
                            selectedGenres={selectedGenres} 
                            selectedPlatform={selectedPlatform} 
                            selectedTags={selectedTags} 
                            selectedPublishers={selectedPublishers} 
                            view={view}
                            searchTerm={searchTerm}
                            order={orderBy}
                        />

                    )
                }
            </Box>
        </Box>
      </GamesLayout>
  )
}