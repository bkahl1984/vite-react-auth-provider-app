import { ThemeProvider, createTheme } from '@mui/material/styles'
import { AuthProvider } from './providers/AuthProvider.tsx'
import MainAppBar from './MainAppBar.tsx'
import './App.css'
import { Outlet } from 'react-router'

const App: React.FC = () => {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
        <AuthProvider>
          <MainAppBar />
          <Outlet />
        </AuthProvider>
    </ThemeProvider>
  );
};

export default App
