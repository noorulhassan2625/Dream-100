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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems } from '../../compoents/listItems';
import Chart from '../../compoents/chart';
import DLogo from '../../media/images/D-Logo.png';
import UserImg from '../../media/images/user-img.jpg';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ControlPointOutlinedIcon from '@mui/icons-material/ControlPointOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
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

const drawerWidth = 240;

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

export default function MainProfile() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
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
            >
              Profile Name
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                  <ShareOutlinedIcon className='mx-1'/>
                <MoreHorizOutlinedIcon  className='mx-1'/>
                <NotificationsNoneOutlinedIcon  className='mx-1'/>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer className='left-side' variant="permanent" open={open}>
          <div className='text-center mx-auto position-absolute logo-img'>
            <img width={'40px'}  src={DLogo} alt={DLogo} />
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
            {mainListItems}
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
          <div className='profile-box mt-3 mx-3'>
            <div className='row'>
              <div className='col-md-9'>
                <div className='col-md-5'>
                  <div className='d-flex profile-img text-center'>
                    <div className='profilemain-img'>
                    <img width={'120px'}  src={UserImg} alt={UserImg} />
                    </div>
                    <div>
                    <h5 className='text-white profile-text ms-2  text-center'>Profile Name</h5>
                    <div className=' ms-2 invite-btn box'>
                      <p className=" log-btn mb-0  pop">
                        Invite
                      </p>
                    </div>
                  </div>
                  </div>
                </div>
                <div className='tabs'>
                  <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                    textColor="primary"
                    indicatorColor="primary"
                  >
                    <Tab className="text-white w-25"  label="Tasks" />
                    <Tab className="text-white"  label="About" />
                    {/* <Tab className="text-white"  label="Tab 3" /> */}
                  </Tabs>
                  <TabPanel className="text-white" value={selectedTab} index={0}>
                    <p>Please Add Task Here:</p>
                    <div className='d-flex'>

                  <div className='via-btn task-input w-100'>
              <textarea  placeholder='Enter Task...' className='pop py-1 form-control bg-transparent text-white border-0 h6' autocomplete='off'/>
          </div>
   
              <ControlPointOutlinedIcon className='add-taskbtn'/>
                    </div>
                    <div className='form-data text-left'>
                  <div className='my-4 via-btn text-center addtask-btn box'>
                    {/* <Link className="text-decoration-none" to={'/dashboard'}> */}
                      <p className=" my-1 log-btn pop">
                        Add Task
                      </p>
                    {/* </Link> */}

                  </div>
                </div>
                  </TabPanel>
                  <TabPanel className="text-white" value={selectedTab} index={1}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                  </TabPanel>
                </div>
              </div>
              <div className='col-md-2 filter-side'></div>
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
