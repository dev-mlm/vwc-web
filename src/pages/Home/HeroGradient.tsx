import { type ReactNode } from "react";
import { Box } from "@mui/material";
import { useScreensize } from "../../hooks/useScreensize";
import heroBackground from "../../assets/vwc-hero-bg.png";

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface HeroGradientWrapperProps {
  children: ReactNode;
}

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
//  HeroGradientWrapper
// -----------------------------------------------------------------------------

export const HeroGradientWrapper = ({
  children,
}: HeroGradientWrapperProps) => {
  const {
    isMobile,
  } = useScreensize();

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
            CHILDREN
            ================================================================ */}

        {children}
      </Box>
    </>
  );
};
