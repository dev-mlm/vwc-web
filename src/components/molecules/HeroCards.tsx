import { useState } from "react";
import { Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NavigationCard, type NavigationCardProps } from "../atoms/NavigationCard";
import Staff from "../../assets/nav-cards/StaffIcon.png";
import Services from "../../assets/nav-cards/Chiro Services.png";
import SaleTag from "../../assets/nav-cards/Sale Tag.png";
import { useNavigate } from "react-router-dom";
import { ContactDialog } from "./ContactDialog";

// -----------------------------------------------------------------------------
//  HERO Cards
// -----------------------------------------------------------------------------

export const HeroCards = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  const navCardData: NavigationCardProps[] = [
    {
      title: t('home.section_hero.staffCard.title'),
      desc: t('home.section_hero.staffCard.desc'),
      action: () => navigate('/staff'),
      image: Staff,
    },
    {
      title: t('home.section_hero.saleCard.title'),
      desc: t('home.section_hero.saleCard.desc'),
      action: toggleDialog,
      image: SaleTag,
    },
    {
      title: t('home.section_hero.servicesCard.title'),
      desc: t('home.section_hero.servicesCard.desc'),
      action: () => navigate('/services'),
      image: Services,
    },
  ]

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <>
      <Container>
        <Grid
          container
          rowSpacing={3}
          columnSpacing={3}
          sx={{ alignItems: 'stretch' }}
        >
          {navCardData.map((card) => (
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={{ display: 'flex' }}
            >
              <NavigationCard
                title={card.title}
                desc={card.desc}
                action={card.action}
                image={card.image}
              />
            </Grid>
          ))}
        </Grid>
      </Container>

      <ContactDialog
        open={isDialogOpen}
        onClose={toggleDialog}
        variant="newPatientSpec"
      />
    </>
  );
};
