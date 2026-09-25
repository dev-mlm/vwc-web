import { Container, Grid } from "@mui/material";
import {
  GroupsRounded,
  AccessibilityNewRounded,
  LocalOfferRounded,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { NavigationCard, type NavigationCardProps } from "../atoms/NavigationCard";

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
//  HERO Cards
// -----------------------------------------------------------------------------

export const HeroCards = () => {
  const { t } = useTranslation();

  const navCardData: NavigationCardProps[] = [
    {
      title: t('home.section_hero.staffCard.title'),
      desc: t('home.section_hero.staffCard.desc'),
      path: "/staff",
      icon: <GroupsRounded />,
    },
    {
      title: t('home.section_hero.servicesCard.title'),
      desc: t('home.section_hero.servicesCard.desc'),
      path: "/services",
      icon: <AccessibilityNewRounded />,
    },
    {
      title: t('home.section_hero.saleCard.title'),
      desc: t('home.section_hero.saleCard.desc'),
      path: "/services",
      icon: <LocalOfferRounded />,
    },
  ]

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ p: 4 }}>
      <Grid
        container
        spacing={4}
        sx={{ alignItems: 'center' }}
      >
        {navCardData.map((card) => (
          <Grid size={{ xs: 12, md: 4 }}>
            <NavigationCard
              title={card.title}
              desc={card.desc}
              path={card.path}
              icon={card.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
