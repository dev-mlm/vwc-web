import {
  Container,
  Typography,
  Grid,
  Stack,
  Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ReviewsSection } from '../Home/ReviewsSection';
import { useServicesData } from './useServicesData';
import { ServiceCard } from '../../components/molecules/ServiceCard';

// -----------------------------------------------------------------------------
//  ServicesPage Component
// -----------------------------------------------------------------------------

export const ServicesPage = () => {
  const { t } = useTranslation();
  const { services } = useServicesData();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={4}>

        <Stack>
          <Typography
            variant="h4"
            align='center'
            gutterBottom
          >
            {t('services.title')}
          </Typography>
          <Typography
            variant="body1"
            align='center'
          >
            {t('services.description')}
          </Typography>
        </Stack>

        <Divider />

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>
              <ServiceCard
                service={service}
              />
            </Grid>
          ))}
        </Grid>

        <Divider />

        <ReviewsSection />
      </Stack>
    </Container>
  );
}
