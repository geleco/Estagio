import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const drawerWidth = 240;

const Sidebar = () => {
  const theme = useTheme();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div style={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
          <img src="/nova_uninassau_header.png" style={{ height: 40, marginTop: 10 }} />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem button>
            <PersonIcon/>
            <ListItemText 
          primary="Usuário"
          primaryTypographyProps={{ 
            style: { fontSize: '1.20rem' }
          }}
          sx={{ ml: 1.5 }}/>
          </ListItem>
          <ListItem button>
            <PersonIcon/>
            <ListItemText 
          primary="Produto"
          primaryTypographyProps={{ 
            style: { fontSize: '1.20rem' }
          }}
          sx={{ ml: 1.5 }}/>
          </ListItem>
          <ListItem button>
            <PersonIcon/>
            <ListItemText 
          primary="Estoque"
          primaryTypographyProps={{ 
            style: { fontSize: '1.20rem' }
          }}
          sx={{ ml: 1.5 }}/>
          </ListItem>
          <ListItem button>
            <PersonIcon/>
            <ListItemText 
          primary="Almoxarifado"
          primaryTypographyProps={{ 
            style: { fontSize: '1.20rem' }
          }}
          sx={{ ml: 1.5 }}/>
          </ListItem>
          <ListItem button>
            <ListItemText primary="Analytics" />
          </ListItem>
        </List>
      </Drawer>

      <main
        style={{
          flexGrow: 1,
          padding: theme.spacing(3),
          marginLeft: drawerWidth,
        }}
      >
        <Toolbar />
        <Typography paragraph>
          Conteúdo da página.
        </Typography>
      </main>
    </div>
  );
};

export default Sidebar;
