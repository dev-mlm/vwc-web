import {
  Box,
  IconButton,
  Stack,
} from '@mui/material';
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from '@mui/icons-material';
import { useState } from 'react';
import type { Review } from '../../../api/featurable';
import { ReviewCard } from './ReviewCard.tsx';
import { ReviewsSkeleton } from './ReviewsSkeleton.tsx';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface ReviewCarouselProps {
  reviews?: Review[];
  isLoading?: boolean;
}

// -----------------------------------------------------------------------------
//  ReviewCarousel
// -----------------------------------------------------------------------------

export const ReviewCarousel = ({
  reviews = [],
  isLoading = false,
}: ReviewCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Return Skeleton while reviews load
  if (isLoading) {
    return <ReviewsSkeleton />;
  }

  if (reviews.length === 0) {
    return null;
  }

  const review = reviews[currentIndex];

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const previousReview = () => {
    setCurrentIndex((current) =>
      current === 0 ? reviews.length - 1 : current - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex((current) =>
      current === reviews.length - 1 ? 0 : current + 1
    );
  };

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Stack
      spacing={3}
      sx={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      {/* Review card */}
      <ReviewCard review={review} />

      {/* Navigation */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={previousReview}
          aria-label="Previous review"
        >
          <ArrowBackIosNewRounded fontSize="small" />
        </IconButton>

        {/* Pagination */}
        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: 'center',
          }}
        >
          {reviews.map((review, index) => (
            <Box
              key={review.id}
              component="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to review ${index + 1}`}
              sx={{
                width: index === currentIndex ? 24 : 8,
                height: 8,
                p: 0,
                border: 0,
                borderRadius: 4,
                backgroundColor:
                  index === currentIndex
                    ? 'primary.main'
                    : 'action.disabled',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
              }}
            />
          ))}
        </Stack>

        <IconButton
          onClick={nextReview}
          aria-label="Next review"
        >
          <ArrowForwardIosRounded fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};
