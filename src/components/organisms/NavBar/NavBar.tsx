import { useState } from 'react';
import {
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ConsultationDialog } from '../../molecules/ConsultationDialog';
import { DesktopNavBar } from './DesktopNavBar';
import { MobileNavBar } from './MobileNavBar';

// -----------------------------------------------------------------------------
//  NavBar
// -----------------------------------------------------------------------------

export const NavBar = () => {
  const { i18n } = useTranslation();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  const toggleLanguage = () => {
    const nextLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(nextLang);
  };

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <>
      {/* Desktop Variant */}
      {isDesktop && (
        <DesktopNavBar
          toggleDialog={toggleDialog}
          toggleLanguage={toggleLanguage}
        />
      )}

      {/* Mobile Variant */}
      {isMobile && (
        <MobileNavBar
          toggleDialog={toggleDialog}
          toggleLanguage={toggleLanguage}
        />
      )}

      <ConsultationDialog open={isDialogOpen} onClose={toggleDialog} />
    </>
  );
};
