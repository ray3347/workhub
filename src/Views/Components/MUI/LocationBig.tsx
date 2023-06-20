import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Box, TextField } from '@mui/material';
import React from 'react'

function LocationBig(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 632}}>
            <LocationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="nameInput" label="Location" variant="standard" sx={{width: 832}} />
        </Box>
    );
}

export default LocationBig;