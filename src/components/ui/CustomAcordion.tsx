import { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Genre } from "../../games/interfaces/genres";



interface Props {
    title: string;
    array: Genre[];
    selected: string[];
    onChanged: (Slug: string ) => void;
}


export const CustomAcordion: FC<Props> = ({ title, array, onChanged, selected }) => {

  return (
    <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
            <Typography>{ title }</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {
            array.map( arr => (
                    <Box 
                        className={`${selected.includes( (arr.id).toString() ) ? 'filter_active': 'filter'}`}
                        key={arr.id}
                        onClick={ () => onChanged(title = 'Platform' ? (arr.id).toString() : arr.slug ) }
                        sx={{
                        margin:'3px 1px'
                        }}
                    >

                        <Typography>
                        {arr.name}
                        </Typography>
                    </Box>

                ))
        }
        </AccordionDetails>
    </Accordion>
  )
}
