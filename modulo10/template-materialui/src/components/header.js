import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
 
function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">    
          <Toolbar>
            <Typography variant="h4" component="p" sx={{ flexGrow: 1 }}>
             To Do List
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    );
}
 
export default Header;