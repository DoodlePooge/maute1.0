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
  typography: {
    fontFamily: [
      '"Montserrat"',
      'sans-serif'
    ].join(','),
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
      disabled: '#999999',
    },
    action: {
      hover: '#111111AA',
      active: '#DDDDDD44',
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
    },
    MuiTypography: {
      defaultProps: {
        textAlign: 'left',
      }
    }
  }
}

export const main = {
  palette: {
  primary: {
    main: '#8AFFBD',
    contrastText: '#000000',
  },
  secondary: {
    main: '#57CAFF',
    contrastText: '#000000',
  },
  divider: '#DCA6FF',
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
}
}

export const emily = {
  palette: {
  primary: {
    main: '#8DFFF0',
    contrastText: '#000000',
  },
  secondary: {
    main: '#57CAFF',
    contrastText: '#000000',
  },
  divider: '#DCA6FF',
}
}

export const megan = {
  palette: {
  primary: {
    main: '#FF9DE0',
    contrastText: '#000000',
  },
  secondary: {
    main: '#57CAFF',
    contrastText: '#000000',
  },
  divider: '#DCA6FF',
}
}