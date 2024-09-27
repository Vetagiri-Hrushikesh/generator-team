import React from 'react';
import { Box, List, ListItem, ListItemButton, Typography } from '@mui/material';
import { useGlobalState } from '../../../providers/GlobalContext';
import { Home, Favorite, Build, Search, Alarm, AccountCircle } from '@mui/icons-material';

/**
 * ClipartSelector Component
 * 
 * Renders a grid of clipart icons that the user can select from.
 * The component updates the global state with the selected icon when a user clicks on an icon.
 * Only accessible to authenticated admin users with a premium package.
 * 
 * @returns JSX.Element - A grid of selectable clipart icons.
 */
const ClipartSelector: React.FC = () => {
  const { state, dispatch } = useGlobalState(); // Access global state and dispatch function.
  const { isAuthenticated, packageType, role } = state; // Destructure necessary properties from state.

  // Check if the user has permission to access this feature.
  if (!isAuthenticated || packageType === 'basic' || role !== 'admin') {
    return <Typography>No access</Typography>; // Display "No access" message if permissions are insufficient.
  }

  /**
   * Handles icon selection by updating the global state.
   * @param {React.ElementType} icon - The selected icon component.
   */
  const handleIconSelect = (icon: React.ElementType) => {
    dispatch({ type: 'SET_ICON', payload: icon });
  };

  // Array of available icons for selection.
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
      {/* Render a grid list of icons */}
      <List sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
        {iconsArray.map((item, index) => (
          <ListItem key={index} disablePadding>
            {/* Button to select the icon and dispatch the selection to the global state */}
            <ListItemButton onClick={() => handleIconSelect(item.icon)}>
              {/* Render the icon dynamically with a specified size */}
              {React.createElement(item.icon, { style: { fontSize: 40 } })}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ClipartSelector;
