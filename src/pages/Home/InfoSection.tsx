import { Container, Stack } from '@mui/material';
import { BusinessHours } from '../../components/molecules/BusinessHours';
import { PhoneCard } from '../../components/molecules/PhoneCard';
import { MapView } from '../../components/molecules/MapView';
import { useScreensize } from '../../hooks/useScreensize';

// -----------------------------------------------------------------------------
//  Info Section
// -----------------------------------------------------------------------------

export const InfoSection = () => {
  const { isMobile } = useScreensize();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ pt: 4 }}>
      <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <BusinessHours />
          <PhoneCard />
        </Stack>

        <MapView />
      </Stack>
    </Container>
  );
};
