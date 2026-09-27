import { Stack, IconButton } from '@mui/material';
import { Instagram, Facebook } from '@mui/icons-material';

// -----------------------------------------------------------------------------
//  Constants
// -----------------------------------------------------------------------------

const SOCIAL_LINKS = [
  {
    name: 'Facebook',
    icon: <Facebook />,
    url: import.meta.env.VITE_FACEBOOK_URL,
    color: '#1877F2',
  },
  {
    name: 'Instagram',
    icon: <Instagram />,
    url: import.meta.env.VITE_INSTAGRAM_URL,
    color: '#E4405F',
  },
];

// -----------------------------------------------------------------------------
//  Social Links
// -----------------------------------------------------------------------------

export const SocialLinks = ({
  direction = 'row',
}: {
  direction?: 'row' | 'column';
}) => {

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Stack
      direction={direction}
      spacing={0}
      sx={{ alignItems: 'center' }}
    >
      {SOCIAL_LINKS.map((social) => (
        <IconButton
          key={social.name}
          component="a"
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          sx={{
            color: 'text.secondary',
            transition: 'color 0.2s ease-in-out, transform 0.2s ease-in-out',
            '&:hover': {
              color: social.color,
              transform: 'translateY(-2px)',
              backgroundColor: 'action.hover',
            },
          }}
        >
          {social.icon}
        </IconButton>
      ))}
    </Stack>
  );
};
