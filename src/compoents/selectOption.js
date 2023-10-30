import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box  className='basicSelect  text-end' sx={{ minWidth: 120 }}>
    <FormControl className='selecting-option  ps-2' fullWidth>
      <InputLabel id="demo-simple-select-label" className='text-white label animate-label'>Select Menu</InputLabel>
      <Select
        labelId="demo-simple-select-l abel"
        id="demo-simple-select"
        value={age}
       
        onChange={handleChange}
        className='text-white home-select px-2'
      >
                 <MenuItem value={10}>Facebook</MenuItem>
          <MenuItem value={20}>Instagram</MenuItem>
          <MenuItem value={30}>Twitter</MenuItem>
          <MenuItem value={40}>LinkedIn</MenuItem>
          <MenuItem value={50}>Youtube</MenuItem>
          <MenuItem value={60}>Pinterest</MenuItem>
        {/* <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  </Box>
  );
}
