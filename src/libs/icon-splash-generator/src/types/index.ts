export interface GlobalState {
  selectedIcon: React.ComponentType | null;
  selectedBackground: string;
  selectedIconSize: number;
  isAuthenticated: boolean;
  packageType: 'basic' | 'premium';
  role: 'user' | 'admin';
}

export type GlobalAction =
  | { type: 'SET_ICON'; payload: React.ComponentType }
  | { type: 'SET_BACKGROUND'; payload: string }
  | { type: 'SET_ICON_SIZE'; payload: number }
  | { type: 'SET_AUTHENTICATION'; payload: boolean }
  | { type: 'SET_PACKAGE_TYPE'; payload: 'basic' | 'premium' }
  | { type: 'SET_ROLE'; payload: 'user' | 'admin' };

interface ColorControlConfig {
  type: 'color';
  label: string;
  value: string;
  onChange: (value: string) => void;
  component: React.FC<any>;
}

interface SliderControlConfig {
  type: 'slider';
  label: string;
  value: number;
  onChange: (value: number) => void;
  component: React.FC<any>;
  min: number;
  max: number;
}

export type ControlConfig = ColorControlConfig | SliderControlConfig;