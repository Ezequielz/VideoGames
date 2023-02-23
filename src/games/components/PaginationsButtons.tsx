import { FC } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { Box, Button, Typography } from "@mui/material"
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { InfiniteButton } from "./InfiniteButton";
import { Games } from "../interfaces";

interface Props {
    prevPage: () => void;
    nextPage: () => void;
    page: string | number;
    gamesQuery: UseQueryResult<Games, unknown>;
}

export const PaginationsButtons: FC<Props> = ({gamesQuery,page,nextPage,prevPage}) => {

  return (
   
        <Box sx={{
            display:'flex',
            alignItems:'center',
            justifyContent:'end'
        }}>
            <Button
            onClick={ prevPage }
            disabled={ gamesQuery.isFetching }
            > <NavigateBeforeIcon />
            </Button>
            
            <Typography> {page} </Typography>

            <Button
            onClick={ nextPage }
            disabled={ gamesQuery.isFetching }
            ><NavigateNextIcon />
            </Button>


           <InfiniteButton /> 

        </Box>
 
  )
}
