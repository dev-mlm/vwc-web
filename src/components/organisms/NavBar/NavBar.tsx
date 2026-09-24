import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ConsultationDialog } from '../../molecules/ConsultationDialog';
import { DesktopNavBar } from './DesktopNavBar';
import { MobileNavBar } from './MobileNavBar';
import { useScreensize } from '../../../hooks/useScreensize';

// -----------------------------------------------------------------------------
//  NavBar
// -----------------------------------------------------------------------------

export const NavBar = () => {
  const { i18n } = useTranslation();
  const {
    isDesktop,
    isTablet,
    isMobile,
  } = useScreensize();

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
      {(isTablet || isMobile) && (
        <MobileNavBar
          toggleDialog={toggleDialog}
          toggleLanguage={toggleLanguage}
        />
      )}

      <ConsultationDialog open={isDialogOpen} onClose={toggleDialog} />
    </>
  );
};
