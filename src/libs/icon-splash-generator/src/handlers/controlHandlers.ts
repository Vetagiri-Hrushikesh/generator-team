import { ControlConfig, PackageType, RoleType } from '../types';
import { controlAccessConfig } from '../config/controlAccessConfig';

/**
 * Generates a list of controls based on allowed features, user's role, and package type.
 * Controls are dynamically configured to dispatch specified actions when their values change.
 *
 * @param {string[]} allowedFeatures - Features that are allowed for the user.
 * @param {React.Dispatch<any>} dispatch - The dispatch function to update the application state.
 * @returns {ControlConfig[]} - Array of dynamically configured control configurations for the user.
 */
export const generateControls = (
  allowedFeatures: string[],
  dispatch: React.Dispatch<any>
): ControlConfig[] => {

  let controls: ControlConfig[] = [];

  allowedFeatures.forEach(featureKey => {
    const featureConfigs = controlAccessConfig[featureKey] ?? {};
    Object.values(featureConfigs).forEach(roleConfigs => {
      Object.values(roleConfigs).forEach(pkgConfigs => {
        const configuredControls = pkgConfigs.map(control => ({
          ...control,
          onChange: (value: number | string) => dispatch({ type: control.actionType, payload: value })
        }));
        controls = [...controls, ...configuredControls];
      });
    });
  });

  console.log("Generated Controls:", controls);
  return controls;
};
