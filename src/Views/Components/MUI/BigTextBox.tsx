import { AccountCircle } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import React from 'react'

function BigTextBox(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 500 }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="nameInput" label="Name" variant="standard" sx={{width: 500}} />
        </Box>
    );
}

export default BigTextBox;