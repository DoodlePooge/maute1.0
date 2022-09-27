import './App.css'
import { MainLayout } from './components/layouts/MainLayout'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import { baseOptions, main, paige, bryan, emily, megan } from './theme'
import { Toaster } from 'react-hot-toast'


const App = () => {
  const pathname = window.location.pathname
  console.log(pathname)
  const pathTheme = (pathname.includes('paige') ? paige : pathname.includes('bryan') ? bryan : pathname.includes('emily') ? emily : pathname.includes('megan') ? megan : main)
  const theme = createTheme(baseOptions, pathTheme)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout />
      <Toaster
        position='bottom-right'
        toastOptions={{
          duration: 2000,
          style: {
            background: '#EEE',
            color: '#000'
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            }
          }
        }}
      />
      <RouterProvider router={router} />
    </ThemeProvider>
    
  )
}

export default App
