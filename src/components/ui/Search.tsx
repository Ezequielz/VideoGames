import { useCallback, useContext, useState } from 'react'
import { SearchOutlined } from '@mui/icons-material'
import { IconButton, Input, InputAdornment } from '@mui/material'
import debounce from 'just-debounce-it'

import { FiltersContext } from '../../context/filters'


export const Search = () => {

    const { search, setSearch } = useContext( FiltersContext )
    const [ searchTerm, setSearchTerm ] = useState('')

    const onSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {

        const newSearch = e.target.value;
        if ( newSearch.startsWith(' ') ) return
        setSearchTerm(newSearch);
        debouncedGetGame(newSearch)

    }

    const debouncedGetGame = useCallback(
        debounce((search: string) => {
        // console.log('search', search)
        setSearch(search);
    }, 300)
    , [search]
    )
  return (
    <>
        <Input
            // sx={{ display: { xs: 'none', sm: 'flex'} }}
           
            className='fadeIn search'
            autoFocus
            value={ searchTerm }
            onChange={ onSearchTerm }
            type='text'
            placeholder="Search Game..."
            endAdornment={
                <InputAdornment position="end">
                  
                    <SearchOutlined />
                  
                </InputAdornment>
            }
        />
    </>
  )
}
