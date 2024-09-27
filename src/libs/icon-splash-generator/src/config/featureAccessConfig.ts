import { FeatureKey, RoleBasedAccess } from '../types';

// Defines the role-based access control for each feature in the system.
export const featureAccessConfig: { [key in FeatureKey]: RoleBasedAccess } = {
  ClipartSelector: {
    user: { premium: true, basic: true },
    admin: { premium: true, basic: true },
  },
  ImageUploader: {
    user: { premium: true, basic: false },
    admin: { premium: true, basic: true },
  }
};
