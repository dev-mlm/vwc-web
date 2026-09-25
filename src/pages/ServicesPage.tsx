import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  Stack,
  Divider
} from '@mui/material';
import zamirActionOne from '../assets/services/zamir-action-1.avif';
import zamirActionTwo from '../assets/services/zamir-action-2.avif';
import jazminActionOne from '../assets/services/jazmin-action-1.avif';
import jazminActionTwo from '../assets/services/jazmin-action-2.avif';
import officeOne from '../assets/services/office-1.avif';
import officeTwo from '../assets/services/office-2.avif';
import { useTranslation } from 'react-i18next';
import { ReviewsSection } from './Home/ReviewsSection';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface ServiceItem {
  id: string;
  title: string;
  desc: string;
  image: string;
  imageTitle: string;
}

// -----------------------------------------------------------------------------
//  ServicesPage Component
// -----------------------------------------------------------------------------

export const ServicesPage = () => {
  const { t } = useTranslation();

  const services: ServiceItem[] = [
    {
      id: '1',
      title: t('services.section_services.chiro.title'),
      desc: t('services.section_services.chiro.desc'),
      image: zamirActionOne,
      imageTitle: "Chiropractic Care Image",
    },
    {
      id: '2',
      title: t('services.section_services.physio.title'),
      desc: t('services.section_services.physio.desc'),
      image: officeOne,
      imageTitle: "Physiotherapy (PT) Image",
    },
    {
      id: '3',
      title: t('services.section_services.prenatal.title'),
      desc: t('services.section_services.prenatal.desc'),
      image: jazminActionOne,
      imageTitle: "Prenatal Care Image",
    },
    {
      id: '4',
      title: t('services.section_services.chiroCycle.title'),
      desc: t('services.section_services.chiroCycle.desc'),
      image: jazminActionTwo,
      imageTitle: "Chiro-cycle Program Image",
    },
    {
      id: '5',
      title: t('services.section_services.decomp.title'),
      desc: t('services.section_services.decomp.desc'),
      image: officeTwo,
      imageTitle: "Decompression Image",
    },
    {
      id: '6',
      title: t('services.section_services.pediatric.title'),
      desc: t('services.section_services.pediatric.desc'),
      image: zamirActionTwo,
      imageTitle: "Pediatric Care Image",
    },
  ];

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={4}>

        <Stack>
          <Typography
            variant="h4"
            align='center'
            gutterBottom
          >
            {t('services.title')}
          </Typography>
          <Typography
            variant="body1"
            align='center'
          >
            {t('services.description')}
          </Typography>
        </Stack>

        <Divider />

        <Grid container spacing={3}>
          {services.map((service) => (
            <Grid key={service.id} size={{ xs: 12, sm: 6, md: 4 }}>

              <Card
                sx={{
                  height: '100%',
                  maxWidth: 345
                }}
              >
                <CardMedia
                  sx={{ height: 210 }}
                  image={service.image}
                  title={service.imageTitle}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>

            </Grid>
          ))}
        </Grid>

        <Divider />

        <ReviewsSection />
      </Stack>
    </Container>
  );
}
