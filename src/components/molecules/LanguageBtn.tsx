import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

// -----------------------------------------------------------------------------
//  Language Btn
// -----------------------------------------------------------------------------

export const LanguageBtn = () => {
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
    <Button
      color="primary"
      variant="outlined"
      onClick={toggleLanguage}
      sx={{ width: 'fit-content' }}
    >
      {t('nav.langToggle')}
    </Button>
  );
};
