import { Typography, Box, Container, Stack } from '@mui/material';
import { SocialLinks } from '../../molecules/SocialLinks';
import { useScreensize } from '../../../hooks/useScreensize';
import { useEffect, useState } from 'react';

// -----------------------------------------------------------------------------
//  Footer
// -----------------------------------------------------------------------------

export const Footer = () => {
  const {
    isMobile,
    isTablet,
  } = useScreensize();
  const [socialsDirection, setSocialsDirection] = useState<'row' | 'column'>((isMobile ? 'column' : 'row'));

  useEffect(() => {
    setSocialsDirection(((isTablet || isMobile) ? 'column' : 'row'));
  }, [isMobile]);

  const copyrightText = `
    © ${new Date().getFullYear()} Vida Wellness Center. All rights reserved. All content is protected by U.S and international copyright laws. Patient information is private and managed in strict compliance with HIPAA. Unauthorized use or distribution of the content on this site is prohibited.
  `;

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Box component="footer" sx={{ py: 3, mt: 'auto', backgroundColor: 'grey.200' }}>
      <Container maxWidth="lg">
        <Stack direction="row">
          <Container>
            <Typography
              variant="caption"
              color="text.secondary"
              align="center"
            >
              {copyrightText}
            </Typography>
          </Container>

          <SocialLinks direction={socialsDirection} />
        </Stack>
      </Container>
    </Box>
  );
};
