// types/index.ts

// Defines package types available within the application.
export type PackageType = 'basic' | 'premium';

// Defines role types for users within the application.
export type RoleType = 'user' | 'admin';

// Defines keys for identifying features within the application.
export type FeatureKey = 'ClipartSelector' | 'ImageUploader';

// Interface for accessing features based on package type.
export interface FeatureAccess {
  premium: boolean;  // Access control for premium users
  basic: boolean;    // Access control for basic users
}

// Interface for role-based access to features.
export interface RoleBasedAccess {
  user: FeatureAccess;  // Feature access configuration for users
  admin: FeatureAccess; // Feature access configuration for admins
}

// Mapping of features to their role-based access configurations.
export interface FeatureConfig {
  [key: string]: RoleBasedAccess;
}

// Base interface for control configurations.
interface BaseControlConfig {
  label: string;            // Label for the control
  component: React.FC<any>; // Component that renders the control
}

// Interface for slider type controls.
interface SliderControlConfig extends BaseControlConfig {
  type: 'slider';                       // Type of control
  value: number;                        // Current value of the slider
  onChange: (value: number) => void;    // Function to call on value change
  min: number;                          // Minimum value of the slider
  max: number;                          // Maximum value of the slider
}

// Interface for color picker controls.
interface ColorControlConfig extends BaseControlConfig {
  type: 'color';                        // Type of control
  value: string;                        // Current color value
  onChange: (value: string) => void;    // Function to call on color change
}

// Union type for all control configurations.
export type ControlConfig = SliderControlConfig | ColorControlConfig;

// Interface for the global state of the application.
export interface GlobalState {
  isAuthenticated: boolean;            // Authentication status
  packageType: PackageType;            // User's package type
  role: RoleType;                      // User's role
  features: string[];                  // List of enabled features
  controls: ControlConfig[];           // List of enabled controls
  selectedIcon: React.ComponentType | null; // Currently selected icon component
  selectedBackground: string;          // Currently selected background
  selectedIconSize: number;            // Currently selected icon size
}

// Union type for all actions used in the application.
export type GlobalAction =
  | { type: 'SET_ICON'; payload: React.ComponentType }           // Sets the selected icon
  | { type: 'SET_BACKGROUND'; payload: string }                  // Sets the background
  | { type: 'SET_ICON_SIZE'; payload: number }                   // Sets the icon size
  | { type: 'SET_AUTHENTICATION'; payload: boolean }             // Sets authentication status
  | { type: 'SET_PACKAGE_TYPE'; payload: PackageType }           // Sets the package type
  | { type: 'SET_ROLE'; payload: RoleType }                      // Sets the user role
  | { type: 'SET_FEATURES'; payload: FeatureKey[] }              // Sets the available features
  | { type: 'SET_CONTROLS'; payload: ControlConfig[] };          // Sets the available controls
