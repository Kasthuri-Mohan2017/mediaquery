// Sidebar.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar1 = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };

  return (
    <div>
      <IconButton 
        onClick={toggleDrawer(true)} 
        sx={{ display: { xs: 'block', md: 'none' } }} 
      >
        <MoreVertIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
          display: { xs: 'none', md: 'block' }
        }}
        open
      >
        <List>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar1;
