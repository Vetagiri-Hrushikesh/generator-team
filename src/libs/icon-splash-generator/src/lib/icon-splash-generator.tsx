import React, { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import ClipartSelector from '../components/settings/clip-art-selector/ClipArtSelector';
import LivePreview from '../components/preview/live-preview/LivePreview';
import ControlPanel from '../components/ControlPanel';

const IconSplashGenerator: React.FC = () => {
  const [primaryTab, setPrimaryTab] = useState(0);

  const handlePrimaryTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setPrimaryTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      {/* Left Panel for Icon and Clipart selection */}
      <Box sx={{ width: '300px', bgcolor: 'background.paper', p: 2, boxShadow: 1 }}>
        <Tabs value={primaryTab} onChange={handlePrimaryTabChange}>
          <Tab label="Clipart" />
          <Tab label="Image" />
        </Tabs>

        {/* Clipart Selector */}
        <Box sx={{ mt: 4 }}>
          <ClipartSelector />
        </Box>

        {/* Dynamic Control Panel */}
        <ControlPanel />
      </Box>

      {/* Right Panel for Preview */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LivePreview />
      </Box>
    </Box>
  );
};

export default IconSplashGenerator;
