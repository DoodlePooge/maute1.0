import { ThemeContext } from '@emotion/react'
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'
import { useContext } from 'react'

const MainNavigation = () => {
  const theme = useTheme()
  return (
    <AppBar sx={{
      background: theme.palette.primary.main,
      p: 1,
    }}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          color={theme.palette.text.secondary}
          sx={{
            ml: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            ':hover': {
              color: theme.palette.action.hover,
            }
          }}
        >
          MAUTE.US
        </Typography>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/paige"
          color={theme.palette.text.secondary}
          sx={{
            ml: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            ':hover': {
              color: theme.palette.action.hover,
            }
          }}
        >
          PAIGE
        </Typography>
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='/bryan'
          color={theme.palette.text.secondary}
          sx={{
            ml: 2,
            fontFamily: 'monospace',
            fontWeight: 700,
            ':hover': {
              color: theme.palette.action.hover,
            }
          }}
        >
          BRYAN
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default MainNavigation