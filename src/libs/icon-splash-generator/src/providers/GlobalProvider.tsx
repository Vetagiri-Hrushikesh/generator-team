import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { GlobalState, GlobalAction } from '../types';
import { SET_ICON, SET_BACKGROUND, SET_ICON_SIZE, SET_AUTHENTICATION, SET_PACKAGE_TYPE, SET_ROLE } from '../utils/actionTypes';

const defaultState: GlobalState = {
  selectedIcon: null,
  selectedBackground: 'transparent',
  selectedIconSize: 150,
  isAuthenticated: false,
  packageType: 'basic',
  role: 'user',
};

const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case SET_ICON:
      return { ...state, selectedIcon: action.payload };
    case SET_BACKGROUND:
      return { ...state, selectedBackground: action.payload };
    case SET_ICON_SIZE:
      return { ...state, selectedIconSize: action.payload };
    case SET_AUTHENTICATION:
      return { ...state, isAuthenticated: action.payload };
    case SET_PACKAGE_TYPE:
      return { ...state, packageType: action.payload };
    case SET_ROLE:
      return { ...state, role: action.payload };
    default:
      return state;
  }
};

const GlobalContext = createContext<{ state: GlobalState; dispatch: React.Dispatch<GlobalAction>; } | null>(null);

export const GlobalProvider = ({ children, isAuthenticated, packageType, role }: { children: ReactNode, isAuthenticated: boolean, packageType: 'basic' | 'premium', role: 'user' | 'admin' }) => {
  const [state, dispatch] = useReducer(globalReducer, { ...defaultState, isAuthenticated, packageType, role });

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) throw new Error('useGlobalState must be used within a GlobalProvider');
  return context;
};
