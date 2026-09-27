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
          <Button
            color="inherit"
            component={Link}
            to="/"
          >
            <Typography sx={{ textTransform: 'uppercase' }}>
              {t('nav.home')}
            </Typography>
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/staff"
          >
            <Typography sx={{ textTransform: 'uppercase' }}>
              {t('nav.staff')}
            </Typography>
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/services"
          >
            <Typography sx={{ textTransform: 'uppercase' }}>
              {t('nav.services')}
            </Typography>
          </Button>

          {/* Consultation Button */}
          <Button
            color="secondary"
            variant="contained"
            onClick={toggleDialog}
            sx={{ ml: 2 }}
          >
            <Typography sx={{ textTransform: 'uppercase' }}>
              {t('nav.consultation')}
            </Typography>
          </Button>
        </Toolbar>
      </Container>
    </AppBar >
  );
};
