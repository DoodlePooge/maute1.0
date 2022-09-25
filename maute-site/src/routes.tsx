import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Paige } from './pages/Paige'
import { Bryan } from './pages/Bryan'
import { MainLayout } from './components/layouts/MainLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'paige',
        element: <Paige />,
      },
      {
        path: 'bryan',
        element: <Bryan />,
      },
    ],
  },
])

export default router