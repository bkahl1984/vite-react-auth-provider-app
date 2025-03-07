// AuthContext.tsx
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react'
import axios from 'axios';
import { Users } from '../data/Users';
import { useNavigate } from 'react-router';

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
  isLoggedIn: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loginTime, setLoginTime] = useState<number | null>(null)
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()
  //const timeoutDuration = 30 * 60 * 1000 // 30 minutes
  const timeoutDuration = 6000 // 30 minutes

  useEffect(() => {
    const storedLoginTime = localStorage.getItem('loginTime')
    if (storedLoginTime) {
      setLoginTime(parseInt(storedLoginTime))
      axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : ''
      localStorage.setItem('token', token || '')
      if (token) {
        const signedInUser = Users.find(user => user.username === token.split('-')[0])
        if (signedInUser) {
          setUser(signedInUser)
        }
      }
      setLoading(false)
    }
  }, [token])

  const login = (userData: User, newToken: string) => {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
    setToken(newToken)
    setLoginTime(Date.now())
    localStorage.setItem('loginTime', JSON.stringify(Date.now()))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    setToken(null)
    setLoginTime(null);
    localStorage.removeItem('loginTime');
    navigate('/vite-react-auth-provider-app/login');
  }

  useEffect(() => {
    if (loginTime) {
      const intervalId = setInterval(() => {
        const now = Date.now();
        if (now - loginTime > timeoutDuration) {
          logout()
          clearInterval(intervalId)
        }
      }, 6000)

      return () => clearInterval(intervalId)
    }
  }, [loginTime, timeoutDuration, logout])

  const updateLastActivity = () => {
    setLoginTime(Date.now())
    localStorage.setItem('loginTime', JSON.stringify(Date.now()))
  }

  useEffect(() => {
      window.addEventListener('mousemove', updateLastActivity)
      window.addEventListener('keypress', updateLastActivity)

      return () => {
          window.removeEventListener('mousemove', updateLastActivity)
          window.removeEventListener('keypress', updateLastActivity)
      };
  }, [])

  const value = {
    user,
    token,
    login,
    logout,
    loading,
    isLoggedIn: !!user,
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