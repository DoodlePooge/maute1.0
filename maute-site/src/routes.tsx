import { RouteObject } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import { Paige } from './pages/Paige'
import { Bryan } from './pages/Bryan'
import { MainLayout } from './components/layouts/MainLayout'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
    children: [
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
]

export default routes