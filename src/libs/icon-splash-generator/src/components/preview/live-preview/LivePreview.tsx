import React from 'react';
import { Box, Typography } from '@mui/material';
import { useGlobalState } from '../../../providers/GlobalProvider';

const LivePreview: React.FC = () => {
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
        React.createElement(selectedIcon, { style: { fontSize: selectedIconSize || 150 } })
      ) : (
        <Typography>No Icon Selected</Typography>
      )}
    </Box>
  );
};

export default LivePreview;
