import { Container, Divider, Stack } from '@mui/material';
import { HeroSection } from './HeroSection';
import { WhyVidaSection } from './WhyVidaSection';
import { ReviewsSection } from './ReviewsSection';
import { InfoSection } from './InfoSection';

// -----------------------------------------------------------------------------
//  HomePage Component
// -----------------------------------------------------------------------------

export const HomePage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={4}>

        {/* Hero Section */}
        <HeroSection />

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
  );
}
