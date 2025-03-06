// Dashboard.tsx
import React from 'react'
import { useAuth } from './AuthProvider'
import './App.css'

const Dashboard: React.FC = () => {
  const { user, token } = useAuth()

  console.log("user", user)
  console.log("token", token)

  return (
    <div>
      <h2>{user?.role.toUpperCase()} Dashboard</h2>
      {user && <p>Welcome, {user.name}!</p>}
    </div>
  );
};

export default Dashboard