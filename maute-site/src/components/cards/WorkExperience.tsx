import { Box, IconButton, Card, Slide, Typography, Link, List, ListItem } from "@mui/material"
import toast from 'react-hot-toast'
import EmailIcon from '@mui/icons-material/Email'
import copy from 'clipboard-copy'
import PlaceIcon from '@mui/icons-material/Place'
import GitHubIcon from '@mui/icons-material/GitHub'
import PhoneIcon from '@mui/icons-material/Phone'
import { FC } from "react"

type expInfo = {
  title: string,
  company: string,
  timeline: string,
  location: string,
  responsibilities: string[],
}

interface props {
  information: expInfo[],
}

export const WorkExperience: FC<props> = (props) => {
  const { information } =  props
  return (
    <Slide direction="up" in={true} timeout={1000}>
      <Card>
        <Box sx={{m: 2}}>
        <Typography variant="h3" sx={{
          fontWeight: 500,
          borderBottom: 1,
          }}>Work Experience</Typography>
          {information.map((info: expInfo) => (
            <Box sx={{m: 3}}>
            <Typography variant="h5" sx={{fontWeight: 600}}>{info.title}</Typography>
            <Typography color="primary" variant="h6" sx={{fontWeight: 600}}>{info.company} - {info.location}</Typography>
            <Typography variant="body2">{info.timeline}</Typography>
            {info.responsibilities.map((task: string) => (
              <List sx={{ pl: 3, listStyleType: 'disc' }}>
                <Typography variant="body2" sx={{display: 'list-item'}}>{task}</Typography>
              </List>
            ))}
            </Box>
          ))}
        </Box>
      </Card>
    </Slide>
  )
}
