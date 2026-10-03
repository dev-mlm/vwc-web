import { createTheme } from '@mui/material/styles';

// -----------------------------------------------------------------------------
//  Theme Colors
// -----------------------------------------------------------------------------

export const colors = {
  primary: {
    50: "#F4F6F0",  // Very subtle backgrounds
    100: "#E5E9DE", // Light backgrounds or Hover
    200: "#CCD4C0", // Borders / Dividers
    300: "#ADB99D", // Secondary UI
    500: "#63714F", // Primary brand color
    700: "#4B573B", // Hover or Avtive states
    900: "#303825", // Dark emphasis
  },
  secondary: {
    50: "#FBF5EB",  // Very subtle backgrounds
    100: "#F4E5CC", // Light backgrounds or Hover
    200: "#E9CA9B", // Borders / Dividers
    300: "#DDAE68", // Secondary UI
    500: "#C98321", // Primary brand color
    700: "#9A6219", // Hover or Avtive states
    900: "#684211", // Dark emphasis
  },
  neutral: {
    50: "#FEFEFE",  // Primary page background
    100: "#FAFAF7", // Secondary backgrounds or Sections
    200: "#F3F3ED", // Card backgrounds or Subtle contrast
    300: "#E7E8DF", // Borders or Dividers
    500: "#C9CBC0", // Disabled UI or Muted elements
    700: "#858A7B", // Secondary or Muted text
    900: "#41453B", // Primary dark text
  },
  text: {
    white: "#FFFFFF",
  },
};

// -----------------------------------------------------------------------------
//  Create Theme
// -----------------------------------------------------------------------------

const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary[300],
      main: colors.primary[500],
      dark: colors.primary[700],
      contrastText: colors.text.white,
    },
    secondary: {
      light: colors.secondary[300],
      main: colors.secondary[500],
      dark: colors.secondary[700],
      contrastText: colors.text.white,
    },
    background: {
      default: colors.neutral[50],
      paper: colors.neutral[100],
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[700],
      disabled: colors.neutral[500],
    },
    divider: colors.neutral[300],
  },
  typography: {
    fontFamily: '"DM Sans", sans-serif',
    h1: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
    },
    h5: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 500,
    },
    body1: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
    },
    body2: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: '"DM Sans", sans-serif',
      fontWeight: 600,
      textTransform: "none",
    },
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
      styleOverrides: {
        tooltip: {
          backgroundColor: colors.secondary[50],
          color: colors.primary[900],
          border: `1px solid ${colors.secondary[200]}`,
          fontFamily: '"DM Sans", sans-serif',
          fontSize: '0.8rem',
          fontWeight: 400,
          lineHeight: 1.4,
          padding: '6px 10px',
          borderRadius: '4px',
          boxShadow: '0 2px 8px rgba(48, 56, 37, 0.12)',
        },
        arrow: {
          color: colors.secondary[50],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999, transition: 'transform 150ms ease, background-color 200ms ease',
          boxShadow: 'none',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: 'none',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
      },
    },
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
