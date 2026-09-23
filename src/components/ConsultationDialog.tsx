import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
  Stack,
  Alert,
} from "@mui/material";
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { PhoneInput } from "./PhoneInput";
import { matchIsValidTel } from "mui-tel-input";
import { SecondaryText } from "./SecondaryText";
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface ConsultationDialogProps {
  open: boolean;
  onClose: () => void;
}

interface CosultationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  reason: string;
}

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const DEFAULT_FORM_VALUES: CosultationForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  reason: "",
};

// -----------------------------------------------------------------------------
//  Consultation Dialog
// -----------------------------------------------------------------------------

export const ConsultationDialog = ({
  open,
  onClose,
}: ConsultationDialogProps) => {
  const { t } = useTranslation();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form
  const formMethods = useForm<CosultationForm>({
    defaultValues: DEFAULT_FORM_VALUES
  });
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = formMethods;

  // ---------------------------------------------
  //  Event Handlers
  // ---------------------------------------------

  const handleClose = () => {
    reset();
    setSubmitError(null);
    onClose();
  };

  const onSubmit: SubmitHandler<CosultationForm> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const templateParams = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      reason: data.reason,
    };
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      handleClose();
    } catch (error) {
      console.error('EmailJS submit error:', error);
      setSubmitError(t(
        'consultation.errorSending',
        'Failed to send message. Please try again.'
      ));
    } finally {
      setIsSubmitting(false);
    }
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
        {t('consultation.title')}
      </DialogTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Stack spacing={2}>
            <DialogContentText>
              {t('consultation.caption')}
            </DialogContentText>

            {/* Display error message if EmailJS dispatch fails */}
            {submitError && <Alert severity="error">{submitError}</Alert>}

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

              {/* First Name */}
              <Stack sx={{ width: '100%' }}>
                <SecondaryText>
                  {t('consultation.firstName')}
                </SecondaryText>
                <TextField
                  id="first-name"
                  placeholder={t('consultation.firstNamePh')}
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName?.message}
                  {...register("firstName", {
                    required: t('consultation.firstNameReq')
                  })}
                />
              </Stack>

              {/* Last Name */}
              <Stack sx={{ width: '100%' }}>
                <SecondaryText>
                  {t('consultation.lastName')}
                </SecondaryText>
                <TextField
                  id="last-name"
                  placeholder={t('consultation.lastNamePh')}
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName?.message}
                  {...register("lastName", {
                    required: t('consultation.lastNameReq')
                  })}
                />
              </Stack>
            </Stack>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>

              {/* Email */}
              <Stack sx={{ width: '100%' }}>
                <SecondaryText>
                  {t('consultation.email')}
                </SecondaryText>
                <TextField
                  id="email"
                  type="email"
                  placeholder={t('consultation.emailPh')}
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register("email", {
                    required: t('consultation.emailReq'),
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: t('consultation.emailInvalid'),
                    },
                  })}
                />
              </Stack>

              {/* Phone Number */}
              <Stack sx={{ width: '100%' }}>
                <SecondaryText>
                  {t('consultation.phoneNum')}
                </SecondaryText>
                <Controller
                  name="phone"
                  control={control}
                  rules={{
                    required: t('consultation.phoneNumReq'),
                    validate: (value) =>
                      matchIsValidTel(value) || t('consultation.phoneNumInvalid'),
                  }}
                  render={({ field, fieldState }) => (
                    <PhoneInput
                      {...field}
                      error={!!fieldState.error}
                      helperText={fieldState.error?.message}
                      fullWidth
                    />
                  )}
                />
              </Stack>
            </Stack>

            {/* Reason for Visit */}
            <Stack sx={{ width: '100%' }}>
              <SecondaryText>
                {t('consultation.message')}
              </SecondaryText>
              <TextField
                id="reason"
                placeholder={t('consultation.messagePh')}
                fullWidth
                multiline
                minRows={4}
                maxRows={8}
                error={!!errors.reason}
                helperText={errors.reason?.message}
                {...register("reason", {
                  required: t('consultation.messageReq'),
                })}
              />
            </Stack>
          </Stack>

        </DialogContent>

        <DialogActions
          sx={{ px: 2, pb: 2 }}
        >
          <Button
            onClick={handleClose}
            disabled={isSubmitting}
          >
            {t('common.cancel')}
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={isSubmitting}
            endIcon={isSubmitting ? <CircularProgress size="24px" color="secondary" /> : null}
          >
            {isSubmitting ? t('common.sending') : t('common.send')}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
