// ProtectedRoute.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router'
import { useAuth } from './providers/AuthProvider'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to='/vite-react-auth-provider-app/login' />
};

export default ProtectedRoute