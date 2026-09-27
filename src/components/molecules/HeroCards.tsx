import { Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ResponsiveContainer } from "../atoms/ResponsiveContainer";
import { NavigationCard, type NavigationCardProps } from "../atoms/NavigationCard";
import Staff from "../../assets/nav-cards/Staff.png";
import Services from "../../assets/nav-cards/Services.png";
import NewPatientSpecial from "../../assets/nav-cards/New-Patient-Special.png";

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
      image: Staff,
    },
    {
      title: t('home.section_hero.servicesCard.title'),
      desc: t('home.section_hero.servicesCard.desc'),
      path: "/services",
      image: Services,
    },
    {
      title: t('home.section_hero.saleCard.title'),
      desc: t('home.section_hero.saleCard.desc'),
      path: "/services",
      image: NewPatientSpecial,
    },
  ]

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <ResponsiveContainer>
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
              image={card.image}
            />
          </Grid>
        ))}
      </Grid>
    </ResponsiveContainer>
  );
};
