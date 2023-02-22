import { FC, useCallback, useContext, useState } from "react";
import { Box, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, Select, SelectChangeEvent, ToggleButton, ToggleButtonGroup } from "@mui/material"
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import { SearchOutlined } from "@mui/icons-material";
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import debounce from "just-debounce-it";
import { UiContext } from "../../context/ui";
import { FiltersContext } from '../../context/filters/FiltersContext';



export const AppBar = () => {

    const { view, viewList, viewModule, infinite, setInfinite, order, orderBy} = useContext( UiContext )
    const { search, setSearch } = useContext( FiltersContext )
    const [ searchTerm, setSearchTerm ] = useState('')

    const handleOrderChange = (event: SelectChangeEvent<string>) => {
        orderBy(event.target.value);
    };

    const handleViewChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        event.preventDefault()
       if ( nextView === 'list' ) return viewList();

       viewModule()
      };
    
    const handleInfiniteChange = (event: React.MouseEvent<HTMLElement>, infinite: boolean) => {
        setInfinite(infinite);
      };

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
            <ToggleButton value="list" aria-label="list" >
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
             value={ searchTerm }
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
                value={order}
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

  )
}
