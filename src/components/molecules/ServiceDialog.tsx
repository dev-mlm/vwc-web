import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Stack,
  Chip,
  Typography,
  IconButton,
  Grid,
  Divider,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

export interface Technique {
  title: string;
  desc: string;
}

export interface ServiceDialogData {
  title: string;
  desc: string[];
  image: string;
  techs?: Technique[];
}

interface ServiceDialogProps {
  open: boolean;
  onClose: () => void;
  data: ServiceDialogData;
}

// -----------------------------------------------------------------------------
//  ServiceDialog
// -----------------------------------------------------------------------------

export const ServiceDialog = ({
  open,
  onClose,
  data,
}: ServiceDialogProps) => {
  const { t } = useTranslation();

  const [selectedTech, setSelectedTech] = useState<Technique | null>(null);

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const handleClose = () => {
    setSelectedTech(null);
    onClose();
  };

  const handleTechClick = (tech: Technique) => {
    setSelectedTech((current) =>
      current?.title === tech.title ? null : tech
    );
  };

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle
        sx={{
          position: "relative",
          textAlign: "center",
        }}>
        {data.title}

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          <Grid
            container
            spacing={3}
            sx={{ alignItems: "stretch" }}
          >
            {/* Image */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={(theme) => ({
                  height: "100%",
                  width: "100%",
                  overflow: "hidden",
                  border: `4px solid ${theme.palette.primary.main}`,
                  borderRadius: 2,
                })}
              >
                <Box
                  component="img"
                  src={data.image}
                  alt="Service Image"
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>

            {/* Text */}
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={2}>
                {data.desc.map((text) => (
                  <DialogContentText key={text}>
                    {text}
                  </DialogContentText>
                ))}
              </Stack>
            </Grid>
          </Grid>

          {/* Techniques */}
          {data?.techs && data?.techs.length > 0 && (
            <>
              <Divider sx={{ pt: 1 }} />

              <Typography
                align="center"
                variant="h6"
              >
                {t('services.section_techniques.title')}
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                {data?.techs.map((tech) => (
                  <Chip
                    key={tech.title}
                    label={tech.title}
                    clickable
                    onClick={() => handleTechClick(tech)}
                    color={
                      selectedTech?.title === tech.title
                        ? "primary"
                        : "default"
                    }
                    variant={
                      selectedTech?.title === tech.title
                        ? "filled"
                        : "outlined"
                    }
                  />
                ))}
              </Stack>

              {/* Selected technique description */}
              <Box
                sx={{
                  p: 2,
                  borderRadius: 1,
                  bgcolor: "action.hover",
                }}
              >
                {selectedTech ? (
                  <>
                    <Typography
                      variant="subtitle1"
                      gutterBottom
                    >
                      {selectedTech.title}
                    </Typography>

                    <Typography variant="body2">
                      {selectedTech.desc}
                    </Typography>
                  </>
                ) : (
                  <Typography
                    variant="subtitle1"
                  >
                    {t('services.section_techniques.clickForMore')}
                  </Typography>
                )}
              </Box>
            </>
          )}
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
