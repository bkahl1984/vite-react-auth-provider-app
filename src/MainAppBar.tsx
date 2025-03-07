import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router';
import { useAuth } from './providers/AuthProvider';

export default function MainAppBar() {
  const { isLoggedIn, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate('/vite-react-auth-provider-app/login')
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
            Auth App
          </Typography>
          <Link to="/vite-react-auth-provider-app/" style={{ textDecoration: "none", color: "#fff", marginRight: "15px"}}>Home</Link>
          {isLoggedIn
            ?
              <>
                <Link to="/vite-react-auth-provider-app/dashboard" style={{ textDecoration: "none", color: "#fff", marginRight: "15px"}}>Dashboard</Link>
                <Link to="/vite-react-auth-provider-app/" onClick={handleLogout} style={{ textDecoration: "none", color: "#fff"}}>Logout</Link>
              </>  
            : 
            <Link to="/vite-react-auth-provider-app/login" style={{ textDecoration: "none", color: "#fff"}}>Login</Link>  
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}