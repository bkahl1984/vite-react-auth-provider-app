// Login.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuth } from './AuthProvider.tsx'
import { Users } from './Users';
import { Button, TextField } from '@mui/material';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { login } = useAuth()
  const navigate = useNavigate()
  const { isLoggedIn } = useAuth()
  const [usernameError, setUsernameError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  console.log("Login Page: isLoggedIn - ", isLoggedIn)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const user = Users.find(user => user.username === username)
    
    // Simulate authentication (replace with API call)
    if (user && user.username === username && user.password === password) {
      // Generate a dummy token or fetch from a local source
      const dummyToken = `${user.username}-mysecrettoken`
      login(user, dummyToken);
      navigate('/dashboard')
    } else if (user && username === username && user.password !== password) {
      setUsernameError(false)
      setPasswordError(true)
      navigate('/login')
    } else {
      setUsernameError(true)
      setPasswordError(true)
      navigate('/login')
    }    
  }

  return (
    <>
      <br />
      <br />
      <div className="text-stone-600">Please Login!</div>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        <TextField
            id="username"
            label="Username"
            error={usernameError}
            helperText={usernameError ? "Username is incorrect" : ""}
            variant="outlined"
            autoComplete="new-password" 
            onChange={(e) => setUsername(e.target.value)}
          />
        <br />
        <br />
        <TextField
            id="password"
            label="Password"
            error={passwordError}
            helperText={passwordError ? "Password is incorrect" : ""}
            variant="outlined"
            placeholder="Password"
            value={password}
            type="password"
            autoComplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
        <br />
        <br />
        <Button variant="contained" type="submit">Login</Button>
      </form>
    </>
  )
}

export default Login