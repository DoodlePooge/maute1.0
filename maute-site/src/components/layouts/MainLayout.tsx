import { Button, Card } from "@mui/material"
import { experimentalStyled, styled } from "@mui/material/styles"
import MainNavigation from "../navigation/MainNavigation"

const MainLayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  height: '100%',
  paddingTop: 64,
}))

export const MainLayout = () => {
  console.log("hai")
  return(
    <MainLayoutRoot><MainNavigation /></MainLayoutRoot>
  )
}