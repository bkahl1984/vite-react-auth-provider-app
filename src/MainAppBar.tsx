import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from './AuthProvider';

export default function MainAppBar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/login')
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Vite React Login App
          </Typography>
          <NavLink to="/" style={{ textDecoration: "none", color: "#fff", marginRight: "15px"}}>Home</NavLink>
          {user
            ? <NavLink to="/" onClick={handleLogout} style={{ textDecoration: "none", color: "#fff"}}>Logout</NavLink>  
            : <NavLink to="/login" style={{ textDecoration: "none", color: "#fff"}}>Login</NavLink>  
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}