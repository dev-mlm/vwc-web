import { Card, CardContent, Stack, Typography } from "@mui/material";
import { LocalPhoneRounded } from "@mui/icons-material";

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const PHONE_NUM_DISP = '(970) 232-9159';
const PHONE_NUM_HREF = 'tel:+19702329159';

// -----------------------------------------------------------------------------
//  Phone Card
// -----------------------------------------------------------------------------

export const PhoneCard = () => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Card
      component="a"
      href={PHONE_NUM_HREF}
      sx={{
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        "&:hover": {
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Stack
          direction="row"
          spacing={3}
          sx={{
            p: 0,
            alignItems: 'center',
          }}>
          <LocalPhoneRounded color="primary" />

          <Typography variant="h5">
            {PHONE_NUM_DISP}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
