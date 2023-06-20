import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function PaymentList() {
  const [index, setIndex] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Options</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index}
          label="Payment Options"
          onChange={handleChange}
        >
          <MenuItem value={10}>Gopay</MenuItem>
          <MenuItem value={20}>OVO</MenuItem>
          <MenuItem value={30}>Dana</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default PaymentList;