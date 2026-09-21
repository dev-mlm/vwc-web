import { Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  StaffPage Component
// -----------------------------------------------------------------------------

export const StaffPage = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>{t('staff.title')}</Typography>
      <Typography variant="body1">{t('staff.description')}</Typography>
    </Container>
  );
};
