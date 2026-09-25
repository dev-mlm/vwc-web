import { Container, Typography, Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { WhyVidaSection } from './WhyVidaSection';
import { ReviewsSection } from './ReviewsSection';
import { MapView } from '../../components/molecules/MapView';

// -----------------------------------------------------------------------------
//  HomePage Component
// -----------------------------------------------------------------------------

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>{t('home.title')}</Typography>
      <Typography variant="body1">{t('home.description')}</Typography>

      <Divider />

      {/* Why Vida Section */}
      <WhyVidaSection />

      <Divider />

      {/* Reviews Section */}
      <ReviewsSection />

      <Divider />

      {/* Map Section */}
      <MapView />

    </Container>
  );
}
