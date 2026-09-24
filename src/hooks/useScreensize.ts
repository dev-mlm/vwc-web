import { useTheme, useMediaQuery } from '@mui/material';

// -----------------------------------------------------------------------------
//  useScreensize Hook
// -----------------------------------------------------------------------------

export const useScreensize = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};
