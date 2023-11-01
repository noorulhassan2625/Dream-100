import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
// import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import  mainListItems  from '../../compoents/listItems';
import DLogo from '../../media/images/D-Logo.png';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CustomList from '../../compoents/list';
import InputFileUpload from '../../compoents/uploadFile';
import MainListItems from '../../compoents/listItems';
import { Button, Popover } from '@mui/material';
import UserImg from '../../media/images/user-img.jpg';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import PortraitOutlinedIcon from '@mui/icons-material/PortraitOutlined';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

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

const drawerWidth = 200;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const defaultTheme = createTheme();

export default function Home() {
  const [selected, setSelected] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleToggle = (value) => () => {
    const selectedIndex = selected.indexOf(value);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, value);
    } else {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }

    setSelected(newSelected);
  };

  const [age, setAge] = React.useState(10);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const items = [0, 1, 2, 3];


  

  const [popoverOpen, setPopoverOpen] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setPopoverOpen(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(null);
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }} className="bg-dark">
        <CssBaseline />

        <AppBar position="absolute" open={open} className='top-bar'>
          <Toolbar
            sx={{
              pr: '24px',
            }}
            className="top-toolbar"
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
              className='title-text'
              >
             Home
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsOutlinedIcon />
              </Badge>
            </IconButton>
            <div className='allInfo'>
              <Button
                variant="outlined"
                onClick={handlePopoverOpen}
                color="primary"
                className='allinfo-btn p-0 m-0 rounded-circle border-0'
              >
                <img className='rounded-circle' width={'40px'} src={UserImg} alt={UserImg} />
              </Button>
              <Popover
                open={Boolean(popoverOpen)}
                anchorEl={popoverOpen}
                onClose={handlePopoverClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
              >
                <Paper className='allinfo-selectOptions'>
                  <Link to='/mainprofile'>
                    <div className='allinfo-list'>
                      <div className='list-options'>
                        <div className='d-flex'>
                          <div>
                            <PortraitOutlinedIcon className="me-2" />
                          </div>
                          <div><p className='mb-0 pt-1'>Manage Profile</p></div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Paper>
              </Popover>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer className='left-side' variant="permanent" open={open}>
        <div className='text-center d-flex mx-auto position-absolute logo-img logo-img-inner'>
            <img width={'35px'} height={'35px'} src={DLogo} alt={DLogo} />
            <h5 className='esk-text'>esk</h5>
          </div>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
            className='left-side-toggler'
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems/>
            <Divider sx={{ my: 1 }} />
          </List>
        </Drawer>
        <Box
          className='right-side'
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
         
          <div className='profile-lists mx-3'>
            <div className='row'>
                
              <div className='col-md-10'>
                <div className='float-start'>
              <p className='text-white top-title mt-4 mb-0'>News Feeds</p>
                </div>
              <div className='home-type float-end mt-3 pt-4'>
              <Box sx={{ minWidth: 120 }}>
      <FormControl className='selecting-option' fullWidth>
        <InputLabel id="demo-simple-select-label" className='text-white label animate-label'>Select Menu</InputLabel>
        <Select
          labelId="demo-simple-select-l abel"
          id="demo-simple-select"
          value={age}
         
          onChange={handleChange}
          className='text-white home-select px-2'
        >
          <MenuItem value={10}>People List</MenuItem>
          <MenuItem value={20}>Import From CSV</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </Box>

              </div>
              {age === 10 && (
  <div className='people-list'>
    <CustomList items={items} selected={selected} handleToggle={handleToggle} />
  </div>
)} :{age === 20 &&(
  <div className='upload-file'>
<InputFileUpload/>
  </div>

)}


              </div>
              <div className='col-md-2 filter-side'></div>
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
