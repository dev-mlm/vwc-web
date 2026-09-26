import { Stack } from '@mui/material';
import { ResponsiveContainer } from '../../components/atoms/ResponsiveContainer';
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
    <ResponsiveContainer>
      <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
        <Stack spacing={2} sx={{ width: '100%' }}>
          <BusinessHours />
          <PhoneCard />
        </Stack>

        <MapView />
      </Stack>
    </ResponsiveContainer>
  );
};
