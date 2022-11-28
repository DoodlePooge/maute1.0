import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material'

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
            width: '100%',
            ':hover': {
              color: theme.palette.action.hover,
            }
          }}
        >
          MAUTE.US
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
export default MainNavigation