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
} from "@mui/material";
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
      <DialogTitle>
        {data.title}
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2}>
          {/* Description */}
          {data.desc.map((text) => (
            <DialogContentText>
              {text}
            </DialogContentText>
          ))}

          {/* Techniques */}
          {data?.techs && data?.techs.length > 0 && (
            <>
              <Typography variant="h6">
                {t('services.section_techniques.title')}
              </Typography>
              <Stack direction="row" spacing={2}>
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
