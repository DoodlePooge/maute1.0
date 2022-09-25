import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/index'
import { MainLayout } from './components/layouts/MainLayout'
import { CssBaseline } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from './routes'


function App() {
  // const content = useRoutes(routes)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
      <RouterProvider router={router} />
    </ThemeProvider>
    
  )
}

export default App
