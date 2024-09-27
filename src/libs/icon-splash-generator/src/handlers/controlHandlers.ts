// utils/controlHandlers.ts

import { ControlConfig, PackageType, RoleType, GlobalState } from '../types';
import { generateControls } from '../config/controlConfig';

/**
 * Returns the set of controls allowed for a given package type and role.
 * Admins and premium users have access to all controls.
 *
 * @param {PackageType} packageType - The type of the package (basic or premium).
 * @param {RoleType} role - The role of the user (user or admin).
 * @param {GlobalState} state - The current state of the application.
 * @param {React.Dispatch<any>} dispatch - The dispatch function to update the state.
 * @returns {ControlConfig[]} - Array of control configurations allowed for the user.
 */
export const getAllowedControls = (
  packageType: PackageType,
  role: RoleType,
  state: GlobalState,
  dispatch: React.Dispatch<any>
): ControlConfig[] => {
  // Only allow controls for admins or premium users.
  if (role === 'admin' || packageType === 'premium') {
    return generateControls(state, dispatch);
  }
  return [];
};
