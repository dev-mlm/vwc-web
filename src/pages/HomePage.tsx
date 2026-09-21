import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  HomePage Component
// -----------------------------------------------------------------------------

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>{t('home.title')}</Typography>
      <Typography variant="body1">{t('home.description')}</Typography>
    </Container>
  );
}
