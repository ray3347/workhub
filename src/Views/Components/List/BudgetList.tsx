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

const budgets = [
  '$',
  '$$',
  '$$$',
  '$$$$'
];

function getStyles(name: string, budgetName: string[], theme: Theme) {
  return {
    fontWeight:
      budgetName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function BudgetList() {
  const theme = useTheme();
  const [budgetName, setbudgetName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof budgetName>) => {
    const {
      target: { value },
    } = event;
    setbudgetName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-multiple-name-label">Budget</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={budgetName}
          onChange={handleChange}
          input={<OutlinedInput label="Budget" />}
          MenuProps={MenuProps}
        >
          {budgets.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, budgetName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default BudgetList;