import {
  Card,
  Skeleton,
  Stack,
} from '@mui/material';

// -----------------------------------------------------------------------------
//  ReviewsSkeleton
// -----------------------------------------------------------------------------

export const ReviewsSkeleton = () => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Card
      elevation={0}
      sx={{
        width: '100%',
        maxWidth: 700,
        minHeight: 300,
        p: {
          xs: 3,
          sm: 4,
        },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
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
          <Skeleton
            variant="circular"
            width={52}
            height={52}
          />

          <Stack spacing={0.5}>
            <Skeleton
              variant="text"
              width={120}
              height={24}
            />

            <Skeleton
              variant="text"
              width={100}
              height={20}
            />
          </Stack>
        </Stack>

        {/* Review text */}
        <Stack spacing={0.5}>
          <Skeleton variant="text" width="100%" />
          <Skeleton variant="text" width="90%" />
          <Skeleton variant="text" width="65%" />
        </Stack>
      </Stack>
    </Card>
  );
};
