import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

export interface NavigationCardProps {
  title: string;
  desc: string;
  image: string;
  action: () => void;
}

// -----------------------------------------------------------------------------
//  HERO Cards
// -----------------------------------------------------------------------------

export const NavigationCard = ({
  title,
  desc,
  image,
  action,
}: NavigationCardProps) => {
  const { t } = useTranslation();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <CardMedia
        sx={{ height: 210 }}
        image={image}
        title={title}
      />

      {/* Content */}
      <CardContent>
        <Typography
          variant="h4"
          gutterBottom
          align="center"
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          align="center"
        >
          {desc}
        </Typography>
      </CardContent>

      {/* Learn More */}
      <CardActions
        sx={{
          mt: 'auto',
          justifyContent: 'flex-end',
        }}
      >
        <Button
          onClick={action}
          size='small'
          variant='outlined'
        >
          {t('common.learnMore')}
        </Button>
      </CardActions>
    </Card>
  );
};
