import { Button, Card } from "@mui/material"
import { FC } from "react"
import { theme } from "../theme"


export const Bryan: FC = () => {
  theme.palette.primary.main = "#FF6363"
  return(
    <Card sx={{width: 1000, height: 200}}><Button>Hello World</Button></Card>
  )
}