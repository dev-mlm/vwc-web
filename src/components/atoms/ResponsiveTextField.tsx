import { TextField, type TextFieldProps, useMediaQuery, useTheme } from '@mui/material';

// -----------------------------------------------------------------------------
//  Responsive Text Field
// -----------------------------------------------------------------------------

export const ResponsiveTextField = (props: TextFieldProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <TextField
      fullWidth
      {...props}
      size={isMobile ? 'small' : 'medium'}
    />
  );
};
