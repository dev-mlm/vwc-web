import { useState } from "react";
import { Container, Stack, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ConsultationDialog } from "../../components/molecules/ConsultationDialog";
import { HeroCards } from "../../components/molecules/HeroCards";
import { useScreensize } from "../../hooks/useScreensize";

// -----------------------------------------------------------------------------
//  HERO Section
// -----------------------------------------------------------------------------

export const HeroSection = () => {
  const { t } = useTranslation();
  const { isMobile } = useScreensize();
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
      <Container sx={{ p: 4 }}>
        <Stack
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant={isMobile ? "h3" : "h2"}
            align="center"
          >
            {t('home.section_hero.title')}
          </Typography>
          <Typography
            variant={isMobile ? "h5" : "h4"}
            align="center"
            color="textSecondary"
          >
            {t('home.section_hero.subtitle')}
          </Typography>

          {/* Consultation Button */}
          <Button
            size="large"
            color="secondary"
            variant="contained"
            onClick={toggleDialog}
            sx={{ width: 'fit-content' }}
          >
            {t('nav.consultation')}
          </Button>
        </Stack>
      </Container>

      <HeroCards />

      <ConsultationDialog open={isDialogOpen} onClose={toggleDialog} />
    </>
  );
};
