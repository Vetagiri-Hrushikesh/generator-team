// src/components/IconSplashGenerator/IconSplashGenerator.tsx
import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, TextField, Slider } from '@mui/material';
import ClipArtGenerator from '../settings/clip-art-generator/ClipArtGenerator';
import LivePreview from '../preview/live-preview/LivePreview';
import { SET_BACKGROUND, SET_ICON_SIZE, useGlobalState } from '../providers/GlobalProvider';
import { useTransientState } from '../hooks/useTransientState';

function TabPanel(props: { children?: React.ReactNode; index: number; value: number }) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const IconSplashGenerator = () => {
  const [primaryTab, setPrimaryTab] = useState(0);
  const { state, dispatch } = useGlobalState();
  const { state: backgroundState, setState: setBackgroundState } = useTransientState<string>('#ffffff');

  const handlePrimaryTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setPrimaryTab(newValue);
  };

  // Handle changes for background color and icon size
  const handleBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBackgroundState(event.target.value);
    dispatch({ type: SET_BACKGROUND, payload: event.target.value });  // Use the constant SET_BACKGROUND
  };

  const handleIconSizeChange = (event: Event, newValue: number | number[]) => {
    dispatch({ type: SET_ICON_SIZE, payload: newValue as number });  // Use the constant SET_ICON_SIZE
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', p: 3 }}>
      {/* Left Panel for Icon and Clipart selection */}
      <Box sx={{ width: '300px', bgcolor: 'background.paper', p: 2, boxShadow: 1 }}>
        <Tabs value={primaryTab} onChange={handlePrimaryTabChange}>
          <Tab label="Clipart" />
          <Tab label="Image" />
        </Tabs>

        <TabPanel value={primaryTab} index={0}>
          <ClipArtGenerator />
        </TabPanel>

        <TabPanel value={primaryTab} index={1}>
          {/* ImageUploader component can be added here */}
        </TabPanel>

        {/* Controls */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="subtitle1">Background Color</Typography>
          <TextField
            type="color"
            value={backgroundState}
            onChange={handleBackgroundColorChange}
            fullWidth
          />
          <Typography variant="subtitle1" sx={{ mt: 2 }}>
            Icon Size
          </Typography>
          <Slider
            value={state.selectedIconSize || 150}
            onChange={handleIconSizeChange}
            min={50}
            max={300}
            valueLabelDisplay="auto"
          />
        </Box>
      </Box>

      {/* Right Panel for Preview */}
      <Box sx={{ flexGrow: 1, bgcolor: '#f5f5f5', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <LivePreview />
      </Box>
    </Box>
  );
};

export default IconSplashGenerator;