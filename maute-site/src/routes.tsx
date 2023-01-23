import { createBrowserRouter, RouteObject } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Paige } from './pages/Paige'
import { Bryan } from './pages/Bryan'
import { MainLayout } from './components/layouts/MainLayout'
import { Emily } from './pages/Emily'
import { Megan } from './pages/Megan'

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
      // {
      //   path: 'emily',
      //   element: <Emily />,
      // },
      // {
      //   path: 'megan',
      //   element: <Megan />,
      // },
    ],
  },
])

export default router