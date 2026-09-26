import { useState } from 'react';
import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { type ServiceItem } from '../../pages/Services/useServicesData';
import { ServiceDialog } from './ServiceDialog';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface ServiceCardProps {
  service: ServiceItem;
}

// -----------------------------------------------------------------------------
//  ServiceCard Component
// -----------------------------------------------------------------------------

export const ServiceCard = ({
  service
}: ServiceCardProps) => {
  const { t } = useTranslation();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <>
      <Card
        sx={{
          height: '100%',
          maxWidth: 345,
          display: 'flex',
          flexDirection: 'column',
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
            {service.shortDesc}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            mt: 'auto',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            onClick={toggleDialog}
            size='small'
            variant='outlined'
          >
            {t('common.learnMore')}
          </Button>
        </CardActions>
      </Card>

      <ServiceDialog
        open={isDialogOpen}
        onClose={toggleDialog}
        data={service.dialogData}
      />
    </>
  );
}
