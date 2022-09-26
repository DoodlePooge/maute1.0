import './App.css'
import { MainLayout } from './components/layouts/MainLayout'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { baseOptions, main, paige, bryan } from './theme'


const App = () => {
  const pathname = window.location.pathname
  console.log(pathname)
  const pathTheme = (pathname == '/paige' ? paige : pathname == '/bryan' ? bryan : main)
  const theme = createTheme(baseOptions, pathTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
      <RouterProvider router={router} />
    </ThemeProvider>
    
  )
}

export default App
