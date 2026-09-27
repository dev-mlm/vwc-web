import { Box, Container, Divider, Stack } from '@mui/material';
import { HeroSection } from './HeroSection';
import { WhyVidaSection } from './WhyVidaSection';
import { ReviewsSection } from './ReviewsSection';
import { InfoSection } from './InfoSection';

// -----------------------------------------------------------------------------
//  HomePage Component
// -----------------------------------------------------------------------------

export const HomePage = () => {
  return (
    <Stack
      spacing={4}
      sx={{ pb: 4 }}
    >

      {/* Hero Section */}
      <HeroSection />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Container>
          <Stack spacing={4}>
            <Divider />

            {/* Why Vida Section */}
            <WhyVidaSection />

            <Divider />

            {/* Reviews Section */}
            <ReviewsSection />

            <Divider />

            {/* Info Section */}
            <InfoSection />

          </Stack>
        </Container>
      </Box>
    </Stack>
  );
}
