import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

const locations = [
  'DKI Jakarta',
  'Surabaya',
  'Tangerang',
  'DI Yogyakarta',
  'Semarang',
  'Medan'
];

function getStyles(name: string, locationName: string[], theme: Theme) {
  return {
    fontWeight:
      locationName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function LocationList() {
  const theme = useTheme();
  const [locationName, setlocationName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof locationName>) => {
    const {
      target: { value },
    } = event;
    setlocationName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Location</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={locationName}
          onChange={handleChange}
          input={<OutlinedInput label="Location" />}
          MenuProps={MenuProps}
        >
          {locations.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, locationName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default LocationList;