import React, { createContext, useContext, useReducer } from 'react';

// Define action types as string literals
export const SET_ICON = 'SET_ICON' as const;
export const SET_BACKGROUND = 'SET_BACKGROUND' as const;
export const SET_ICON_SIZE = 'SET_ICON_SIZE' as const;

// Define Global State interface
interface GlobalState {
  selectedIcon: React.ComponentType | null;
  selectedBackground: string;
  selectedIconSize: number;
}

// Initial State
const defaultState: GlobalState = {
  selectedIcon: null,
  selectedBackground: '#ffffff',
  selectedIconSize: 150,
};

// Actions type union
type GlobalAction = 
  | { type: typeof SET_ICON; payload: React.ComponentType }
  | { type: typeof SET_BACKGROUND; payload: string }
  | { type: typeof SET_ICON_SIZE; payload: number };

// Reducer function
const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case SET_ICON:
      return { ...state, selectedIcon: action.payload };
    case SET_BACKGROUND:
      return { ...state, selectedBackground: action.payload };
    case SET_ICON_SIZE:
      return { ...state, selectedIconSize: action.payload };
    default:
      return state;
  }
};

// Create Context
interface GlobalContextProps {
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
}

const GlobalContext = createContext<GlobalContextProps | null>(null);

// GlobalProvider component
export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, defaultState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to use global state
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};
