import { Stack, Typography } from '@mui/material';
import { ResponsiveContainer } from '../../components/atoms/ResponsiveContainer';
import { GoogleReviews } from '../../components/molecules/GoogleReviews';
import { ReviewCarousel } from '../../components/molecules/Reviews/ReviewCarousel';
import { useReviews } from '../../hooks/useReviews';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Reviews Section
// -----------------------------------------------------------------------------

export const ReviewsSection = () => {
  const { t } = useTranslation();
  const {
    data,
    isPending,
    isError,
  } = useReviews();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <ResponsiveContainer>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
        >
          {t('home.section_reviews.title')}
        </Typography>

        <ReviewCarousel
          reviews={data}
          isLoading={isPending}
        />

        <GoogleReviews />
      </Stack>
    </ResponsiveContainer>
  );
};
