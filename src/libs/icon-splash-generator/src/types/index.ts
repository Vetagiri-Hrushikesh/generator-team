export interface GlobalState {
    selectedIcon: React.ComponentType | null;
    selectedBackground: string;
    selectedIconSize: number;
  }
  
export type GlobalAction =
| { type: 'SET_ICON'; payload: React.ComponentType }
| { type: 'SET_BACKGROUND'; payload: string }
| { type: 'SET_ICON_SIZE'; payload: number };
  