// Component that renders the controls passed to it
import React from 'react';
import { Box } from '@mui/material';
import { ControlConfig } from '../types';

interface ControlControllerProps {
  controls: ControlConfig[];
}

const ControlController: React.FC<ControlControllerProps> = ({ controls }) => {
  return (
    <Box>
      {controls.map((control, index) => {
        const ControlComponent = control.component;
        return (
          <ControlComponent
            key={index}
            label={control.label}
            value={control.value}
            onChange={control.onChange}
            {...(control.type === 'slider' && { min: control.min, max: control.max })}
          />
        );
      })}
    </Box>
  );
};

export default ControlController;
