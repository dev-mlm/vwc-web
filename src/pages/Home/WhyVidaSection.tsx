import { Container, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Why Vida Section
// -----------------------------------------------------------------------------

export const WhyVidaSection = () => {
  const { t } = useTranslation();
  const desc = [
    t('home.section_whyVida.desc1'),
    t('home.section_whyVida.desc2'),
    t('home.section_whyVida.desc3'),
  ];

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ p: 4 }}>
      <Stack spacing={2}>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
        >
          {t('home.section_whyVida.title')}
        </Typography>

        <Stack spacing={1}>
          {desc.map((text) => (
            <Typography
              variant='h6'
              align="center"
              color='textSecondary'
            >
              {text}
            </Typography>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};
