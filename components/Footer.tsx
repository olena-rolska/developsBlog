import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2>Follow us</h2>
      <Grid item>
          <Tooltip title="" placement="top-start">
            <Button>Facebook</Button>
          </Tooltip>
          <Tooltip title="" placement="top">
            <Button>Instagram</Button>
          </Tooltip>
          <Tooltip title="" placement="top-end">
            <Button>Twitter</Button>
          </Tooltip>
        </Grid>
    </footer>
  )
}

export default Footer;