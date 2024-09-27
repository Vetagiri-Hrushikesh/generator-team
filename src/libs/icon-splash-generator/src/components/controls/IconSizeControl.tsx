import React from 'react';
import { Slider, Typography } from '@mui/material';

interface IconSizeControlProps {
  label: string;             // Text to display above the slider.
  onChange: (newValue: number) => void; // Function to call when the slider value changes.
  min: number;               // Minimum value the slider can represent.
  max: number;               // Maximum value the slider can represent.
}

/**
 * Renders a slider component that allows users to select a numerical value within a specified range.
 * The component is designed to be controlled by the parent component to ensure it can be integrated into forms or other UI elements that manage state externally.
 *
 * @param {IconSizeControlProps} props - Props for the component including label, onChange handler, and min/max values.
 * @returns {JSX.Element} - The slider component with a label, configured with provided min and max values.
 */
const IconSizeControl: React.FC<IconSizeControlProps> = React.memo(({ label, onChange, min, max }) => {
  return (
    <div>
      <Typography>{label}</Typography>
      <Slider
        onChange={(e, newValue) => onChange(newValue as number)}
        min={min}
        max={max}
        valueLabelDisplay="auto" // Automatically displays the value label when the user interacts with the slider.
      />
    </div>
  );
});

export default IconSizeControl;
