import React from 'react';
import { TextField, Typography } from '@mui/material';

interface BackgroundColorControlProps {
  label: string;                        // Label to display above the color input.
  value: string;                        // Current color value.
  onChange: (newValue: string) => void; // Callback function to handle color change.
}

/**
 * BackgroundColorControl Component
 * 
 * A reusable color picker input component that accepts a label and a color value.
 * It allows the user to select a color using the native HTML color input.
 * 
 * @param {BackgroundColorControlProps} props - The props for the component.
 * @returns JSX.Element - The rendered color picker component.
 */
const BackgroundColorControl: React.FC<BackgroundColorControlProps> = React.memo(({ label, value, onChange }) => {
  return (
    <div>
      {/* Display the label above the color picker */}
      <Typography>{label}</Typography>
      {/* Render a color picker input with full width */}
      <TextField
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      />
    </div>
  );
});

export default BackgroundColorControl;
