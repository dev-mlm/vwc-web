import { type ReactNode } from 'react';
import { Container } from '@mui/material';
import { useScreensize } from "../../hooks/useScreensize";

// -----------------------------------------------------------------------------
//  Types
// -----------------------------------------------------------------------------

interface ResponsiveContainerProps {
  children: ReactNode;
}

// -----------------------------------------------------------------------------
//  Responsive Container
// -----------------------------------------------------------------------------

export const ResponsiveContainer = ({
  children
}: ResponsiveContainerProps) => {
  const { isMobile } = useScreensize();

  // ---------------------------------------------
  //  JSX
  // ---------------------------------------------

  return (
    <Container sx={{ p: isMobile ? 0 : 4 }}>
      {children}
    </Container>
  );
};
