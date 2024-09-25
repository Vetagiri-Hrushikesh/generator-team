import React, { useState } from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { Home, Favorite, Build, Search, Alarm, AccountCircle } from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import { useGlobalState } from '../../providers/GlobalProvider';

const iconsArray = [
  { icon: Home, name: 'Home' },
  { icon: Favorite, name: 'Favorite' },
  { icon: Build, name: 'Build' },
  { icon: Search, name: 'Search' },
  { icon: Alarm, name: 'Alarm' },
  { icon: AccountCircle, name: 'AccountCircle' }
];

const ClipartSelector = () => {
  const { dispatch } = useGlobalState(); 
  const [selectedIcon, setSelectedIcon] = useState<SvgIconComponent | null>(null);

  const handleIconSelect = (icon: SvgIconComponent) => {
    setSelectedIcon(icon);
    dispatch({ type: 'SET_ICON', payload: icon });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>Select Clipart (Icon)</Typography>
      <Box sx={{ maxHeight: 200, overflowY: 'auto' }}>
        <List sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
          {iconsArray.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => handleIconSelect(item.icon)} sx={{ justifyContent: 'center' }}>
                {React.createElement(item.icon, { style: { fontSize: 40 } })}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default ClipartSelector;
