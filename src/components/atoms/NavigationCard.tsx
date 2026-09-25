import React from 'react';
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { type SvgIconComponent } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

export interface NavigationCardProps {
  title: string;
  desc: string;
  icon: React.ReactElement<SvgIconComponent>;
  path: string;
}

// -----------------------------------------------------------------------------
//  HERO Cards
// -----------------------------------------------------------------------------

export const NavigationCard = ({
  title,
  desc,
  icon,
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
        component="div"
        sx={{
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.main",
          color: "primary.contrastText",
        }}
      >
        {React.cloneElement(icon, {
          sx: { fontSize: 72 },
        })}
      </CardMedia>

      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
};
