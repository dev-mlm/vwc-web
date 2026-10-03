import { useState } from "react";
import {
  Container,
  Stack,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { ArrowForwardRounded, KeyboardArrowDownRounded } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import { ContactDialog } from "../../components/molecules/ContactDialog";
import { HeroCards } from "../../components/molecules/HeroCards";
import { useScreensize } from "../../hooks/useScreensize";
import { HeroGradientWrapper } from "./HeroGradient";
import { LanguageBtn } from "../../components/molecules/LanguageBtn";

// -----------------------------------------------------------------------------
// HERO Section
// -----------------------------------------------------------------------------

export const HeroSection = () => {
  const { t } = useTranslation();

  const {
    isMobile,
  } = useScreensize();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // ---------------------------------------------
  // Event Handlers
  // ---------------------------------------------

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  // ---------------------------------------------
  // JSX
  // ---------------------------------------------

  return (
    <>
      <HeroGradientWrapper>

        {/* ================================================================
            HERO CONTENT
            ================================================================ */}

        <Box
          sx={{
            position: "relative",
            zIndex: 4,
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              px: {
                xs: 3,
                sm: 4,
                md: 6,
              },
            }}
          >
            <Stack
              sx={{
                minHeight: {
                  xs: "80vh",
                },
                justifyContent: "center",
                pt: {
                  xs: 12,
                  sm: 14,
                  md: 16,
                },
                pb: {
                  xs: 8,
                  md: 10,
                },
                maxWidth: {
                  xs: "100%",
                  md: "720px",
                },
              }}
            >
              {/* ----------------------------------------------------------
                  EYEBROW
                  ---------------------------------------------------------- */}

              <Typography
                variant="overline"
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 600,
                  letterSpacing: "0.22em",
                  mb: 2,
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  textShadow:
                    "0 2px 10px rgba(0, 0, 0, 0.25)",
                }}
              >
                {t('home.section_hero.eyebrow')}
              </Typography>

              {/* ----------------------------------------------------------
                  MAIN HEADLINE
                  ---------------------------------------------------------- */}

              <Typography
                variant={isMobile ? "h2" : "h1"}
                sx={{
                  color: "#FFFFFF",
                  fontWeight: 500,
                  lineHeight: {
                    xs: 1.05,
                    md: 1.0,
                  },
                  letterSpacing: "-0.02em",
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  textShadow:
                    "0 3px 16px rgba(0, 0, 0, 0.25)",
                }}
              >
                {t('home.section_hero.headline')}
              </Typography>

              {/* ----------------------------------------------------------
                  SUPPORTING COPY
                  ---------------------------------------------------------- */}

              <Typography
                variant={isMobile ? "body1" : "h6"}
                sx={{
                  mt: 3,
                  maxWidth: "600px",
                  color: "rgba(255, 255, 255, 0.92)",
                  lineHeight: 1.7,
                  fontWeight: 400,
                  textAlign: {
                    xs: "center",
                    md: "left",
                  },
                  textShadow:
                    "0 2px 10px rgba(0, 0, 0, 0.20)",
                }}
              >
                {t('home.section_hero.subtitle')}
              </Typography>

              {/* ----------------------------------------------------------
                  ACTIONS
                  ---------------------------------------------------------- */}

              <Stack
                direction={{
                  xs: "column",
                  sm: "row",
                }}
                spacing={2}
                sx={{
                  mt: 4,
                  alignItems: {
                    xs: "center",
                    md: "flex-start",
                  },
                }}
              >
                {/* Primary CTA */}

                <Button
                  size="large"
                  color="secondary"
                  variant="contained"
                  onClick={toggleDialog}
                  endIcon={<ArrowForwardRounded />}
                  sx={{
                    minWidth: {
                      xs: "220px",
                      sm: "auto",
                    },
                    px: 4,
                    py: 1.5,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  {t('home.section_hero.consultation')}
                </Button>

                {/* Secondary CTA */}

                <LanguageBtn />
              </Stack>
            </Stack>

            {/* ============================================================
                SCROLL INDICATOR
                ============================================================ */}

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: {
                  xs: 3,
                  md: 4,
                },
                color: "#FFFFFF",
                minHeight: {
                  xs: "12vh",
                },
              }}
            >
              <IconButton
                aria-label="Scroll to featured services"
                onClick={() => {
                  document
                    .getElementById("hero-cards")
                    ?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                }}
                sx={{
                  color: "#FFFFFF",

                  animation: "heroArrowBounce 2s ease-in-out infinite",

                  "@keyframes heroArrowBounce": {
                    "0%, 100%": {
                      transform: "translateY(0)",
                    },
                    "50%": {
                      transform: "translateY(8px)",
                    },
                  },
                }}
              >
                <KeyboardArrowDownRounded
                  sx={{
                    fontSize: {
                      xs: 42,
                      md: 48,
                    },

                    opacity: 0.9,

                    filter:
                      "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.25))",
                  }}
                />
              </IconButton>
            </Box>

            {/* ============================================================
                HERO CARDS
                ============================================================ */}

            <Box
              id="hero-cards"

              sx={{
                scrollMarginTop: {
                  xs: "120px",
                  md: "140px",
                },
                pb: {
                  xs: 6,
                  md: 8,
                },
              }}
            >
              <HeroCards />
            </Box>
          </Container>
        </Box>

        {/* ================================================================
            CONTACT DIALOG
            ================================================================ */}

        <ContactDialog
          open={isDialogOpen}
          onClose={toggleDialog}
          variant="consultation"
        />

      </HeroGradientWrapper>
    </>
  );
};
