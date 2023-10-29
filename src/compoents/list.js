import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const CustomList = ({ items, selected, handleToggle }) => {
  return (
    <List dense sx={{ width: '100%', maxWidth: '100%', bgcolor: 'transparent' }}>
      {items.map((value, index) => {
        const labelId = `checkbox-list-secondary-label-${index}`;
        return (
          <ListItem
            key={index}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(index)}
                checked={selected.indexOf(index) !== -1}
                classes={{
                  root: 'custom-checkbox', // Apply custom class to the root element
                  icon: 'custom-icon', // Apply custom class to the icon element
                }}
              />
            }
            className='text-white AllLists'
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar className='list-img'>
                <Link to='/ProfilePage'>
                <Avatar
                  alt={`Avatar n°${index + 1}`}
                  src={`/static/images/avatar/${index + 1}.jpg`}
                  />
                  </Link>
                <ListItemText id={labelId} primary={`Line item ${index + 1}`} />
              </ListItemAvatar>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CustomList;
