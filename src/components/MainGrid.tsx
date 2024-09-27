import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Copyright from '../internals/components/Copyright';
import { IconSplashGenerator } from 'icon-splash-generator';
import { useGlobalState } from 'icon-splash-generator';

const MainGrid = () => {
  const { state } = useGlobalState();
  const { selectedBackground, selectedIconSize } = state;

  React.useEffect(() => {
    console.log('Selected background updated:', selectedBackground);
    console.log('Selected icon size:', selectedIconSize);
  }, [selectedBackground, selectedIconSize]);

  return (
    <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
      <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <IconSplashGenerator />
      <Copyright sx={{ my: 4 }} />
    </Box>
  );
};

export default MainGrid;
