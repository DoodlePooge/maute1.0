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
      pl: 2,
    }}>
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          color={theme.palette.text.secondary}
          sx={{
            m: 2,
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
            m: 2,
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
            m: 2,
            fontWeight: 700,
            ':hover': {
              color: theme.palette.action.hover,
            }
          }}
        >
          BRYAN
        </Typography>
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='/emily'
          color={theme.palette.text.secondary}
          sx={{
            m: 2,
            fontWeight: 700,
            ':hover': {
              color: theme.palette.action.hover,
            }
          }}
        >
          EMILY
        </Typography>
        <Typography
          variant='h6'
          noWrap
          component='a'
          href='/megan'
          color={theme.palette.text.secondary}
          sx={{
            m: 2,
            fontWeight: 700,
            ':hover': {
              color: theme.palette.action.hover,
            }
          }}
        >
          MEGAN
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default MainNavigation