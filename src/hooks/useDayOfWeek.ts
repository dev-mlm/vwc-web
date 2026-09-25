
// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

export type DayName =
  'Sunday' |
  'Monday' |
  'Tuesday' |
  'Wednesday' |
  'Thursday' |
  'Friday' |
  'Saturday';

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const DAYS: DayName[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

// -----------------------------------------------------------------------------
//  useDayOfWeek Hook
// -----------------------------------------------------------------------------

export const useDayOfWeek = () => {
  const dayIndex = new Date().getDay();
  const today = DAYS[dayIndex];

  return {
    today,
  };
};
