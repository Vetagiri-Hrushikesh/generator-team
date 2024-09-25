import React from 'react';
import { useGlobalState } from '../../providers/GlobalProvider';
import { canAccessFeature } from '../../config/featureAccess';


const IconSizeControl = () => {
  const { state } = useGlobalState();

  if (!canAccessFeature('iconSizeControl', state.role, state.packageType)) {
    return null;
  }

  return (
    <div>
      <h2>Adjust Icon Size</h2>
      <input type="range" min="10" max="100" />
    </div>
  );
};

export default IconSizeControl;
