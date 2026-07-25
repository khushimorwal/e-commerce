import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
  const loggedIn = JSON.parse(localStorage.getItem('loggedInUser'))
  
  return loggedIn ? children : <Navigate to="/login" />
}

export default ProtectedRoute