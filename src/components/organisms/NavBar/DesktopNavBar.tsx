import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
  Tooltip,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../../molecules/LanguageBtn';
import type { ContactDialogVariant } from '../../molecules/ContactDialog';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface DesktopNavBarProps {
  toggleDialog: (variant: ContactDialogVariant) => void;
}

interface NavItem {
  title: string;
  path: string;
}

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const HOME_PATH = "/";
const STAFF_PATH = "/staff";
const SERVICES_PATH = "/services";

// -----------------------------------------------------------------------------
//  Styled Components
// -----------------------------------------------------------------------------

const SpacedTypography = styled(Typography)({
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

const NavButtonWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: '6px',
  marginRight: '6px',

  '&::after': {
    content: '""',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,

    transform: 'scaleX(0)',
    transformOrigin: 'left',
    transition: 'transform 300ms ease',
  },

  // Expand underline on hover
  '&:hover::after': {
    transform: 'scaleX(1)',
  },

  // Keep underline expanded when active
  '&:has(.active)::after': {
    transform: 'scaleX(1)',
  },
}));

// -----------------------------------------------------------------------------
//  Desktop NavBar
// -----------------------------------------------------------------------------

export const DesktopNavBar = ({
  toggleDialog,
}: DesktopNavBarProps) => {
  const { t } = useTranslation();

  const navItems: NavItem[] = [
    {
      title: t('nav.home'),
      path: HOME_PATH,
    },
    {
      title: t('nav.staff'),
      path: STAFF_PATH,
    },
    {
      title: t('nav.services'),
      path: SERVICES_PATH,
    },
  ];

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            height: 50,
          }}
        >
          {/* Logo */}
          <Typography
            variant="h4"
            sx={{
              justifySelf: 'start',
              textTransform: "uppercase",
              letterSpacing: '0.2em',
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            {t('nav.vida')}
          </Typography>

          {/* Page Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignSelf: 'stretch',
              alignItems: 'center',
            }}
          >
            {navItems.map((item) => (
              <NavButtonWrapper>
                <Button
                  color='inherit'
                  component={NavLink}
                  to={item.path}
                  end
                  className={({ isActive }) =>
                    isActive ? 'active' : undefined
                  }
                >
                  <SpacedTypography
                    className='nav-label'
                  >
                    {item.title}
                  </SpacedTypography>
                </Button>
              </NavButtonWrapper>
            ))}
          </Box>

          {/* Consultation Button */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
              alignSelf: 'stretch',
              alignItems: 'center',
            }}
          >
            <LanguageToggle />

            <Tooltip
              title={t('consultation.tooltip')}
            >
              <Button
                color="secondary"
                variant="contained"
                onClick={() => toggleDialog('consultation')}
                sx={{ ml: 2 }}
              >
                <Typography sx={{ textTransform: 'uppercase' }}>
                  {t('nav.consultation')}
                </Typography>
              </Button>
            </Tooltip>
          </Box>

        </Toolbar>
      </Container>
    </AppBar >
  );
};
