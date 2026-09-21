import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  ServicesPage Component
// -----------------------------------------------------------------------------

export const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>{t('services.title')}</Typography>
      <Typography variant="body1">{t('services.description')}</Typography>
    </Container>
  );
}
