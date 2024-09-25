import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import { IconSplashGenerator } from 'icon-splash-generator';
import { useGlobalState } from 'icon-splash-generator';
import React from 'react';

export default function MainGrid() {
  const { state: globalState } = useGlobalState();

  React.useEffect(() => {
    console.log('Global state updated from library:', globalState);
  }, [globalState]);

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <IconSplashGenerator />
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
}
