// ProtectedRoute.tsx
import React, { ReactNode } from 'react';
import { Navigate } from 'react-router'
import { useAuth } from './AuthProvider'

interface ProtectedRouteProps {
  children: ReactNode
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  return user ? <>{children}</> : <Navigate to="/login" />
};

export default ProtectedRoute