import { useState } from "react";
import {
  Container,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { ArrowForwardRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ContactDialog } from "../../components/molecules/ContactDialog";
import { HeroCards } from "../../components/molecules/HeroCards";
import { useScreensize } from "../../hooks/useScreensize";
import heroBackground from "../../assets/vwc-hero-bg.png";

// -----------------------------------------------------------------------------
// HERO Section
// -----------------------------------------------------------------------------

export const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
  // Hero overlays
  // ---------------------------------------------

  const desktopOverlay = `
    linear-gradient(
      90deg,
      rgba(48, 56, 37, 0.78) 0%,
      rgba(48, 56, 37, 0.62) 25%,
      rgba(48, 56, 37, 0.30) 50%,
      rgba(48, 56, 37, 0) 74%
    )
  `;

  const mobileOverlay = `
    linear-gradient(
      180deg,
      rgba(48, 56, 37, 0.08) 0%,
      rgba(48, 56, 37, 0.18) 30%,
      rgba(48, 56, 37, 0.62) 60%,
      rgba(48, 56, 37, 0.88) 100%
    )
  `;

  // ---------------------------------------------
  // JSX
  // ---------------------------------------------

  return (
    <>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#FEFEFE",
        }}
      >
        {/* ================================================================
            BACKGROUND IMAGE
            ================================================================ */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 0,

            backgroundImage: `url(${heroBackground})`,
            backgroundSize: "cover",

            backgroundPosition: {
              xs: "center top",
              md: "center top",
            },

            backgroundRepeat: "no-repeat",

            // Fade image into the section below
            maskImage:
              "linear-gradient(to bottom, black 0%, black 58%, transparent 100%)",

            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 58%, transparent 100%)",
          }}
        />

        {/* ================================================================
            READABILITY GRADIENT
            ================================================================ */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 1,

            background: isMobile
              ? mobileOverlay
              : desktopOverlay,

            pointerEvents: "none",

            maskImage:
              "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",

            WebkitMaskImage:
              "linear-gradient(to bottom, black 0%, black 68%, transparent 100%)",
          }}
        />

        {/* ================================================================
            SUBTLE BLUR BEHIND HERO CONTENT
            ================================================================ */}

        <Box
          sx={{
            position: "absolute",
            zIndex: 2,

            top: 0,
            bottom: 0,
            left: 0,

            width: isMobile ? "100%" : "65%",

            backgroundColor: "rgba(48, 56, 37, 0.08)",

            backdropFilter: "blur(3px)",
            WebkitBackdropFilter: "blur(3px)",

            maskImage: isMobile
              ? `
                  linear-gradient(
                    to bottom,
                    transparent 0%,
                    black 35%,
                    black 75%,
                    transparent 100%
                  )
                `
              : `
                  linear-gradient(
                    to right,
                    black 0%,
                    black 65%,
                    transparent 100%
                  )
                `,

            WebkitMaskImage: isMobile
              ? `
                  linear-gradient(
                    to bottom,
                    transparent 0%,
                    black 35%,
                    black 75%,
                    transparent 100%
                  )
                `
              : `
                  linear-gradient(
                    to right,
                    black 0%,
                    black 65%,
                    transparent 100%
                  )
                `,

            pointerEvents: "none",
          }}
        />

        {/* ================================================================
            WHITE FADE INTO NEXT SECTION
            ================================================================ */}

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            zIndex: 3,

            background: `
              linear-gradient(
                to bottom,
                rgba(255, 255, 255, 0) 55%,
                rgba(255, 255, 255, 0.35) 72%,
                rgba(255, 255, 255, 0.80) 88%,
                rgba(255, 255, 255, 1) 100%
              )
            `,

            pointerEvents: "none",
          }}
        />

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
                  xs: "auto",
                  md: "78vh",
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

                <Button
                  size="large"
                  variant="outlined"
                  endIcon={<ArrowForwardRounded />}
                  onClick={() => navigate('/services')}
                  sx={{
                    minWidth: {
                      xs: "220px",
                      sm: "auto",
                    },

                    px: 4,
                    py: 1.5,

                    color: "#FFFFFF",

                    borderColor:
                      "rgba(255, 255, 255, 0.75)",

                    textTransform: "uppercase",

                    letterSpacing: "0.08em",

                    "&:hover": {
                      borderColor: "#FFFFFF",
                      backgroundColor:
                        "rgba(255, 255, 255, 0.10)",
                    },
                  }}
                >
                  {t('home.section_hero.services')}
                </Button>
              </Stack>
            </Stack>

            {/* ============================================================
                HERO CARDS
                ============================================================ */}

            <Box
              sx={{
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
      </Box>
    </>
  );
};
