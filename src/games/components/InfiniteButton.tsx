import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext } from 'react'
import { UiContext } from '../../context/ui';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import Filter1OutlinedIcon from '@mui/icons-material/Filter1Outlined';

export const InfiniteButton = () => {
    const { infinite, setInfinite } = useContext( UiContext );

    const handleInfiniteChange = (event: React.MouseEvent<HTMLElement>, infinite: boolean) => {
        setInfinite(infinite);
      };
  return (
    
    <ToggleButtonGroup
    sx={{ padding:'15px 0' }}
        orientation="horizontal"
        value={infinite}
        exclusive
        onChange={handleInfiniteChange}
        size="small"
    >
        <ToggleButton value={true} aria-label="infinite">
            <AllInclusiveIcon />
        </ToggleButton>
        <ToggleButton value={false} aria-label="pagination">
            <Filter1OutlinedIcon />
        </ToggleButton>


    </ToggleButtonGroup>
  )
}
