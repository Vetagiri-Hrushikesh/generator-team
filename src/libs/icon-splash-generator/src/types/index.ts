export type PackageType = 'basic' | 'premium';
export type RoleType = 'user' | 'admin';

export type FeatureKey = 'ClipartSelector' | 'ImageUploader';

export interface FeatureAccess {
  premium: boolean;
  basic: boolean;
}

export interface RoleBasedAccess {
  user: FeatureAccess;
  admin: FeatureAccess;
}

export interface FeatureConfig {
  [key: string]: RoleBasedAccess;
}

interface BaseControlConfig {
  label: string;
  component: React.FC<any>;
}

interface SliderControlConfig extends BaseControlConfig {
  type: 'slider';
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
}

interface ColorControlConfig extends BaseControlConfig {
  type: 'color';
  value: string;
  onChange: (value: string) => void;
}

export type ControlConfig = SliderControlConfig | ColorControlConfig;

export interface GlobalState {
  isAuthenticated: boolean;
  packageType: 'basic' | 'premium';
  role: 'user' | 'admin';
  features: string[];
  controls: ControlConfig[];
  selectedIcon: React.ComponentType | null; 
  selectedBackground: string;
  selectedIconSize: number;
}
export type GlobalAction =
  | { type: 'SET_ICON'; payload: React.ComponentType }
  | { type: 'SET_BACKGROUND'; payload: string }
  | { type: 'SET_ICON_SIZE'; payload: number }
  | { type: 'SET_AUTHENTICATION'; payload: boolean }
  | { type: 'SET_PACKAGE_TYPE'; payload: 'basic' | 'premium' }
  | { type: 'SET_ROLE'; payload: 'user' | 'admin' }
  | { type: 'SET_FEATURES'; payload: FeatureKey[] }
  | { type: 'SET_CONTROLS'; payload: ControlConfig[] };
