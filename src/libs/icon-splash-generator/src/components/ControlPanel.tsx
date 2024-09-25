import React from 'react';
import { Box } from '@mui/material';
import { useGlobalState } from '../providers/GlobalProvider';
import { getControlsConfig } from '../config/controls.Config';
import { ControlConfig } from '../types';

const ControlPanel: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const controlsConfig: ControlConfig[] = getControlsConfig(state, dispatch);

  return (
    <Box>
      {controlsConfig.map((control, index) => {
        const ControlComponent = control.component;

        return (
          <ControlComponent
            key={index}
            label={control.label}
            value={control.value}
            onChange={control.onChange}
            {...(control.type === 'slider' && { min: control.min, max: control.max })} // Only add min/max for sliders
          />
        );
      })}
    </Box>
  );
};

export default ControlPanel;
