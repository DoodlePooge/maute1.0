import { Avatar, Box, Button, Card, Divider, Grid, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { FamTreeAvtr } from '../components/avatars/FamTreeAvtr'
import tree from '/src/assets/static/images/tree.png'


export const MainPage: FC = () => {
  const theme = useTheme()
  return(
    <Box sx={{ width: '95%'}}>
    <Grid container spacing={2}>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <Divider sx={{mt:3}} />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/bryan.jpg' link='/bryan' />
        <Divider sx={{mt:3}} />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/emily.jpg' link='/emily' />
        <Divider sx={{mt:3}} />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/megan.jpg' link='/megan' />
        <Divider sx={{mt:3}} />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/rosie.jpg' link='/paige' />
      </Grid>
    </Grid>
    </Box>
  )
}