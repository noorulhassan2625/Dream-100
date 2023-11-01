  import React, { useState, useEffect } from 'react';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import { Link, useLocation } from 'react-router-dom';
  import AlertDialog from './modal';
  import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
  import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
  import BarChartIcon from '@mui/icons-material/BarChart';
  import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';

  function MainListItems() {
    const location = useLocation();
    const [selectedItem, setSelectedItem] = useState(null); // Initialize to null

    useEffect(() => {
      // Extract the pathname from the current location
      const currentPath = location.pathname;

      // Determine the selected item based on the current path
      if (currentPath === '/home') setSelectedItem('home');
      else if (currentPath === '/mainprofile') setSelectedItem('mainprofile');
      else if (currentPath === '/ProfilePage') setSelectedItem('profilePage');
      else if (currentPath === '/ProfileLists') setSelectedItem('profileLists');
      else if (currentPath === '/SignUp') setSelectedItem('signUp');
    }, [location]);

    // Define an array of navigation items with the isActive property
    const navigationItems = [
      { path: '/home', label: 'Home', icon: <SupervisorAccountOutlinedIcon />, name: 'home' },
      // { path: '/mainprofile', label: 'Main Profile', icon: <DashboardOutlinedIcon />, name: 'mainprofile' },
      { path: '/ProfilePage', label: ' User Profile', icon: <ContactsOutlinedIcon />, name: 'profilePage' },
      { path: '/ProfileLists', label: 'List', icon: <SupervisorAccountOutlinedIcon />, name: 'profileLists' },
      { path: '/SignUp', label: 'Reports', icon: <BarChartIcon />, name: 'signUp' },
    ];

    return (
      <React.Fragment>
        <div className='left-side-link p-0 position-absolute w-100 bottom-0 mt-4'>
          <ListItemButton className='p-0'>
            <ListItemIcon className='modal-btn'>
              <AlertDialog name="Add Person" />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </div>


        <hr className="style3 mx-2 my-0"></hr>

        <div className='left-side-link i p-0  w-100 bottom-0 mt-4'>
          <ListItemButton className='p-0'>
            <ListItemIcon className=''>
              <input type='text' placeholder='Search...'  />
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </div>

        {navigationItems.map((item) => (
          <Link key={item.name} className='left-side-link' to={item.path}>
            <ListItemButton selected={selectedItem === item.name}>
              <ListItemIcon className='sideItem-icon'>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </Link>
        ))}
      </React.Fragment>
    );
  }

  export default MainListItems;
