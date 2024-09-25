import React from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { useGlobalState } from '../../../providers/GlobalProvider';
import { Home, Favorite, Build, Search, Alarm, AccountCircle } from '@mui/icons-material';

const ClipartSelector: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { isAuthenticated, packageType, role } = state;

  if (!isAuthenticated || packageType === 'basic' || role !== 'admin') {
    return <Typography>No access</Typography>;
  }

  const handleIconSelect = (icon: React.ElementType) => {
    dispatch({ type: 'SET_ICON', payload: icon });
  };

  const iconsArray = [
    { icon: Home, name: 'Home' },
    { icon: Favorite, name: 'Favorite' },
    { icon: Build, name: 'Build' },
    { icon: Search, name: 'Search' },
    { icon: Alarm, name: 'Alarm' },
    { icon: AccountCircle, name: 'AccountCircle' }
  ];

  return (
    <Box>
      <Typography variant="h6">Select Clipart (Icon)</Typography>
      <List sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
        {iconsArray.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => handleIconSelect(item.icon)}>
              {React.createElement(item.icon, { style: { fontSize: 40 } })}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ClipartSelector;
