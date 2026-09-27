import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Button,
  Collapse,
} from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from '../../molecules/LanguageBtn';
import { SocialLinks } from '../../molecules/SocialLinks';
import { type ContactDialogVariant } from '../../molecules/ContactDialog';
import { colors } from '../../../theme';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface NavItem {
  title: string;
  path: string;
}

interface MobileNavBarProps {
  toggleDialog: (variant: ContactDialogVariant) => void;
}

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const HOME_PATH = '/';
const STAFF_PATH = '/staff';
const SERVICES_PATH = '/services';

// -----------------------------------------------------------------------------
//  Styled Components
// -----------------------------------------------------------------------------

const SpacedTypography = styled(Typography)({
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
});

const DrawerNavItem = styled(ListItemButton)(({ theme }) => ({
  position: 'relative',
  minHeight: 56,
  padding: '0 4px',

  color: theme.palette.text.primary,

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

  '&:hover': {
    backgroundColor: 'transparent',
  },

  '&:hover::after': {
    transform: 'scaleX(1)',
  },

  // Keep the underline expanded for the active page
  '&.active::after': {
    transform: 'scaleX(1)',
  },
}));

const DrawerNavText = styled(ListItemText)({
  margin: 0,

  '& .MuiTypography-root': {
    fontSize: '1.2rem',
    fontWeight: 500,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },
});

// -----------------------------------------------------------------------------
//  Mobile NavBar
// -----------------------------------------------------------------------------

export const MobileNavBar = ({
  toggleDialog,
}: MobileNavBarProps) => {
  const { t } = useTranslation();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

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
  //  Event Handlers
  // ---------------------------------------------

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen((prev) => !prev);
  };

  const closeMobileDrawer = () => {
    setIsMobileDrawerOpen(false);
  };

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: (theme) => theme.zIndex.appBar,
      }}
    >
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h5"
            sx={{
              flexGrow: 1,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            {t('nav.vida')}
          </Typography>

          <IconButton
            onClick={toggleMobileDrawer}
            sx={(theme) => ({
              color: theme.palette.background.paper,
            })}
            aria-label={isMobileDrawerOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileDrawerOpen ? (
              <Close fontSize="large" />
            ) : (
              <Menu fontSize="large" />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Dropdown container */}
      <Box
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
        }}
      >
        <Collapse in={isMobileDrawerOpen}>
          <Box
            sx={(theme) => ({
              width: '100%',
              backgroundColor: theme.palette.background.default,
              borderBottom: `1px solid ${theme.palette.divider}`,
              boxShadow: theme.shadows[4],
              px: 3,
              py: 3,
            })}
          >
            <List
              disablePadding
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 0.5,
              }}
            >
              {navItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                  <DrawerNavItem
                    component={NavLink}
                    to={item.path}
                    end
                    onClick={closeMobileDrawer}
                    className={({ isActive }) =>
                      isActive ? 'active' : undefined
                    }
                  >
                    <DrawerNavText>
                      {item.title}
                    </DrawerNavText>
                  </DrawerNavItem>
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
              }}
            >
              {/* Book a Consultation */}
              <Button
                variant="contained"
                fullWidth
                onClick={() => {
                  toggleDialog('consultation');
                  closeMobileDrawer();
                }}
                sx={{
                  minHeight: 48,
                  color: colors.neutral[900],
                  backgroundColor: colors.neutral[300],
                }}
              >
                <SpacedTypography>
                  {t('nav.bookConsultation')}
                </SpacedTypography>
              </Button>

              {/* New Patient Special */}
              <Button
                color="secondary"
                variant="contained"
                fullWidth
                onClick={() => {
                  toggleDialog('newPatientSpec');
                  closeMobileDrawer();
                }}
                sx={{ minHeight: 48 }}
              >
                <SpacedTypography>
                  {t('nav.newPatientSpec')}
                </SpacedTypography>
              </Button>
            </Box>

            <Divider sx={{ my: 3 }} />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <LanguageToggle />
              <SocialLinks />
            </Box>
          </Box>
        </Collapse>
      </Box>
    </Box>
  );
};
