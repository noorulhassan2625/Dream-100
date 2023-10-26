import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import { Link } from 'react-router-dom';
import AlertDialog from './modal';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
export const mainListItems = (
  <React.Fragment>

<div  className='left-side-link  p-0 position-absolute w-100 bottom-0 mt-4'>
    <ListItemButton className='p-0 ' >
      <ListItemIcon className='modal-btn'>
        <AlertDialog />
      </ListItemIcon>
      <ListItemText/>
    </ListItemButton>
</div>
<hr className="style3 mx-2 my-0"></hr>
    <Link className='left-side-link' to={"/dashboard"}>
    <ListItemButton>
      <ListItemIcon className='sideItem-icon' >
        <DashboardOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>


    </Link>

    <Link className='left-side-link' to={"/ProfilePage"}>
    <ListItemButton>
      <ListItemIcon  className='sideItem-icon'>
        <ContactsOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
</Link>

<Link className='left-side-link' to={"/ProfileLists"}>
    <ListItemButton>
      <ListItemIcon  className='sideItem-icon'>
        <SupervisorAccountOutlinedIcon />
      </ListItemIcon>
      <ListItemText primary="List" />
    </ListItemButton>
</Link>


<Link className='left-side-link' to={"/SignUp"}>
    <ListItemButton>
      <ListItemIcon  className='sideItem-icon'>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
</Link>



  </React.Fragment>
);

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Current month" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Last quarter" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AssignmentIcon />
//       </ListItemIcon>
//       <ListItemText primary="Year-end sale" />
//     </ListItemButton>
//   </React.Fragment>
// );