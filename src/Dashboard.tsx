// Dashboard.tsx
import React from 'react'
import { useAuth } from './AuthProvider'
import './App.css'

const Dashboard: React.FC = () => {
  const { user, token, isLoggedIn } = useAuth()

  console.log("user", user)
  console.log("token", token)
  console.log("Dashboard Page: isLoggedIn - ", isLoggedIn)

  return (
    <div>
      <br />
      <br />
      <h2 className="text-stone-600">{user?.role.toUpperCase()} Dashboard</h2>
      {user &&
        <>
          <br />
          <br />
          <div className="text-stone-600">Welcome, {user.name}!</div>
        </>
      }
    </div>
  );
};

export default Dashboard