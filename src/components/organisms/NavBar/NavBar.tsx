import { useState } from 'react';
import { ContactDialog, type ContactDialogVariant } from '../../molecules/ContactDialog';
import { DesktopNavBar } from './DesktopNavBar';
import { MobileNavBar } from './MobileNavBar';
import { useScreensize } from '../../../hooks/useScreensize';

// -----------------------------------------------------------------------------
//  NavBar
// -----------------------------------------------------------------------------

export const NavBar = () => {
  const {
    isDesktop,
    isTablet,
    isMobile,
  } = useScreensize();

  const [variant, setVariant] = useState<ContactDialogVariant>('consultation');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleDialog = (variant: ContactDialogVariant) => {
    setVariant(variant);
    setIsDialogOpen((prev) => !prev);
  };

  const closeDialog = () => {
    setVariant('consultation');
    setIsDialogOpen(false);
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
        />
      )}

      {/* Mobile Variant */}
      {(isTablet || isMobile) && (
        <MobileNavBar
          toggleDialog={toggleDialog}
        />
      )}

      <ContactDialog
        open={isDialogOpen}
        onClose={closeDialog}
        variant={variant}
      />
    </>
  );
};
