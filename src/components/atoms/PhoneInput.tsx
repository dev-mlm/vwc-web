import { MuiTelInput, type MuiTelInputProps } from 'mui-tel-input';

// -----------------------------------------------------------------------------
//  Phone Input
// -----------------------------------------------------------------------------

export const PhoneInput = (props: MuiTelInputProps) => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <MuiTelInput
      defaultCountry="US"
      preferredCountries={['US', 'CA', 'GB']}
      fullWidth
      {...props}
    />
  );
};
