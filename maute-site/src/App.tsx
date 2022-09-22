import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from './theme/index'
import { MainLayout } from './components/layouts/MainLayout'
import { CssBaseline } from '@mui/material'
import routes from './routes'
import { useRoutes } from 'react-router-dom'


function App() {
  const content = useRoutes(routes)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
      {content}
    </ThemeProvider>
    
  )
}

export default App
