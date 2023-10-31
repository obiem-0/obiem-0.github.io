import React from 'react';
import { Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';

// components
import { IconBellRinging, IconMenu } from '@tabler/icons';

const Footer = (props) => {


  return (

    <Box flexGrow={1}  sx={{ textAlign: "center" }}>

<div class="mt-25 py-6 px-6 text-center">

<h4 class="mb-0 px-4 fs-4"> Reach out to me on <span class="mx-3"> </span>
<a href="https://www.linkedin.com/in/obi-emuwa" target="_blank" class="pe-1 text-primary text-decoration-underline"> Linkedin</a> |
<a href="https://discordapp.com/users/emuwa.obi" target="_blank" class="pe-1 text-primary text-decoration-underline"> Discord</a> |
<a href="mailto:emuwa.obi@gmail.com" class="pe-1 text-primary text-decoration-underline"> Email</a> |
<a href="https://github.com/obiem" target="_blank" class="pe-1 text-primary text-decoration-underline"> Github</a>

</h4>

</div>

          </Box>

     
       
        

  );
};


export default Footer;
