import EditNoteIcon from '@mui/icons-material/EditNote';
import { Box, TextField } from '@mui/material';
import React from 'react'

function DescriptionBig(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 632 }}>
            <EditNoteIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="nameInput" label="Description" variant="outlined" sx={{width: 832}} multiline rows={4}/>
        </Box>
    );
}

export default DescriptionBig;