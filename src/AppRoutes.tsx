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
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        { user 
          ? <Route path="/dashboard" element={<Dashboard />} />
          : <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        }  
    </Routes>
  );
};

export default AppRoutes