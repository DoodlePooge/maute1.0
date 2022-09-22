import { Button, Card } from "@mui/material"
import { FC } from "react"
import { theme } from "../theme"


export const Paige: FC = () => {
  theme.palette.primary.main = "#8B85FF"
  return(
    <Card sx={{width: 1000, height: 200}}><Button>Hello World</Button></Card>
  )
}