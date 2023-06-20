import PhoneIcon from '@mui/icons-material/Phone';
import { Box, TextField } from '@mui/material';
import React from 'react'

function PhoneNumberBig(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 500}}>
            <PhoneIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="nameInput" label="Phone Number" variant="standard" sx={{width: 500}} />
        </Box>
    );
}

export default PhoneNumberBig;