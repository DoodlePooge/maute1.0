import { Avatar, Box, Card, Slide, useTheme } from "@mui/material"
import { FC } from "react"
import leaves from '/src/assets/static/images/leaves.webp'

interface props {
  imgPath: string,
  link?: string,
}

export const FamTreeAvtr: FC<props> = (props) => {
  const { imgPath, link } =  props
  const theme = useTheme()
  return (  
  <Box sx={{ my: 3, maxWidth: 120, maxHeight: 120, transition: theme.transitions.create(['transform']), ":hover": {transform: 'scale(1.5)'} }}>
    <a href={link}>
    <Box sx={{position: 'absolute', zIndex: 1}}>
      <img src={leaves} width={120} height={120} />
    </Box>
    <Box sx={{ pl: 3, pt: 3, position: 'relative'}}>
      <Avatar
      src={imgPath}
      sx={{  width: 72, height: 72}}
      />
    </Box>
    </a>
  </Box>
  )
}
