export interface GlobalState {
    selectedIcon: React.ComponentType | null;
    selectedBackground: string;
    selectedIconSize: number;
  }
  
export type GlobalAction =
| { type: 'SET_ICON'; payload: React.ComponentType }
| { type: 'SET_BACKGROUND'; payload: string }
| { type: 'SET_ICON_SIZE'; payload: number };
  
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