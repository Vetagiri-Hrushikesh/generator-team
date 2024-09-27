import { ComponentType } from "react";

// Enumerates available package types within the application.
export type PackageType = 'basic' | 'premium';

// Enumerates available roles for users within the application.
export type RoleType = 'user' | 'admin';

// Enumerates keys for identifying features within the application.
export type FeatureKey = 'ClipartSelector' | 'ImageUploader';

// Describes the accessibility of features based on the package type.
export interface FeatureAccess {
  premium: boolean;  // Indicates if the feature is accessible to premium users.
  basic: boolean;    // Indicates if the feature is accessible to basic users.
}

// Defines the role-based access model for different features.
export interface RoleBasedAccess {
  user: FeatureAccess;  // Access details for standard users.
  admin: FeatureAccess; // Access details for administrators.
}

// Maps feature keys to their corresponding role-based access configurations.
export interface FeatureConfig {
  [key: string]: RoleBasedAccess;
}

// Base interface for defining control configurations.
interface BaseControlConfig {
  label: string;                          // Display label for the control.
  component: ComponentType<any>;          // Component type for rendering the control.
  value?: number | string;                // Current value of the control.
  actionType: string;                     // Action type to dispatch on value change.
}

// Extends BaseControlConfig for slider-specific configurations.
interface SliderControlConfig extends BaseControlConfig {
  type: 'slider';
  min: number;                            // Minimum value of the slider.
  max: number;                            // Maximum value of the slider.
  onChange?: (value: number) => void;     // Callback to invoke when the slider value changes.
}

// Extends BaseControlConfig for color picker-specific configurations.
interface ColorControlConfig extends BaseControlConfig {
  type: 'color';
  onChange?: (value: string) => void;     // Callback to invoke when the color value changes.
}

// Combines all control configuration types.
export type ControlConfig = SliderControlConfig | ColorControlConfig;

// Maps roles and package types to an array of ControlConfig.
export interface ControlCategory {
  [role: string]: {
    [packageType: string]: ControlConfig[];
  };
}

// Defines the structure for control access configurations by feature.
export interface ControlAccessConfig {
  [feature: string]: ControlCategory;
}

// Optional props for components expecting a style attribute.
export interface IconComponentProps {
  style?: React.CSSProperties;
}

// Defines the structure of the global state for the application.
export interface GlobalState {
  isAuthenticated: boolean;                // Flag indicating if the user is authenticated.
  packageType: PackageType;                // Current package type of the user.
  role: RoleType;                          // Current role of the user.
  features: string[];                      // List of active features based on the user's access.
  controls: ControlConfig[];               // Active controls available to the user.
  selectedIcon: React.ComponentType<IconComponentProps> | null; // Currently selected icon component.
  selectedBackground: string;              // Currently selected background color.
  selectedIconSize: number;                // Currently selected icon size.
}

// Enumerates types of actions in the global state management.
export type GlobalAction =
  | { type: 'SET_ICON'; payload: React.ComponentType }
  | { type: 'SET_BACKGROUND'; payload: string }
  | { type: 'SET_ICON_SIZE'; payload: number }
  | { type: 'SET_AUTHENTICATION'; payload: boolean }
  | { type: 'SET_PACKAGE_TYPE'; payload: PackageType }
  | { type: 'SET_ROLE'; payload: RoleType }
  | { type: 'SET_FEATURES'; payload: FeatureKey[] }
  | { type: 'SET_CONTROLS'; payload: ControlConfig[] };
