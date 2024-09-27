import React, { useEffect } from 'react';
import { useGlobalState } from '../providers/GlobalProvider';
import { getAllowedFeatures, getAllowedControls } from '../config/featureControlMapping';
import FeatureController from './FeatureController';
import ControlController from './ControlController';

const DisplayController: React.FC = () => {
  const { state, dispatch } = useGlobalState();
  const { isAuthenticated, role, packageType } = state;

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }

    const allowedFeatures = getAllowedFeatures(packageType, role);
    const allowedControls = getAllowedControls(packageType, role, state, dispatch);
    dispatch({ type: 'SET_FEATURES', payload: allowedFeatures });
    dispatch({ type: 'SET_CONTROLS', payload: allowedControls });

  }, [isAuthenticated, role, packageType, state, dispatch]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <FeatureController features={state.features} />
      <ControlController controls={state.controls} />
    </>
  );
};

export default DisplayController;
