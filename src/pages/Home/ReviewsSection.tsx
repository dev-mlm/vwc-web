import { Container, Stack, Typography } from '@mui/material';
import { GoogleReviews } from '../../components/molecules/GoogleReviews';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Reviews Section
// -----------------------------------------------------------------------------

export const ReviewsSection = () => {
  const { t } = useTranslation();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ p: 4 }}>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
        >
          {t('home.section_reviews.title')}
        </Typography>

        <GoogleReviews />
      </Stack>
    </Container>
  );
};
