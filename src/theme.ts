import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#63714F',
    },
    secondary: {
      main: '#C98321',
    },
    background: {
      default: '#D9D9D9'
    }
  },
  components: {
    MuiCardHeader: {
      styleOverrides: {
        root: {
          paddingBottom: 0,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          paddingTop: 12,
        },
      },
    },
  },
});

export default theme;
