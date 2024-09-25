type PackageType = 'basic' | 'premium';
type RoleType = 'user' | 'admin';
type FeatureKey = 'iconSizeControl' | 'sizeControl' | 'backgroundColor';

interface FeatureAccess {
    premium: boolean;
    basic: boolean;
}

interface RoleBasedAccess {
    user: FeatureAccess;
    admin: FeatureAccess;
}

interface FeatureConfig {
    iconSizeControl: RoleBasedAccess;
    sizeControl: RoleBasedAccess;
    backgroundColor: RoleBasedAccess;
}

const featureAccessConfig: FeatureConfig = {
    iconSizeControl: {
        user: {
            premium: true,
            basic: false,
        },
        admin: {
            premium: true,
            basic: true,
        }
    },
    sizeControl: {
        user: {
            premium: true,
            basic: true,
        },
        admin: {
            premium: true,
            basic: true,
        }
    },
    backgroundColor: {
        user: {
            premium: true,
            basic: false,
        },
        admin: {
            premium: true,
            basic: true,
        }
    }
};

export const canAccessFeature = (feature: FeatureKey, role: RoleType, packageType: PackageType): boolean => {
    return featureAccessConfig[feature][role][packageType];
};
