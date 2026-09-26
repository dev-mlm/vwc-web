import { createTheme } from '@mui/material/styles';

// -----------------------------------------------------------------------------
//  Theme Colors
// -----------------------------------------------------------------------------

const colors = {
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
