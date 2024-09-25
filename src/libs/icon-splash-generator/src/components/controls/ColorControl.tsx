import React from 'react';
import { TextField, Typography } from '@mui/material';
import { useGlobalState } from '../../providers/GlobalProvider';
import { canAccessFeature } from '../../config/featureAccess';

interface ColorControlProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const ColorControl: React.FC<ColorControlProps> = ({ label, value, onChange }) => {
  const { state } = useGlobalState();
  const { role, packageType } = state;

  if (!canAccessFeature('backgroundColor', role, packageType)) {
      return null;
  }

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
