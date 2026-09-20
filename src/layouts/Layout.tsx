import { AppBar, Toolbar, Typography, Button, Container, Box, Stack } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <Stack
            width="100%"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" component="div">
              The Vida Wellness Center
            </Typography>

            <Stack direction="row" gap={1}>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/serives">Services</Button>
              <Button color="inherit" component={Link} to="/staff">Staff</Button>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>

      <Container component="main" sx={{ mt: 4, mb: 4, flexGrow: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
