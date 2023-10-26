import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import logo from '../../../src/media/images/d100Logo.png'
import DLogo from '../../../src/media/images/D-Logo.png'
import google from '../../../src/media/images/google.png'
import Facebook from '../../../src/media/images/facebook.png'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Grid className='main-box' container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={8}
        >
        <div className=' text-center position-relative logo-box'>
        <img width={'350px'}  src={logo} alt={logo} />
        </div>
          </Grid>
        <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square  className='side-panel'>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
            className={'side-box my-0'}
          >
                   <div className='logo-img'>
        <img width={'80px'} className='pe-3 mb-2' src={DLogo} alt={DLogo} />
        </div>
            <Typography className='text-white mt-4 mb-3' component="h1" variant="h5">
              <p className="h1">Sign in to Dream-100</p>
            </Typography>
            <Box className='w-100' component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div>
              <div className='form-data text-center'>
              <div className='my-4 via-btn box'>

              
            <a className=" mx-auto pop">
               <img width={'25px'} className='me-2' src={google} alt={google} />
           Login with Google
        </a>
        </div>
              </div>
<div className='form-data text-center'>
       <div className='my-4 via-btn box'>

        <a 
          className="mx-auto mt-3 pop"
          >
          <img width={'25px'} className='me-2' src={Facebook} alt={Facebook} /> Login with Facebook
        </a>
          </div>
              </div>
          <hr className="style3 my-4"></hr>
        <form className='login-signUp-form'>
        <div className='form-data text-center'>
       <div className='my-3 via-btn inputValue'>
              <input type='email' placeholder='Enter Your Email...' className='pop py-1 form-control bg-transparent text-white border-0' autocomplete='off'/>
          </div>
              </div>

              <div className='form-data text-center'>
                  <div className='my-4 via-btn   box'>
                    <Link className="text-decoration-none" to={'/dashboard'}>
                      <p className="mx-auto my-1  pop">
                        Sign in with email
                      </p>
                    </Link>

                  </div>
                </div>
        </form>
            <div>
              <p className='h4 text-white text-center pop'>OR</p>
            </div>
        <div className="text-center">
          <Link className="font-time-sg  text-white" to={'/SignUp'}>
            <p>
            Want to make a new account!
            </p>
          </Link>
        </div>
        {/* <div className="text-center">
          <a className="font-time" href="#">
            Create an Account!
          </a>
        </div> */}
      </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
  );
}