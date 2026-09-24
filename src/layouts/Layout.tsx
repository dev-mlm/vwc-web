import { Typography, Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/organisms/NavBar/NavBar';

// -----------------------------------------------------------------------------
//  MainLayout
// -----------------------------------------------------------------------------

export const MainLayout = () => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      {/* Nav Bar */}
      <NavBar />

      {/* Page Content */}
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Container maxWidth="lg">
          <Outlet />
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'grey.200' }}>
        <Container maxWidth="sm">
          <Typography variant="body2" color="text.secondary" align="center">
            © {new Date().getFullYear()} Vida Wellness Center. All rights reserved. All content is protected by U.S. and international copyright laws. Patient information is private and managed in strict compliance with HIPAA. Unauthorized use or distribution of the content on this site is prohibited.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
