import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface DesktopNavBarProps {
  toggleDialog: () => void;
}

// -----------------------------------------------------------------------------
//  Desktop NavBar
// -----------------------------------------------------------------------------

export const DesktopNavBar = ({
  toggleDialog,
}: DesktopNavBarProps) => {
  const { t } = useTranslation();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography
            variant="h5"
            align="left"
            sx={{
              flexGrow: 1,
              textTransform: "uppercase",
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            Vida Wellness
          </Typography>

          {/* Page Buttons */}
          <Button color="inherit" component={Link} to="/">{t('nav.home')}</Button>
          <Button color="inherit" component={Link} to="/staff">{t('nav.staff')}</Button>
          <Button color="inherit" component={Link} to="/services">{t('nav.services')}</Button>

          {/* Consultation Button */}
          <Button
            color="secondary"
            variant="contained"
            onClick={toggleDialog}
            sx={{ ml: 2 }}
          >
            {t('nav.consultation')}
          </Button>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
