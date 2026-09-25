import {
  Container,
  Typography,
  Stack,
  Box,
  Grid,
  Divider,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import jazminProfile from '../assets/profiles/jazmin-profile.avif';
import zamirProfile from '../assets/profiles/zamir-profile.avif';
import { InfoSection } from './Home/InfoSection';

// -----------------------------------------------------------------------------
//  StaffPage Component
// -----------------------------------------------------------------------------

export const StaffPage = () => {
  const { t } = useTranslation();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={4}>

        {/* Header */}
        <Stack>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
          >
            {t('staff.title')}
          </Typography>
          <Typography
            variant="body1"
            align="center"
          >
            {t('staff.description')}
          </Typography>
        </Stack>

        <Divider />

        {/* Jazmin's Section */}
        <Grid
          container
          spacing={4}
          sx={{ alignItems: 'center' }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={jazminProfile}
              alt="Jazmin Profile"
              sx={(theme) => ({
                width: '100%',
                height: 'auto',
                border: `4px solid ${theme.palette.secondary.main}`,
                borderRadius: 2,
              })}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              <Typography variant="h5">
                {t('staff.section_jazmin.title')}
              </Typography>
              <Typography>
                {t('staff.section_jazmin.bio1')}
              </Typography>
              <Typography>
                {t('staff.section_jazmin.bio2')}
              </Typography>
              <Typography>
                {t('staff.section_jazmin.bio3')}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider />

        {/* Zamir's Section */}
        <Grid
          container
          spacing={4}
          direction={{ xs: 'row', md: 'row-reverse' }}
          sx={{ alignItems: 'center' }}
        >
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={zamirProfile}
              alt="Zamir Profile"
              sx={(theme) => ({
                width: '100%',
                height: 'auto',
                border: `4px solid ${theme.palette.secondary.main}`,
                borderRadius: 2,
              })}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Stack spacing={2}>
              <Typography variant="h5">
                {t('staff.section_zamir.title')}
              </Typography>
              <Typography>
                {t('staff.section_zamir.bio1')}
              </Typography>
              <Typography>
                {t('staff.section_zamir.bio2')}
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Divider />

        <InfoSection />
      </Stack>
    </Container>
  );
};
