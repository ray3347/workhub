import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';

function EmailText() {
  return (
      <TextField
        fullWidth
        id="input-with-icon-textfield"
        label="Email Address"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon/>
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
  );
}

export default EmailText;
