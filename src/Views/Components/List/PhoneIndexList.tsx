import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function PhoneIndexList() {
  const [index, setIndex] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">+XX</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index}
          label="+XX"
          onChange={handleChange}
        >
          <MenuItem value={10}>+62</MenuItem>
          <MenuItem value={20}>+63</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default PhoneIndexList;