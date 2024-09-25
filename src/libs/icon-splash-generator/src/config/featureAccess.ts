type PackageType = 'basic' | 'premium';
type FeatureKey = 'iconSizeControl' | 'sizeControl' | 'backgroundColor';

interface FeatureConfig {
  [key: string]: {
    [key in PackageType]: boolean;
  };
}

const featureAccessConfig: FeatureConfig = {
  iconSizeControl: {
    premium: true,
    basic: true,
  },
  sizeControl: {
    premium: true,
    basic: true,
  },
  backgroundColor: {
    premium: true,
    basic: false,
  }
};

export const canAccessFeature = (feature: FeatureKey, role: string, packageType: PackageType): boolean => {
  return featureAccessConfig[feature][packageType];
};
