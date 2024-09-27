import React from 'react';
import { Box } from '@mui/material';
import DisplayController from '../controllers/DisplayController';
import LivePreview from '../components/preview/LivePreview';

/**
 * IconSplashGenerator Component
 * 
 * This component serves as the main layout for the icon and splash screen customization tool.
 * It organizes and displays the controls for adjusting various properties (via `DisplayController`) 
 * on the left side and provides a live preview of the changes (via `LivePreview`) on the right side.
 * 
 * The component uses Material-UI's `Box` component to manage layout and styling, ensuring a responsive 
 * and centered UI.
 * 
 * @returns JSX.Element - The rendered layout of the icon and splash screen generator.
 */
const IconSplashGenerator: React.FC = () => {
  return (
    // Main container for the component with a full-screen height layout.
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      
      {/* Left container to display controls, such as selecting icons and backgrounds. */}
      <Box sx={{ width: '300px', bgcolor: 'background.paper', p: 2, boxShadow: 1 }}>
        {/* DisplayController handles the settings and customization controls */}
        <DisplayController />
      </Box>

      {/* Right container for displaying the live preview of the current selections. */}
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* LivePreview renders the current state of the icon, background, and other properties */}
        <LivePreview />
      </Box>
      
    </Box>
  );
};

export default IconSplashGenerator;
