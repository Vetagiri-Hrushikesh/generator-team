import React from 'react';
import { Slider, Typography } from '@mui/material';

interface SliderControlProps {
  label: string;
  value: number;
  onChange: (newValue: number) => void;
  min: number;
  max: number;
}

const SliderControl: React.FC<SliderControlProps> = ({ label, value, onChange, min, max }) => (
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

export default SliderControl;
