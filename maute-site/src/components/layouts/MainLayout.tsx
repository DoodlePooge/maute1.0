import { Button, Card, Slide } from "@mui/material"
import { experimentalStyled, styled } from "@mui/material/styles"
import { Outlet, RouterProvider } from "react-router-dom"
import MainNavigation from "../navigation/MainNavigation"

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64,
}))

export const MainLayout = () => {
  return(
    <MainLayoutRoot>
      <MainNavigation />
      <Outlet />
    </MainLayoutRoot>
  )
}