import React from 'react';
import { Box } from '@mui/material';
import DisplayController from '../controllers/DisplayController';
import LivePreview from '../components/preview/LivePreview';

const IconSplashGenerator: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '300px', bgcolor: 'background.paper', p: 2, boxShadow: 1 }}>
        <DisplayController />
      </Box>

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LivePreview />
      </Box>
    </Box>
  );
};

export default IconSplashGenerator;
