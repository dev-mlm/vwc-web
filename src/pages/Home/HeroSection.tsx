import { useState } from "react";
import { Container, Stack, Button, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ConsultationDialog } from "../../components/molecules/ConsultationDialog";
import { HeroCards } from "../../components/molecules/HeroCards";
import { useScreensize } from "../../hooks/useScreensize";
import largeLogo from "../../assets/logo/logo-square.png";
import { LanguageBtn } from "../../components/molecules/LanguageBtn";

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
          direction={isMobile ? "column-reverse" : "row"}
          spacing={isMobile ? 4 : 6}
          sx={{
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Box>
            <Box
              component="img"
              src={largeLogo}
              alt="Vida Wellness Center"
              sx={(theme) => ({
                width: '100%',
                height: 'auto',
                border: `4px solid ${theme.palette.text.disabled}`,
                borderRadius: 2,
              })}
            />
          </Box>

          <Stack
            spacing={2}
            sx={{
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : 'left',
            }}
          >

            <Typography
              variant={isMobile ? "h3" : "h2"}
              align={isMobile ? "center" : "left"}
            >
              {t('home.section_hero.title')}
            </Typography>

            <Typography
              variant={isMobile ? "h5" : "h4"}
              align={isMobile ? "center" : "left"}
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

            {/* Language Button */}
            <LanguageBtn />
          </Stack>
        </Stack >
      </Container>

      <HeroCards />

      <ConsultationDialog open={isDialogOpen} onClose={toggleDialog} />
    </>
  );
};
