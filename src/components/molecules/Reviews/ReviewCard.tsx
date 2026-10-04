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
    .reduce(
      (acc, character) =>
        acc + character.charCodeAt(0),
      0
    );

  return avatarColors[
    hash % avatarColors.length
  ];
};

const getDisplayName = (name: string) => {
  const parts = name
    .trim()
    .split(/\s+/)
    .map(
      (part) =>
        part.charAt(0).toUpperCase() +
        part.slice(1).toLowerCase()
    );

  if (parts.length < 2) {
    return parts[0];
  }

  const lastName = parts[parts.length - 1];
  return `${parts.slice(0, -1).join(' ')} ${lastName.charAt(0)}.`;
};

const getTimeAgo = (dateString: string) => {
  const publishedDate = new Date(dateString);
  const now = new Date();

  const differenceInMilliseconds =
    now.getTime() -
    publishedDate.getTime();

  const days = Math.floor(
    differenceInMilliseconds /
    (1000 * 60 * 60 * 24)
  );

  if (days < 7) {
    return `${days} ${days === 1 ? 'day' : 'days'
      } ago`;
  }

  const weeks = Math.floor(days / 7);

  if (days < 30) {
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'
      } ago`;
  }

  const months = Math.floor(days / 30);

  if (days < 365) {
    return `${months} ${months === 1 ? 'month' : 'months'
      } ago`;
  }

  const years = Math.floor(days / 365);

  return `${years} ${years === 1 ? 'year' : 'years'
    } ago`;
};

// -----------------------------------------------------------------------------
//  ReviewCard
// -----------------------------------------------------------------------------

export const ReviewCard = ({
  review,
}: ReviewCardProps) => {
  const avatarColor = getAvatarColor(
    review.author.name
  );

  const timeAgo = getTimeAgo(
    review.publishedAt
  );

  // ---------------------------------------------------------------------------
  //  JSX
  // ---------------------------------------------------------------------------

  return (
    <Card
      elevation={1}
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 0,
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        p: {
          xs: 2,
          sm: 2,
        },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* ------------------------------------------------------------------- */}
      {/* Reviewer */}
      {/* ------------------------------------------------------------------- */}

      <Stack
        direction="row"
        spacing={2}
        sx={{
          alignItems: 'center',
          flexShrink: 0,
        }}
      >
        <Avatar
          src={
            review.author.avatarUrl ??
            undefined
          }
          alt={review.author.name}
          sx={{
            width: 52,
            height: 52,
            backgroundColor: avatarColor,
          }}
        >
          {review.author.name
            .charAt(0)
            .toUpperCase()}
        </Avatar>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
            }}
          >
            {getDisplayName(review.author.name)}
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
          >
            {timeAgo}
          </Typography>
        </Box>
      </Stack>

      {/* ------------------------------------------------------------------- */}
      {/* Review text */}
      {/* ------------------------------------------------------------------- */}

      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          mt: 2.5,
          overflow: 'hidden',
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            lineHeight: 1.5,

            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',

            /*
             * Keep enough space for the footer.
             */
            WebkitLineClamp: {
              xs: 6,
              sm: 6,
            },

            overflow: 'hidden',
          }}
        >
          {review.text}
        </Typography>
      </Box>

      {/* ------------------------------------------------------------------- */}
      {/* Bottom metadata */}
      {/* ------------------------------------------------------------------- */}

      <Stack
        direction="row"
        sx={{
          flexShrink: 0,
          mt: 2,

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
