import {
  Avatar,
  Box,
  Card,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import { Google } from '@mui/icons-material';
import type { Review } from '../../../api/featurable.ts';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface ReviewCardProps {
  review: Review;
}

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const avatarColors = [
  '#63714F',
  '#C98321',
  '#7B6D8D',
  '#5D7B8A',
  '#8A6552',
  '#6B7A52',
];

// -----------------------------------------------------------------------------
//  Helpers
// -----------------------------------------------------------------------------

const getAvatarColor = (name: string) => {
  const hash = name
    .split('')
    .reduce((acc, character) => acc + character.charCodeAt(0), 0);

  return avatarColors[hash % avatarColors.length];
};

const getTimeAgo = (dateString: string) => {
  const publishedDate = new Date(dateString);
  const now = new Date();

  const differenceInMilliseconds =
    now.getTime() - publishedDate.getTime();

  const days = Math.floor(
    differenceInMilliseconds / (1000 * 60 * 60 * 24)
  );

  if (days < 7) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  }

  const weeks = Math.floor(days / 7);

  if (days < 30) {
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  }

  const months = Math.floor(days / 30);

  if (days < 365) {
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  }

  const years = Math.floor(days / 365);

  return `${years} ${years === 1 ? 'year' : 'years'} ago`;
}

// -----------------------------------------------------------------------------
//  ReviewCard
// -----------------------------------------------------------------------------

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const avatarColor = getAvatarColor(review.author.name);
  const timeAgo = getTimeAgo(review.publishedAt);

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Card
      elevation={0}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: 700,
        height: '100%',
        minHeight: 300,
        p: {
          xs: 3,
          sm: 4,
        },
        pb: {
          xs: 7,
          sm: 8,
        },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
      }}
    >
      <Stack spacing={2.5}>
        {/* Reviewer */}
        <Stack
          direction="row"
          spacing={2}
          sx={{
            alignItems: 'center',
          }}
        >
          <Avatar
            src={review.author.avatarUrl ?? undefined}
            alt={review.author.name}
            sx={{
              width: 52,
              height: 52,
              backgroundColor: avatarColor,
            }}
          >
            {review.author.name.charAt(0).toUpperCase()}
          </Avatar>

          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
              }}
            >
              {review.author.name}
            </Typography>

            <Typography
              variant="subtitle1"
              color="text.secondary"
            >
              {timeAgo}
            </Typography>
          </Box>
        </Stack>

        {/* Review text */}
        <Typography
          variant="subtitle1"
          sx={{
            lineHeight: 1.7,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: {
              xs: 8,
              sm: 7,
            }
          }}
        >
          {review.text}
        </Typography>
      </Stack>

      {/* Bottom metadata */}
      <Stack
        direction="row"
        sx={{
          position: 'absolute',
          left: {
            xs: 24,
            sm: 32,
          },
          right: {
            xs: 24,
            sm: 32,
          },
          bottom: {
            xs: 20,
            sm: 24,
          },
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Rating */}
        <Rating
          value={review.rating.value}
          max={review.rating.max}
          precision={0.5}
          readOnly
          size="small"
        />

        {/* Google */}
        <Google
          sx={{
            fontSize: 24,
            color: 'text.secondary',
          }}
          aria-label="Google review"
        />
      </Stack>
    </Card>
  );
};
