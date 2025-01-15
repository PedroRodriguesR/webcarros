import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import './index.css'
import AuthProvider from './contexts/authContext'
import { RouterProvider } from 'react-router'



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
