import { Box, Card, Slide, Typography } from "@mui/material"
import { FC } from "react"

type skillsInfo = {
  group: string,
  items: string[],
}

interface props {
  information: skillsInfo[],
}

export const Skills: FC<props> = (props) => {
  const { information } =  props
  return (
    <Slide direction="up" in timeout={1500} easing="cubic-bezier(.09,-0.15,.36,.29)">
      <Card sx={{mb: 3}}>
        <Box sx={{m: 2}}>
          <Typography variant="h5" sx={{fontWeight: 600}}>Skills</Typography>
          {information.map((skl: skillsInfo) => (
            <Box sx={{mb: 2}}>
              <Typography variant="h6" color="primary">{skl.group}</Typography>
              {skl.items.map((skill: string) => (
                <Typography>{skill}</Typography>
            ))}
            </Box>
        ))}
        </Box>
      </Card>
    </Slide>
  )
}

