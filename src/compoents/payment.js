import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';

export default function PaymentDetails() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className='modalBtn via-btn log-btn text-white w-25' variant="outlined" onClick={handleClickOpen}>
        <PersonAddAltOutlinedIcon className='me-2' /> <span>Add Payment Method</span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='modal-Box'
      >
        <DialogTitle id="alert-dialog-title">
          <p className='text-white modal-label'>Please Enter Payment Information:</p>
          <input type="text" className='form-control my-1' placeholder='Card Number' />
          <input type="text" className='form-control my-1' placeholder='Name on Card' />
          <input type="text" className='form-control my-1' placeholder='Expiration Date (MM/YY)' />
          <input type="text" className='form-control my-1' placeholder='CVV' />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className='text-white'>Add a Note:</p>
            <div className='my-3 via-btn w-100'>
              <textarea placeholder='Add a note (optional)...' className='pop py-1 form-control bg-transparent text-white border-0 h6' autoComplete='off'/>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='form-data text-center'>
            <div className='my-4 via-btn modal-opn-btn box'>
              <p className="mx-auto my-1 pop" onClick={handleClose}>
                Cancel
              </p>
            </div>
          </div>
          <div className='form-data text-center'>
            <div className='my-4 via-btn modal-opn-btn box'>
              <p className="mx-auto my-1 pop">
                Submit
              </p>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
