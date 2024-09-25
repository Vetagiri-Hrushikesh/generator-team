import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { SET_ICON, SET_BACKGROUND, SET_ICON_SIZE } from '../utils/actionTypes';
import { GlobalState, GlobalAction } from '../types';

// Initial state for the global context
const defaultState: GlobalState = {
  selectedIcon: null,
  selectedBackground: '#ffffff',
  selectedIconSize: 150,
};

// Reducer function to manage the global state
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

// Create the global state context
const GlobalContext = createContext<{
  state: GlobalState;
  dispatch: React.Dispatch<GlobalAction>;
} | null>(null);

// GlobalProvider component
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(globalReducer, defaultState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

// Custom hook to access global state
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobalState must be used within a GlobalProvider');
  return context;
};
export {
  SET_ICON_SIZE,
  // Reducer function to manage the global state
  SET_BACKGROUND
};

