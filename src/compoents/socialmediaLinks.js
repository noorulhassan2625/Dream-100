import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'; 
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function EditSocialList() {
  const [openModal, setOpenModal] = React.useState(false);
  const [editingIndex, setEditingIndex] = React.useState(-1);
  const [socialMediaNames, setSocialMediaNames] = React.useState([
    "Facebook",
    "Instagram",
    "Twitter",
    "Pinterest",
    // Add more social media names here
  ]);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSaveLink = (index, link) => {
    const updatedSocialMediaNames = [...socialMediaNames];
    updatedSocialMediaNames[index] = link;
    setSocialMediaNames(updatedSocialMediaNames);
    setOpenModal(false);
  };

  return (
    <div>
      <List className='socialList-Link' sx={{ width: '100%', maxWidth: '100%' }}>
        {socialMediaNames.map((name, index) => (
          <ListItem key={name} disableGutters>
            <ListItemText primary={name} />
            <IconButton aria-label="comment" onClick={() => handleEditClick(index)}>
              <EditOutlinedIcon className='text-white' />
            </IconButton>
          </ListItem>
        ))}
      </List>
      
      <Dialog className='social-modal' open={openModal} onClose={handleCloseModal}>
        <DialogTitle sx={{ backgroundColor: 'black', color: 'white' }}>Edit Link</DialogTitle>
        <DialogContent sx={{ backgroundColor: 'black', color: 'white' }}>
          <TextField
          className='text-white'
            label="Enter Link"
            fullWidth
            value={editingIndex >= 0 ? socialMediaNames[editingIndex] : ''}
            onChange={(e) => {
              const updatedSocialMediaNames = [...socialMediaNames];
              updatedSocialMediaNames[editingIndex] = e.target.value;
              setSocialMediaNames(updatedSocialMediaNames);
            }}
            InputProps={{
              sx: { color: 'white' ,border : '1px solid white' },
            }}
          />
          <Button onClick={() => handleSaveLink(editingIndex, socialMediaNames[editingIndex])} sx={{ color: 'white' }}>
            Save
          </Button>
          <Button onClick={handleCloseModal} sx={{ color: 'white' }}>
            Cancel
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
