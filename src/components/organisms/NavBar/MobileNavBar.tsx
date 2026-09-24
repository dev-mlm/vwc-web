import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  MenuRounded,
  HomeRounded,
  PersonRounded,
  SpaRounded,
  SellRounded,
  LanguageRounded,
  type SvgIconComponent
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface NavItem {
  name: string;
  link: string;
  icon: SvgIconComponent;
}

interface MobileNavBarProps {
  toggleDialog: () => void;
  toggleLanguage: () => void;
}

// -----------------------------------------------------------------------------
//  Mobile NavBar
// -----------------------------------------------------------------------------

export const MobileNavBar = ({
  toggleDialog,
  toggleLanguage,
}: MobileNavBarProps) => {
  const { t } = useTranslation();
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

  const navItems: NavItem[] = [
    {
      name: t('nav.home'),
      link: "/",
      icon: HomeRounded,
    },
    {
      name: t('nav.staff'),
      link: "/staff",
      icon: PersonRounded,
    },
    {
      name: t('nav.services'),
      link: "/services",
      icon: SpaRounded,
    },
  ]

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleMobileDrawer = () => {
    setIsMobileDrawerOpen((prev) => !prev);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleMobileDrawer}>
      <List>
        {navItems.map((navItem) => (
          <ListItem key={navItem.name}>
            <ListItemButton component={NavLink} to={navItem.link}>
              <ListItemIcon>
                <navItem.icon />
              </ListItemIcon>
              <ListItemText>
                {navItem.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        <ListItem key="consultation-btn">
          <ListItemButton
            onClick={toggleDialog}
          >
            <ListItemIcon>
              <SellRounded />
            </ListItemIcon>
            <ListItemText>
              {t('nav.consultation')}
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem key="language-toggle-btn">
          <ListItemButton
            onClick={toggleLanguage}
          >
            <ListItemIcon>
              <LanguageRounded />
            </ListItemIcon>
            <ListItemText>
              {t('nav.langToggle')}
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            align="left"
            sx={{ flexGrow: 1 }}
          >
            The Vida Wellness Center
          </Typography>

          <IconButton
            onClick={toggleMobileDrawer}
          >
            <MenuRounded />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        open={isMobileDrawerOpen}
        onClose={toggleMobileDrawer}
        anchor="right"
      >
        {DrawerList}
      </Drawer>
    </>
  );
};
