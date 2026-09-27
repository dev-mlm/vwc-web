import { useTranslation } from 'react-i18next';
import { styled } from '@mui/material/styles';
import { Button, Box, Tooltip } from '@mui/material';

// -----------------------------------------------------------------------------
//  Styled Components
// -----------------------------------------------------------------------------

const LanguageButton = styled(Button)(({ theme }) => ({
  color: 'inherit',
  borderColor: theme.palette.text.disabled,
  minWidth: 0,
  padding: '4px 8px',
  fontSize: '0.8rem',
  letterSpacing: '0.1em',

  '&:hover': {
    borderColor: 'currentColor',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
  },
}));

// -----------------------------------------------------------------------------
//  Language Btn
// -----------------------------------------------------------------------------

export const LanguageBtn = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language.startsWith('en');

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
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

// -----------------------------------------------------------------------------
//  Language Toggle
// -----------------------------------------------------------------------------

export const LanguageToggle = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language.startsWith('en');

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'es' : 'en');
  };

  return (
    <Tooltip
      title={t('langToggle.tooltip')}
    >
      <LanguageButton
        variant='outlined'
        onClick={toggleLanguage}
      >
        <Box component="span" sx={{ fontWeight: isEnglish ? 700 : 300 }}>
          EN
        </Box>

        <Box component="span" sx={{ mx: 0.5 }}>
          |
        </Box>

        <Box component="span" sx={{ fontWeight: !isEnglish ? 700 : 300 }}>
          ES
        </Box>
      </LanguageButton>
    </Tooltip>
  );
};
