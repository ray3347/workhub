import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function RatesList() {
  const [index, setIndex] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Duration</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index}
          label="Duration"
          onChange={handleChange}
        >
          <MenuItem value={10}>Top-Rated</MenuItem>
          <MenuItem value={20}>Nearest</MenuItem>
          <MenuItem value={30}>Popularity</MenuItem>
          <MenuItem value={40}>Trending</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default RatesList;