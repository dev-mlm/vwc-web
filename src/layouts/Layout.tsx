import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/organisms/NavBar/NavBar';
import { Footer } from '../components/organisms/Footer/Footer';

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
      <Footer />
    </Box>
  );
}
