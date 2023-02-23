import { useContext } from "react";
import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, ToggleButton, ToggleButtonGroup } from "@mui/material"
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';
import { UiContext } from "../../context/ui";
import { Search } from "./Search";



export const CustomBar = () => {

    const { view, viewList, viewModule, infinite, setInfinite, order, orderBy} = useContext( UiContext )


    const handleOrderChange = (event: SelectChangeEvent<string>) => {
        orderBy(event.target.value);
    };

    const handleViewChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        event.preventDefault()
       if ( nextView === 'list' ) return viewList();

       viewModule()
      };
    


  return (
    <Box sx={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
      
    }}>

        <ToggleButtonGroup
        sx={{ padding:'15px 0', display:{xs:'none', lg:'block'} }}
            orientation="horizontal"
            value={view}
            exclusive
            onChange={handleViewChange}
            size="small"
        >
            <ToggleButton value="list" aria-label="list" >
                <ViewListIcon />
            </ToggleButton>
            <ToggleButton value="module" aria-label="module">
                <ViewModuleIcon />
            </ToggleButton>

        </ToggleButtonGroup>

        <Search />   

        <FormControl sx={{ width:'200px', marginTop:'-10px' }} size="small" variant="standard">
            <InputLabel id="demo-select-small" size='small'>Order</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
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



    </Box>

  )
}
