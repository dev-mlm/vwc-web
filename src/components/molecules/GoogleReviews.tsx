import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const FEATURABLE_ID = import.meta.env.VITE_FEATURABLE_ID || "example";
// const FEATURABLE_ID = "example";

// -----------------------------------------------------------------------------
//  Google Reviews
// -----------------------------------------------------------------------------

export const GoogleReviews = () => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <ReactGoogleReviews
      layout="carousel"
      featurableId={FEATURABLE_ID}
    />
  );
};
