import React from 'react';
import { Slider, Typography } from '@mui/material';
import { useGlobalState } from '../../providers/GlobalProvider';
import { canAccessFeature } from '../../config/featureAccess';

interface SliderControlProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  min: number;
  max: number;
}

const SliderControl: React.FC<SliderControlProps> = ({ label, value, onChange, min, max }) => {
  const { state } = useGlobalState();
  const { role, packageType } = state;

  if (!canAccessFeature('sizeControl', role, packageType)) {
      return null;
  }

  return (
    <div>
      <Typography>{label}</Typography>
      <Slider
        value={value}
        onChange={(e, newValue) => onChange(newValue as number)}
        min={min}
        max={max}
        valueLabelDisplay="auto"
      />
    </div>
  );
};

export default SliderControl;
