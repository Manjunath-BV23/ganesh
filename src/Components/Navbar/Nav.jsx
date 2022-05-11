import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Home from '@mui/icons-material/Home';
import Gallery from '@mui/icons-material/Photo';
import Event from '@mui/icons-material/EventNote';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from 'react-router-dom';
import styled from "styled-components"

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', gap:"4px", justifyContent:"space-around", alignItems: 'center', textAlign: 'center', backgroundColor: "#DC2C3B" }}>
        <Typography sx={{ minWidth: 70 }}><Link to="/" style={{ textDecoration: 'none', color: 'black', padding: "5px", backgroundColor: "yellow" }}>Home</Link></Typography>
        <Typography sx={{ minWidth: 70 }}><Link to="/users" style={{ textDecoration: 'none', color: 'black', padding: "5px", backgroundColor: "yellow" }}>Users</Link></Typography>
        <Typography sx={{ minWidth: 70 }}><Link to="/gallery" style={{ textDecoration: 'none', color: 'black', padding: "5px", backgroundColor: "yellow" }}>Gallery</Link></Typography>
        <Typography sx={{ minWidth: 70 }}><Link to="/events" style={{ textDecoration: 'none', color: 'black', padding: "5px", backgroundColor: "yellow" }}>Events</Link></Typography>
        
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem>
            <ListItemIcon>
                <Home fontSize="small" />
            </ListItemIcon> <Link to="/" style={{ textDecoration: 'none', color: 'orange' }}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Avatar /> <Link to="/users" style={{ textDecoration: 'none', color: 'orange' }}>Users</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Gallery fontSize="small" />
          </ListItemIcon>
          <Link to="/gallery" style={{ textDecoration: 'none', color: 'orange' }}>Photo Gallery</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Event fontSize="small" />
          </ListItemIcon>
          <Link to="/events" style={{ textDecoration: 'none', color: 'orange' }}>Events</Link>
        </MenuItem>
        <MenuItem>
          <Avatar /> <Link to="/owner" style={{ textDecoration: 'none', color: 'red' }}> Owner Login (Manjunath B V)</Link>
        </MenuItem>
        <Divider />
        <MenuItem>
          <Avatar /><Link to="/gallery" style={{ textDecoration: 'none', color: 'green' }}>My account</Link> 
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <Link to="/adduser" style={{ textDecoration: 'none', color: 'green' }}>Add another account</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <Link to="/gallery" style={{ textDecoration: 'none', color: 'green' }}>Settings</Link>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <Link to="/gallery" style={{ textDecoration: 'none', color: 'green' }}>Logout</Link>
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
