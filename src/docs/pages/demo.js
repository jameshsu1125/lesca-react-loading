import { Button, ButtonGroup, Alert, IconButton } from '@mui/material';
import { useState } from 'react';
import LoadingProcess from '../../lib/index';
import CloseIcon from '@mui/icons-material/Close';
import Collapse from '@mui/material/Collapse';

const uploadToServer = () => new Promise((res) => setTimeout(() => res(), 5000000));

const Demo = () => {
  const [uploading, setUploading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [open, setOpen] = useState(true);

  return (
    <div className='Demo'>
      {alert && (
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label='close'
                color='inherit'
                size='small'
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize='inherit' />
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            upload success!
          </Alert>
        </Collapse>
      )}
      <h2>Demo</h2>
      <ButtonGroup variant='contained'>
        <Button
          onClick={() => {
            setUploading(true);
            uploadToServer().then(() => {
              setUploading(false);
              setAlert(true);
              setOpen(true);
            });
          }}
        >
          upload something to server
        </Button>
      </ButtonGroup>
      {uploading && (
        <LoadingProcess>
          <span>loading...</span>
        </LoadingProcess>
      )}
    </div>
  );
};
export default Demo;
