import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function MyForm() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box  sx={{ display: 'flex', flexWrap: 'wrap',  padding: '20px', borderRadius: '5px' }}>
      <TextField
        label="First Name"
        id="first-name"
        variant="outlined"
        InputProps={{
          style: {
            color: 'white',
          },
          sx: {
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      <TextField
        label="Last Name"
        id="last-name"
        variant="outlined"
        InputProps={{
          style: {
            color: 'white',
          },
          sx: {
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      <TextField
        label="Email"
        id="email"
        variant="outlined"
        InputProps={{
          style: {
            color: 'white',
          },
          sx: {
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      <TextField
        label="Phone No."
        id="phone"
        variant="outlined"
        InputProps={{
          style: {
            color: 'white',
          },
          sx: {
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      <TextField
        label="Date of Birth"
        id="date-of-birth"
        variant="outlined"
        InputProps={{
          style: {
            color: 'white',
          },
          sx: {
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      <TextField
        label="Address"
        id="address"
        variant="outlined"
        InputProps={{
          style: {
            color: 'white',
          },
          sx: {
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      <TextField
        label="Personal Bio"
        id="personal-bio"
        variant="outlined"
        multiline
        rows={4}
        InputProps={{
          style: {
            color: 'white',
          },
          sx: {
            '& fieldset': {
              borderColor: 'white',
            },
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
    </Box>
  );
}
