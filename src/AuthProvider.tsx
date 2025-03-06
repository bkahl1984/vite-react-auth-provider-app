// AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import axios from 'axios';
import { Users } from './Users';

export interface User {
  // Define the properties of the user object here
  id: string
  name: string
  username: string
  role: string
  password: string
  // Add other user properties as needed
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (userData: User, newToken: string) => void
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
    localStorage.setItem('token', token || '');
    if (token) {
      const signedInUser = Users.find(user => user.username === token.split('-')[0])
      if (signedInUser) {
        setUser(signedInUser)
      }
    }
    setLoading(false)
  }, [token]);

  const login = (userData: User, newToken: string) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    setToken(newToken)
  };

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    setToken(null)
  };

  const value = {
    user,
    token,
    login,
    logout,
    loading,
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === null) {
    throw new Error("useUserContext must be used within a UserContextProvider")
  }
  return context
}