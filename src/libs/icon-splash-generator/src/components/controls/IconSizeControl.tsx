import React from 'react';
import { Slider, Typography } from '@mui/material';

interface IconSizeControlProps {
  label: string;             // Label to display above the slider.
  value: number;             // Current value of the slider.
  onChange: (newValue: number) => void; // Callback function to handle slider value change.
  min: number;               // Minimum value for the slider.
  max: number;               // Maximum value for the slider.
}

/**
 * IconSizeControl Component
 * 
 * A reusable slider component that allows adjusting a numerical value between a defined range.
 * 
 * @param {IconSizeControlProps} props - The props for the component.
 * @returns JSX.Element - The rendered slider component.
 */
const IconSizeControl: React.FC<IconSizeControlProps> = React.memo(({ label, value, onChange, min, max }) => {
  return (
    <div>
      {/* Display the label above the slider */}
      <Typography>{label}</Typography>
      {/* Render a slider with defined min and max values */}
      <Slider
        value={value}
        onChange={(e, newValue) => onChange(newValue as number)}
        min={min}
        max={max}
        valueLabelDisplay="auto" // Display value labels while sliding
      />
    </div>
  );
});

export default IconSizeControl;
