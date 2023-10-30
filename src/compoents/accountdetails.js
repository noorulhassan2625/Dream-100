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
    <Box className='profile-data mt-3'>
      <div className='row'>

   <div className='col-md-6 text-field-info'>
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
             
            }
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      </div>
      <div className='col-md-6 text-field-info'>
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
             
            }
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
         </div>
         <div className='col-md-4 text-field-info'>
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
             
            }
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      </div>
      <div className='col-md-4 text-field-info'>
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
             
            }
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      </div>
      <div className='col-md-4 text-field-info'>
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
             
            }
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      </div>
      <div className='col-md-12 text-field-info2'>
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
             
            }
          },
        }}
        sx={{ m: 1, width: '100%' }}
      />
      </div>
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
             
            }
          },
        }}
        sx={{ m: 1, width: '100%' }}
        className='p-0'
      />
   </div>
    </Box>
  );
}
