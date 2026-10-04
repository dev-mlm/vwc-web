import {
  Box,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  ArrowBackIosNewRounded,
  ArrowForwardIosRounded,
} from '@mui/icons-material';
import { useEffect, useState, useRef } from 'react';
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
//  Constants
// -----------------------------------------------------------------------------

const AUTO_PLAY_INTERVAL = 3000;
const AUTO_PLAY_RESUME_DELAY = 5000;
const DESKTOP_CARDS_VISIBLE = 3;


// -----------------------------------------------------------------------------
//  ReviewCarousel
// -----------------------------------------------------------------------------

export const ReviewCarousel = ({
  reviews = [],
  isLoading = false,
}: ReviewCarouselProps) => {
  const theme = useTheme();

  const isDesktop = useMediaQuery(
    theme.breakpoints.up(theme.breakpoints.values.sm + 170)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ---------------------------------------------------------------------------
  //  Helpers
  // ---------------------------------------------------------------------------

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      setIsAutoPlaying(true);
    }, AUTO_PLAY_RESUME_DELAY);
  };

  // Cleanup on Unmount
  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  // ---------------------------------------------------------------------------
  //  Number of cards visible
  // ---------------------------------------------------------------------------

  const cardsVisible = isDesktop
    ? DESKTOP_CARDS_VISIBLE
    : 1;

  /*
   * The final valid index is the first card of the
   * final visible window.
   *
   * Example with 5 reviews on desktop:
   *
   * index 0 -> [1] [2] [3]
   * index 1 -> [2] [3] [4]
   * index 2 -> [3] [4] [5]
   *
   * Therefore maxIndex = 2.
   */
  const maxIndex = Math.max(
    reviews.length - cardsVisible,
    0
  );

  // ---------------------------------------------------------------------------
  //  Keep index valid when breakpoint changes
  // ---------------------------------------------------------------------------

  useEffect(() => {
    setCurrentIndex((current) =>
      Math.min(current, maxIndex)
    );
  }, [maxIndex]);

  // ---------------------------------------------------------------------------
  //  Automatically rotate reviews
  // ---------------------------------------------------------------------------

  useEffect(() => {
    if (!isAutoPlaying || maxIndex <= 0) {
      return;
    }

    const interval = setInterval(() => {
      setCurrentIndex((current) =>
        current >= maxIndex ? 0 : current + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoPlaying, maxIndex]);

  // ---------------------------------------------------------------------------
  //  Return Skeleton while reviews load
  // ---------------------------------------------------------------------------

  if (isLoading) {
    return <ReviewsSkeleton />;
  }

  if (reviews.length === 0) {
    return null;
  }

  // ---------------------------------------------------------------------------
  //  Event Handlers
  // ---------------------------------------------------------------------------

  const previousReview = () => {
    pauseAutoPlay();

    setCurrentIndex((current) =>
      current === 0 ? maxIndex : current - 1
    );
  };

  const nextReview = () => {
    pauseAutoPlay();

    setCurrentIndex((current) =>
      current >= maxIndex ? 0 : current + 1
    );
  };

  const selectReview = (index: number) => {
    if (index === currentIndex) {
      return;
    }

    pauseAutoPlay();
    setCurrentIndex(index);
  };

  // ---------------------------------------------------------------------------
  //  Carousel dimensions
  // ---------------------------------------------------------------------------

  /*
   * The track is wide enough to contain every review.
   *
   * Each card is:
   *
   * Mobile:  1 / reviews.length of the track
   * Desktop: 1 / reviews.length of the track
   *
   * This means each card is exactly:
   *
   * Mobile:  100% of the viewport
   * Desktop: 1/3 of the viewport
   */
  const trackWidth = `${reviews.length * (100 / cardsVisible)}%`;

  /*
   * Because transform percentages are relative to the track,
   * we need to move by one card's percentage of the track.
   */
  const cardWidthPercentage =
    100 / reviews.length;

  const trackTransform = `translateX(-${currentIndex * cardWidthPercentage
    }%)`;

  // ---------------------------------------------------------------------------
  //  JSX
  // ---------------------------------------------------------------------------

  return (
    <Stack
      spacing={3}
      sx={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* Carousel viewport */}
      {/* ------------------------------------------------------------------- */}

      <Box
        sx={{
          width: '100%',
          maxWidth: 1400,
          height: {
            xs: 320,
            sm: 350,
            md: 320,
          },
          overflow: 'hidden',
        }}
      >
        {/* ----------------------------------------------------------------- */}
        {/* Sliding track */}
        {/* ----------------------------------------------------------------- */}

        <Box
          sx={{
            display: 'flex',
            width: trackWidth,
            height: '100%',
            transform: trackTransform,
            transition:
              'transform 450ms ease-in-out',
          }}
        >
          {reviews.map((review) => (
            <Box
              key={review.id}
              sx={{
                /*
                 * Every card occupies exactly one card-width
                 * within the track.
                 */
                flex: `0 0 ${cardWidthPercentage}%`,
                width: `${cardWidthPercentage}%`,
                height: '100%',
                px: {
                  xs: 0,
                  sm: 1,
                  md: 1.5,
                },
                pb: 1,
                boxSizing: 'border-box',
              }}
            >
              <ReviewCard review={review} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* ------------------------------------------------------------------- */}
      {/* Navigation */}
      {/* ------------------------------------------------------------------- */}

      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
        }}
      >
        <IconButton
          onClick={previousReview}
          aria-label="Previous reviews"
          disabled={maxIndex === 0}
        >
          <ArrowBackIosNewRounded fontSize="small" />
        </IconButton>

        {/* ----------------------------------------------------------------- */}
        {/* Pagination */}
        {/* ----------------------------------------------------------------- */}

        <Stack
          direction="row"
          spacing={1}
          sx={{
            alignItems: 'center',
          }}
        >
          {reviews
            .slice(0, maxIndex + 1)
            .map((review, index) => (
              <Box
                key={review.id}
                component="button"
                onClick={() => selectReview(index)}
                aria-label={`Go to review ${index + 1}`}
                aria-current={
                  index === currentIndex
                    ? 'true'
                    : undefined
                }
                sx={{
                  width:
                    index === currentIndex ? 24 : 8,
                  height: 8,
                  p: 0,
                  border: 0,
                  borderRadius: 4,
                  backgroundColor:
                    index === currentIndex
                      ? 'primary.main'
                      : 'action.disabled',
                  cursor: 'pointer',
                  transition:
                    'all 0.25s ease',
                }}
              />
            ))}
        </Stack>

        <IconButton
          onClick={nextReview}
          aria-label="Next reviews"
          disabled={maxIndex === 0}
        >
          <ArrowForwardIosRounded fontSize="small" />
        </IconButton>
      </Stack>
    </Stack>
  );
};
