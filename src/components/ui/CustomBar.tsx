import { useContext } from "react";
import { Box, SelectChangeEvent, ToggleButton, ToggleButtonGroup } from "@mui/material"
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { UiContext } from "../../context/ui";
import { Search } from "./Search";



export const CustomBar = () => {

    const { view, viewList, viewModule } = useContext( UiContext )




    const handleViewChange = (event: React.MouseEvent<HTMLElement>, nextView: string) => {
        event.preventDefault()
       if ( nextView === 'list' ) return viewList();

       viewModule()
      };
    


  return (
    <Box sx={{
        display:'flex',
        // justifyContent:'space-between',
        gap:'30px',
        alignItems:'center',
        textAlign:'center',
        padding:{xs:'10px', lg:'0'},
        minWidth:'60vw',
        
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

        <Box />

    </Box>

  )
}
