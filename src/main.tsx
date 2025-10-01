import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import './index.css'

import { RouterProvider } from 'react-router'
import AuthProvider from './contexts/authContext'

import { Toaster } from 'react-hot-toast'
import "swiper/swiper-bundle.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Toaster
      position="top-right"
      reverseOrder={false}
    />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
