import { Box, Card, Slide, Typography, List } from "@mui/material"
import { FC } from "react"

type prInfo = {
  title: string,
  role: string,
  timeline: string,
  responsibilities: string[],
}

interface props {
  information: prInfo[],
}

export const Projects: FC<props> = (props) => {
  const { information } =  props
  return (
    <Slide direction="up" in timeout={1500}>
      <Card sx={{mb: 3}}>
        <Box sx={{m: 2}}>
        <Typography variant="h3" sx={{
          fontWeight: 600,
          borderBottom: 1,
          }}>Projects</Typography>
          {information.map((info: prInfo) => (
            <Box sx={{m: 3}}>
            <Typography variant="h5" sx={{fontWeight: 600}}>{info.title}</Typography>
            <Typography color="primary" variant="h6" sx={{fontWeight: 600}}>{info.role}</Typography>
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
