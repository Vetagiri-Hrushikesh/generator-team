import React from 'react';
import { TextField, Typography } from '@mui/material';

interface ColorControlProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const ColorControl: React.FC<ColorControlProps> = ({ label, value, onChange }) => {
  
  return (
    <div>
      <Typography>{label}</Typography>
      <TextField
        type="color"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      />
    </div>
  );
};

export default ColorControl;
