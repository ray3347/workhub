import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function PronounsList() {
  const [index, setIndex] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setIndex(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Pronouns</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index}
          label="Pronouns"
          onChange={handleChange}
        >
          <MenuItem value={10}>Mrs.</MenuItem>
          <MenuItem value={20}>Mr.</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default PronounsList;