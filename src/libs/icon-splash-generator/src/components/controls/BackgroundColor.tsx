import React from 'react';
import { TextField, Typography } from '@mui/material';

interface BackgroundColorControlProps {
  label: string;                        // Text to display above the color input field.
  onChange: (newValue: string) => void; // Function to call when the color value changes.
}

/**
 * Renders a color picker input that allows users to select a color.
 * This component does not manage its own state but relies on the parent component to control its behavior through props.
 * 
 * @param {BackgroundColorControlProps} props - Props for the component including label and onChange handler.
 * @returns {JSX.Element} - The color picker component with a label.
 */
const BackgroundColorControl: React.FC<BackgroundColorControlProps> = React.memo(({ label, onChange }) => {
  return (
    <div>
      <Typography>{label}</Typography>
      <TextField
        type="color"
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      />
    </div>
  );
});

export default BackgroundColorControl;
