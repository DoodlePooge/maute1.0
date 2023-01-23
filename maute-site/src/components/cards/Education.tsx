import { Box, Card, Slide, Typography } from "@mui/material"
import { FC } from "react"

type edInfo = {
  degree: string,
  minor?: string,
  concentration?: string,
  school: string,
  timeline: string,
  location?: string,
  gpa?: string,
}

interface props {
  information: edInfo[],
}

export const Education: FC<props> = (props) => {
  const { information } =  props
  return (
    <Slide direction="up" in timeout={1500} easing="cubic-bezier(.09,-0.15,.36,.29)">
      <Card sx={{mb: 3}}>
        <Box sx={{m: 2}}>
          <Typography variant="h5" sx={{fontWeight: 600}}>Education</Typography>
          {information.map((skl: edInfo) => (
            <Box sx={{pl: 2, mb: 2}}>
              <Typography variant="h6">{skl.degree}</Typography>
              <Typography hidden={!skl.minor}>Minor: {skl.minor}</Typography>
              <Typography hidden={!skl.concentration}>Concentration: {skl.concentration}</Typography>
              <Typography color="primary">{skl.school}</Typography>
              <Typography hidden={!skl.location}>{skl.location}</Typography>
              <Typography variant="body2">{skl.timeline}</Typography>
              <Typography hidden={!skl.gpa} variant="body2">GPA: {skl.gpa}</Typography>
            </Box>
        ))}
        </Box>
      </Card>
    </Slide>
  )
}

