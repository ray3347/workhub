import EmailIcon from '@mui/icons-material/Email';
import { Box, TextField } from '@mui/material';
import React from 'react'

function EmailBig(){
    return(
        <Box sx={{ display: 'flex', alignItems: 'flex-end', maxWidth: 632 }}>
            <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField id="nameInput" label="Email" variant="standard" sx={{width: 832}} />
        </Box>
    );
}

export default EmailBig;