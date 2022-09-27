import { Box, IconButton, Card, Slide, Typography, Link } from "@mui/material"
import toast from 'react-hot-toast'
import EmailIcon from '@mui/icons-material/Email'
import copy from 'clipboard-copy'
import PlaceIcon from '@mui/icons-material/Place'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneIcon from '@mui/icons-material/Phone'
import { FC } from "react"

type conInfo = {
  email: string,
  phone: string,
  location?: { text:string, link: string },
  github?: { text: string, link: string },
  media?: JSX.Element[],
}

interface props {
  info: conInfo,
}

export const ContactInfo: FC<props> = (props) => {
  const { info } =  props
  const copyEmail = () => {
    toast.success('Email Copied!')
    copy(info.email)
  }
  const copyPhone = () => {
    toast.success('Phone Number Copied!')
    copy(info.phone)
  }
  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Card>
        <Box sx={{m: 2}}>
        <Typography variant="h5" sx={{fontWeight: 500}}>Contact Information</Typography>
        <Typography>
          <IconButton color="primary"onClick={copyEmail}>
          <EmailIcon/>
          </IconButton>
          {info.email}
        </Typography>
        <Typography>
        <IconButton color="primary"onClick={copyPhone}>
          <PhoneIcon/>
          </IconButton>
          {info.phone}
        </Typography>
        <Typography>
          <Link href={info.location?.link}>
          <IconButton color="primary"><PlaceIcon/></IconButton>
          </Link>
          {info.location?.text}
        </Typography>
        <Typography>
          <Link href={info.github?.link}>
          <IconButton color="primary"><GitHubIcon/></IconButton>
          </Link>
          {info.github?.text}
        </Typography>
        {info.media}
        </Box>
      </Card>
    </Slide>
  )
}
