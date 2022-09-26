import { ThemeOptions } from '@mui/material/styles'

export const baseOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1300,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 4,
  },
  palette: {
    mode: 'dark',
    background:{
        default: '#1F1F1F',
        paper: '#0A0A0A',
    },
    text: {
      primary: '#EEEEEE',
      secondary: '#000000',
      disabled: '#A38EE1',
    },
  },
  components: {
    MuiCssBaseline:{
      styleOverrides: {
        html: {
          height: '100%',
          width: '100%',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      }
    }
  }
}

export const main = {
  palette: {
  primary: {
    main: '#8B85FF',
    contrastText: '#000000',
  },
  secondary: {
    main: '#57CAFF',
    contrastText: '#000000',
  },
  divider: '#DCA6FF',
  action: {
    hover: '#11119977',
    active: '#ddddff44',
  },
}}

export const paige = {
  palette: {
  primary: {
    main: '#8B85FF',
    contrastText: '#000000',
  },
  secondary: {
    main: '#57CAFF',
    contrastText: '#000000',
  },
  divider: '#DCA6FF',
  action: {
    hover: '#11119977',
    active: '#ddddff44',
  },
}}

export const bryan = {
  palette: {
  primary: {
    main: '#FF6363',
    contrastText: '#000000',
  },
  secondary: {
    main: '#57CAFF',
    contrastText: '#000000',
  },
  divider: '#DCA6FF',
  action: {
    hover: '#11119977',
    active: '#ddddff44',
  },
}
}