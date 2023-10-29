import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectScripts() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl className='via-btn ps-2' fullWidth>
      <InputLabel id="demo-simple-select-label" className='text-white label animate-label'>Select Scripts</InputLabel>
      <Select
        labelId="demo-simple-select-l abel"
        id="demo-simple-select"
        value={age}
       
        onChange={handleChange}
        className='text-white home-select px-2'
      >
                 <MenuItem value={10}>Script 1</MenuItem>
          <MenuItem value={20}>Script 2</MenuItem>
          <MenuItem value={30}>Script 3</MenuItem>
        {/* <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  </Box>
  );
}
