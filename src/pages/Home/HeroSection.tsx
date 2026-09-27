import { useState } from "react";
import { Container, Stack, Button, Typography, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { ContactDialog } from "../../components/molecules/ContactDialog";
import { HeroCards } from "../../components/molecules/HeroCards";
import { useScreensize } from "../../hooks/useScreensize";
import Logo from "../../assets/logo/Logo-N-Text.png";
import { LanguageBtn } from "../../components/molecules/LanguageBtn";
import heroBackground from "../../assets/HeroBg.png";

// -----------------------------------------------------------------------------
//  HERO Section
// -----------------------------------------------------------------------------

export const HeroSection = () => {
  const { t } = useTranslation();
  const {
    isMobile,
    isTablet,
    isDesktop,
  } = useScreensize();
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
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",

          // Creates some space for the background to fade into
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: 0,

            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            backgroundRepeat: "no-repeat",

            // Fade the image toward the bottom
            maskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
          },

          // Optional: softens/whitens the image as it approaches the bottom
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",

            background: `
            linear-gradient(
              to bottom,
              rgba(255,255,255,0) 40%,
              rgba(255,255,255,0.55) 70%,
              rgba(255,255,255,1) 100%
            )
          `,
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Container sx={{ p: isMobile ? 0 : 4 }}>
            <Stack
              spacing={4}
            >
              <Stack
                direction={(isMobile || isTablet) ? "column" : "row"}
                spacing={(isMobile || isTablet) ? 2 : 6}
                sx={{
                  py: (isMobile || isTablet) ? 0 : 8,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Box
                  sx={{
                    ...(!isDesktop && {
                      display: 'flex',
                      justifyContent: 'center',
                      pt: 2,
                    })
                  }}
                >
                  <Box
                    component="img"
                    src={Logo}
                    alt="Vida Wellness Center"
                    sx={{
                      width: isDesktop ? '100%' : '70%',
                      height: 'auto',
                      borderRadius: 2,
                    }}
                  />
                </Box>

                <Stack
                  spacing={2}
                  sx={{
                    py: isDesktop ? 8 : 0,
                    px: 4,
                    justifyContent: 'center',
                    alignItems: isMobile ? 'center' : 'left',
                  }}
                >

                  <Typography
                    variant={
                      isMobile
                        ? "h3"
                        : "h2"
                    }
                    align={isMobile ? "center" : "left"}
                    sx={{ textTransform: 'uppercase' }}
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
                    sx={{
                      width: 'fit-content',
                      textTransform: 'uppercase',
                    }}
                  >
                    {t('home.section_hero.consultation')}
                  </Button>

                  {/* Language Button */}
                  <LanguageBtn />
                </Stack>
              </Stack >

              <HeroCards />
            </Stack >
          </Container>
        </Box>

        <ContactDialog
          open={isDialogOpen}
          onClose={toggleDialog}
          variant="consultation"
        />
      </Box>
    </>
  );
};
