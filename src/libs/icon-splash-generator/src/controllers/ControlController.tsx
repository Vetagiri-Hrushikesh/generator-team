// Component that dynamically renders UI controls based on the `controls` array.
import React from 'react';
import { Box } from '@mui/material';
import { ControlConfig } from '../types';

interface ControlControllerProps {
  controls: ControlConfig[]; // Array of controls to be rendered.
}

/**
 * ControlController Component
 * 
 * This component receives an array of controls and dynamically renders each one based on its configuration.
 * It uses `React.memo` to optimize rendering by preventing re-renders when the `controls` array remains unchanged.
 * 
 * @param {ControlControllerProps} props - The props for the component.
 * @returns JSX.Element - A Box container with all the control components rendered.
 */
const ControlController: React.FC<ControlControllerProps> = React.memo(({ controls }) => {
  return (
    <Box>
      {controls.map((control, index) => {
        // Destructure the component and other properties from the control configuration.
        const ControlComponent = control.component;
        return (
          <ControlComponent
            key={index}
            label={control.label}        // Display label for the control.
            value={control.value}        // Current value of the control.
            onChange={control.onChange}  // Function to handle value changes.
            {...(control.type === 'slider' && { min: control.min, max: control.max })} // Pass min and max only for slider controls.
          />
        );
      })}
    </Box>
  );
});

export default ControlController;
