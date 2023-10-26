import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { Link } from 'react-router-dom';

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button className='modalBtn justify-content-start' variant="outlined" onClick={handleClickOpen}>
        <PersonAddAltOutlinedIcon className='ms-2 me-4'/> Add Person
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className='modal-Box'
      >
        <DialogTitle id="alert-dialog-title">
          <p className='text-white modal-label'>Please Paste The Link Here:<br></br><span className='h3'>-OR-</span><br></br> Enter Email: </p>
          <input type="text" className='form-control' placeholder='Please Enter Data' />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className='text-white'>Add a Note:</p>
          <div className='my-3 via-btn w-100'>
              <textarea placeholder='Enter Your Email...' className='pop py-1 form-control bg-transparent text-white border-0 h6' autoComplete='off'/>
          </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className='form-data text-center'>
            <div className='my-4 via-btn modal-opn-btn box'>
              <Link className="text-decoration-none" to={'#'}>
                <p className="mx-auto my-1  pop" onClick={handleClose}> {/* Close the dialog when Cancel is clicked */}
                  Cancel
                </p>
              </Link>
            </div>
          </div>
          <div className='form-data text-center'>
            <div className='my-4 via-btn modal-opn-btn box'>
              <p className="mx-auto my-1  pop">
                Submit
              </p>
            </div>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
