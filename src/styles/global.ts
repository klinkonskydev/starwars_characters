import { createTheme } from '@mui/material/styles'
import globalTheme from './theme'

type GlobalTheme = typeof globalTheme

const theme = createTheme({
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  },
  palette: {
    background: {
      default: '#2D3748'
    },
    primary: {
      main: '#E6B13B'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          --webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;

          font-family: Inter, -apple-system, Roboto;
          font-size: 1.6rem;
          font-weight: 400;

          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html  {
          font-size: 62.5%;
        }

        body {
          color: #CFD4D8;
        }
      `
    }
  },
  ...globalTheme
})

declare module '@mui/material/styles' {
  interface Theme extends GlobalTheme {}
}

export default theme
