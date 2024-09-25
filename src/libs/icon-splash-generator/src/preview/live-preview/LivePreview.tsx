import React from 'react';
import { Box } from '@mui/material';
import { useGlobalState } from '../../providers/GlobalProvider';

// Live preview component
const LivePreview = () => {
  const { state } = useGlobalState();
  const { selectedIcon, selectedBackground, selectedIconSize } = state;

  return (
    <Box
      sx={{
        width: '300px',
        height: '300px',
        backgroundColor: selectedBackground,
        borderRadius: '16px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}
    >
      {selectedIcon ? (
        <Box sx={{ color: '#000' }}> {/* Default color is black */}
          {React.createElement(selectedIcon, { style: { fontSize: selectedIconSize || 150, color: '#000' } })}
        </Box>
      ) : (
        <Box>No Icon Selected</Box>
      )}
    </Box>
  );
};

export default LivePreview;
