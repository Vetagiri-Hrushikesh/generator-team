import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGlobalState } from '../../providers/GlobalContext';

/**
 * LivePreview Component
 * 
 * Displays a live preview of the selected icon and its properties such as background color and icon size.
 * It uses the global state to dynamically render the preview based on the user's current selections.
 * 
 * @returns JSX.Element - A preview box displaying the selected icon and background.
 */
const LivePreview: React.FC = React.memo(() => {
  const { state } = useGlobalState(); // Access global state using custom hook.
  const { selectedIcon, selectedBackground, selectedIconSize } = state; // Destructure properties from the global state.

  return (
    <Box
      sx={{
        width: '300px',
        height: '300px',
        backgroundColor: selectedBackground,     // Use the selected background color.
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)', // Add shadow for styling.
      }}
    >
      {/* Render the selected icon dynamically or display a placeholder message */}
      {selectedIcon ? (
        React.createElement(selectedIcon, { style: { fontSize: selectedIconSize || 150 } })
      ) : (
        <Typography>No Icon Selected</Typography>
      )}
    </Box>
  );
});

export default LivePreview;
