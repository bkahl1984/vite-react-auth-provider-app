// Routes.tsx
import React from 'react'
import { Routes, Route } from "react-router"
import { useAuth } from './AuthProvider'
import './App.css'
import App from './App';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import Dashboard from './Dashboard';

const AppRoutes: React.FC = () => {
  const { user } = useAuth()

  return (
    <Routes>
        <Route path="/vite-react-auth-provider-app/" element={<App />} />
        <Route path="/vite-react-auth-provider-app/login" element={<Login />} />
        { user 
          ? <Route path="/vite-react-auth-provider-app/dashboard" element={<Dashboard />} />
          : <Route path="/vite-react-auth-provider-app/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        }  
    </Routes>
  );
};

export default AppRoutes