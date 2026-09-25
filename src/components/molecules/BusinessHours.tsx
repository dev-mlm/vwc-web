import { useMemo } from 'react';
import { List, ListItem, ListItemText, Card, CardHeader, CardContent, } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { type DayName } from '../../hooks/useDayOfWeek';

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface ScheduleItem {
  day: DayName | string;
  hours: string[];
};

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const SCHEDULE_ITEMS: ScheduleItem[] = [
  { day: 'Monday', hours: ['7:30 AM – 12:00 PM', '2:00 PM – 6:00 PM'] },
  { day: 'Tuesday', hours: ['7:30 AM – 12:00 PM', '2:00 PM – 6:00 PM'] },
  { day: 'Wednesday', hours: ['7:30 AM – 12:00 PM', '2:00 PM – 6:00 PM'] },
  { day: 'Thursday', hours: ['2:00 PM – 6:00 PM'] },
  { day: 'Friday', hours: ['8:00 AM – 12:00 PM'] },
  { day: 'Saturday', hours: ['8:00 AM – 12:00 PM'] },
  { day: 'Sunday', hours: ['8:00 AM – 12:00 PM'] },
];

// -----------------------------------------------------------------------------
//  Business Hours
// -----------------------------------------------------------------------------

export const BusinessHours = () => {
  const { t } = useTranslation();

  const schedule = useMemo<ScheduleItem[]>(() => (
    SCHEDULE_ITEMS.map((item) => ({
      ...item,
      day: t(`businessHours.days.${item.day.toLowerCase()}`),
    }))
  ), [t]);

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Card sx={{ width: '100%', minWidth: 'xs' }}>
      <CardHeader
        title={t('businessHours.title')}
        subheader={t('businessHours.desc')}
      />
      <CardContent>
        <List dense>
          {schedule.map((item) => (
            <ListItem dense disablePadding>
              <ListItemText
                primary={item.day}
                secondary={item.hours.join(' | ')}
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};
