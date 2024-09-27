// src/controllers/DisplayController.tsx

import React, { useEffect } from 'react';
import { useGlobalState } from '../providers/GlobalContext';
import { getAllowedFeatures } from '../handlers/featureHandlers';
import { generateControls } from '../handlers/controlHandlers';
import FeatureController from './FeatureController';
import ControlController from './ControlController';

/**
 * DisplayController Component
 * 
 * This component is responsible for displaying the set of features and controls available to the user.
 * It fetches allowed features and controls based on the user's `packageType` and `role` and renders them using
 * the `FeatureController` and `ControlController` components.
 * 
 * @returns JSX.Element - A container rendering the feature and control components.
 */
const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState(); // Access global state and dispatch from context.
  const { isAuthenticated, role, packageType } = state; // Destructure necessary values from the state.

  // Effect to fetch allowed features and controls based on user's package and role.
  useEffect(() => {
    if (!isAuthenticated) return;

    // Get the features allowed for the current user.
    const allowedFeatures = getAllowedFeatures(packageType, role);
    
    // Generate controls based on allowed features.
    const allowedControls = generateControls(allowedFeatures, dispatch);

    // Update the state with the fetched features and controls.
    dispatch({ type: 'SET_FEATURES', payload: allowedFeatures });
    dispatch({ type: 'SET_CONTROLS', payload: allowedControls });

  }, [isAuthenticated, role, packageType]); // Dependencies for re-running the effect.

  // If the user is not authenticated, do not render anything.
  if (!isAuthenticated) {
    return null;
  }

  // Render the feature and control controllers.
  return (
    <>
      {/* Renders the set of available features */}
      <FeatureController features={state.features} />
      
      {/* Renders the set of available controls */}
      <ControlController controls={state.controls} />
    </>
  );
};

export default DisplayController;
