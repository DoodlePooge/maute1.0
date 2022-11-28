import { Avatar, Box, Button, Card, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { FamTreeAvtr } from '../components/avatars/FamTreeAvtr'


export const MainPage: FC = () => {
  const theme = useTheme()
  return(
    <Box sx={{backgroundImage: "url(${/static/images/tree.png})", width:1200, height: 550}}>
      <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
      <FamTreeAvtr imgPath='/static/images/emily.jpg'  link='/emily'/>
      <FamTreeAvtr imgPath='/static/images/bryan.jpg'  link='/bryan'/>
      <FamTreeAvtr imgPath='/static/images/megan.jpg'  link='/megan'/>
    </Box>
  )
}