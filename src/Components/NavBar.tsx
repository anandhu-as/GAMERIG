
import { AppBar, Toolbar, Typography, Box, IconButton, Tooltip } from '@mui/material';
import { Link } from 'react-router-dom';
import { APP_NAME } from "../constants/constants";
import HomeIcon from '@mui/icons-material/Home';
import StorefrontIcon from '@mui/icons-material/Storefront';
import InfoIcon from '@mui/icons-material/Info';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#000000', borderBottom: '1px solid #333'  }}>
      <Toolbar>

        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            flexGrow: 1,
           
            color: '#fff',
            textDecoration: 'none',
            fontWeight: 800,
            letterSpacing: '2px',
            fontFamily: '"Segoe UI", Roboto, "Helvetica Neue", cursive', 
            textTransform: 'uppercase'
          }}
        >
          {APP_NAME}
        </Typography>


        <Box sx={{ display: 'flex', gap: 1 }}>
          <Tooltip title="Home">
            <IconButton sx={{ color: '#fff' }} component={Link} to="/">
              <HomeIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Store">
            <IconButton sx={{ color: '#fff' }} component={Link} to="/store">
              <StorefrontIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="About">
            <IconButton sx={{ color: '#fff' }} component={Link} to="/about">
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;