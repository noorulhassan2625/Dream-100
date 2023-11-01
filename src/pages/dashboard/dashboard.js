import * as React from 'react';
import { Link } from 'react-router-dom';
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
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import Paper from '@mui/material/Paper';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
// import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MainListItems, { mainListItems } from '../../compoents/listItems';
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
import LinearProgress from '@mui/material/LinearProgress';
import PostsList from '../../compoents/postsList';
import PostImageList from '../../compoents/postImgaes';
import CommentsList from '../../compoents/postsComments';
import InterestsList from '../../compoents/interestsPost';
import BasicSelect from '../../compoents/selectOption';
import AlertDialog from '../../compoents/modal';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import SelectScripts from '../../compoents/selectScripts';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import EditSocialList from '../../compoents/socialmediaLinks';
import PaymentDetails from '../../compoents/payment';
import InputAdornments from '../../compoents/accountdetails';
import { Button, Popover, ListItem, ListItemText, ListItemIcon } from '@mui/material';
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

export default function MainProfile() {



  const [popoverOpen, setPopoverOpen] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setPopoverOpen(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(null);
  };


  // const options = [
  //   { text: 'Manage Profile', icon: <PortraitOutlinedIcon /> },
  // ];
  // const textOptions = ['Option 1', 'Option 2', 'Option 3'];



  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [selectedTab, setSelectedTab] = React.useState(0);
  const [nestedSelectedTab, setNestedSelectedTab] = React.useState(0);
  const [taskProgress, setTaskProgress] = React.useState(50); // Initialize with the desired initial progress value
  // Initial progress value (50% in this example)

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleNestedTabChange = (event, newValue) => {
    setNestedSelectedTab(newValue);
  };

  const [tasks, setTasks] = React.useState([]);
  const [taskText, setTaskText] = React.useState('');

  const handleTaskTextChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };
  const [notes, setNotes] = React.useState([]);
  const [noteText, setNoteText] = React.useState('');

  const handleNoteTextChange = (e) => {
    setNoteText(e.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, noteText]);
      setNoteText('');
    }
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
              className={'title-text'}
            >
              Profile Name
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <ShareOutlinedIcon className='mx-1' />
                <MoreHorizOutlinedIcon className='mx-1' />
                <NotificationsNoneOutlinedIcon className='mx-1' />
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
          <div className='text-center d-flex mx-auto position-absolute logo-img'>
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
            <MainListItems />
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
              <div className='col-md-10'>
                <div className='col-md-12 pb-3 profile-tabs'>
                  <div className='d-flex profile-img text-center'>
                    <div className='profilemain-img'>
                      <img width={'120px'} src={UserImg} alt={UserImg} />
                    </div>
                    <div>
                      <h5 className='text-white profile-text ms-2  text-center'>Profile Name</h5>
                      <div className=' ms-2   box'>
                        <p className=" mb-0 log-btn m pop">
                          <AlertDialog name="Invite" />
                        </p>
                      </div>
                    </div>
                    <div className='user-info w-25 ms-auto me-3 mt-5 pt-5 float-end'>

                      <div>
                        <div className='text-white w-100 d-flex text-end float-end justify-content-end'>
                          <span className='me-auto float-start'>
                            <LocalPhoneOutlinedIcon className='me-2' />
                            :
                          </span>
                          <p className='mb-0 text-white'>
                            +123 456 7890
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className='text-white mt-2 w-100 d-flex text-end float-end justify-content-end'>
                          <span className='me-auto float-start'>
                            <CottageOutlinedIcon className='me-2' />
                            :
                          </span>
                          <p className='mb-0'>
                            Floor 12, A8 Merkaz Florida
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div>
                    <div className=' ms-2   box'>
                      <p className=" mb-0 pop">
                        <PaymentDetails />
                      </p>
                    </div>

                  </div>

                </div>

                <div className='info-form accountDetails'>

                  <InputAdornments />






                </div>
              </div>
              <div className='col-md-2 pt-5 mt-5 filter-side'>
                <div className='row pb-3 profile-tabs'>
                  <div className='social-data mb-3 col-md-11'>
                    <div className='rounded-1 px-2 log-btn py-1'>
                      <EmailOutlinedIcon className='me-2' />
                      <span>Email</span>
                    </div>
                  </div>
                  <div className='social-data mb-3 col-md-11'>
                    <div className='rounded-1 px-2 log-btn py-1'>
                      <FacebookOutlinedIcon className='me-2' />
                      <span>Face
                        book</span>
                    </div>
                  </div>
                  <div className='social-data mb-3 col-md-11'>
                    <div className='rounded-1 px-2 log-btn py-1'>
                      <VideoCallOutlinedIcon className='me-2' />
                      <span>Video box</span>
                    </div>
                  </div>
                  <div className='col-md-3'></div>
                  <div className='social-data mb-3 col-md-11'>
                    <div className='rounded-1 px-2 log-btn py-1'>
                      <ContactPageOutlinedIcon className='me-2' />
                      <span>Mail Swag</span>
                    </div>
                  </div>
                  <div className='social-data mb-3 col-md-11'>
                    <div className='rounded-1 px-2 log-btn py-1'>
                      <PeopleAltOutlinedIcon className='me-2' />
                      <span>Friend
                      </span>
                    </div>
                  </div>
                  {/* <div className='social-data mt-3 col-md-3'>
                  <div className='rounded-1 text-center log-btn'>
                     <VideoCallOutlinedIcon/>
                     <span>Video box</span>
                  </div>
                </div> */}
                </div>
                <div className='me-3 mt-3'>
                  <p className='mb-0'>Social Links</p>
                  <EditSocialList />
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
