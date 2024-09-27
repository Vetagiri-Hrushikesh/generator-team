// utils/featureHandlers.ts

import { FeatureKey, PackageType, RoleType } from '../types';
import { featureAccessConfig } from '../config/featureAccessConfig';

/**
 * Returns the list of features allowed for a given package type and role.
 *
 * @param {PackageType} packageType - The type of the package (basic or premium).
 * @param {RoleType} role - The role of the user (user or admin).
 * @returns {FeatureKey[]} - An array of feature keys the user has access to.
 */
export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  return Object.keys(featureAccessConfig)
    .filter((feature) => featureAccessConfig[feature as FeatureKey][role][packageType]) as FeatureKey[];
};
