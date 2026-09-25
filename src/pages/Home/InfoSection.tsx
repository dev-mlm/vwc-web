import { Container, Stack } from '@mui/material';
import { BusinessHours } from '../../components/molecules/BusinessHours';
import { PhoneCard } from '../../components/molecules/PhoneCard';
import { MapView } from '../../components/molecules/MapView';

// -----------------------------------------------------------------------------
//  Info Section
// -----------------------------------------------------------------------------

export const InfoSection = () => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ p: 4 }}>
      <Stack direction='row' spacing={2}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <BusinessHours />
          <PhoneCard />
        </Stack>

        <MapView />
      </Stack>
    </Container>
  );
};
