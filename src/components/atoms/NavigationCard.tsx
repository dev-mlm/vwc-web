import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

export interface NavigationCardProps {
  title: string;
  desc: string;
  image: string;
  path: string;
}

// -----------------------------------------------------------------------------
//  HERO Cards
// -----------------------------------------------------------------------------

export const NavigationCard = ({
  title,
  desc,
  image,
  path,
}: NavigationCardProps) => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Card
      component={RouterLink}
      to={path}
      sx={{
        textDecoration: "none",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 4,
        },
      }}
    >
      <CardMedia
        sx={{ height: 210 }}
        image={image}
        title={title}
      />

      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
