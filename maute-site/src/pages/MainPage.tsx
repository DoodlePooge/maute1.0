import { Avatar, Box, Button, Card, Divider, Grid, Typography, useTheme } from '@mui/material'
import { FC } from 'react'
import { FamTreeAvtr } from '../components/avatars/FamTreeAvtr'
import tree from '/src/assets/static/images/tree.png'


export const MainPage: FC = () => {
  const theme = useTheme()
  return(
    <Box sx={{ width: '95%'}}>
      <Card sx={{p: 5}}>
        <Typography variant='h3' fontWeight={500}>Welcome to the Maute Family!</Typography>
        <Typography variant='h4' py={4}>Learn more about us...</Typography>
    <Grid container spacing={5}>
      <Grid item xs={6} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' name='Paige'/>
        {/* <Divider sx={{mt:3}} /> */}
      </Grid>
      <Grid item xs={6} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/bryan.png' link='/bryan' name='Bryan' />
        {/* <Divider sx={{mt:3}} /> */}
      </Grid>
      {/* <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/emily.jpg' link='/emily' />
        <Divider sx={{mt:3}} />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/megan.jpg' link='/megan' />
        <Divider sx={{mt:3}} />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
      </Grid>
      <Grid item xs={3} textAlign='center'>
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
        <FamTreeAvtr imgPath='/static/images/paige.jpeg' link='/paige' />
      </Grid> */}
    </Grid></Card>
    </Box>
  )
}