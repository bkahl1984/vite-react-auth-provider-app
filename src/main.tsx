import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router"
import { ThemeProvider, createTheme } from '@mui/material/styles'
import './index.css'
import { AuthProvider } from './AuthProvider.tsx'
import MainAppBar from './MainAppBar.tsx'
import AppRoutes from './AppRoutes.tsx'

const theme = createTheme();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <AuthProvider>
          <MainAppBar />
          <AppRoutes />
        </AuthProvider>
      </StrictMode>
    </ThemeProvider>
  </BrowserRouter>,
)
