import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router"
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Login from './pages/Login.tsx'
import Dashboard from './pages/Dashboard.tsx'
import ProtectedRoute from './ProtectedRoute.tsx'

const router = createBrowserRouter([
  {
    path: '/vite-react-auth-provider-app/',
    element: <App />,
    children: [
      {
        path: '/vite-react-auth-provider-app/',
        element: <Home />
      },
      {
        path: '/vite-react-auth-provider-app/login',
        element: <Login />
      },
      {
        path: '/vite-react-auth-provider-app/dashboard',
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
