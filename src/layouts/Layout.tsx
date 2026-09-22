import { AppBar, Toolbar, Typography, Button, Box, Container } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  MainLayout
// -----------------------------------------------------------------------------

export const MainLayout = () => {
  const { t, i18n } = useTranslation();

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      {/* Nav Bar */}
      <AppBar position="static">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              variant="h6"
              align="left"
              sx={{ flexGrow: 1 }}
            >
              The Vida Wellness Center
            </Typography>

            {/* Page Buttons */}
            <Button color="inherit" component={Link} to="/">{t('nav.home')}</Button>
            <Button color="inherit" component={Link} to="/staff">{t('nav.staff')}</Button>
            <Button color="inherit" component={Link} to="/services">{t('nav.services')}</Button>

            {/* Language Toggle */}
            <Button
              color="secondary"
              variant="contained"
              onClick={toggleLanguage}
              sx={{ ml: 2 }}
            >
              {t('langToggle')}
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

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
