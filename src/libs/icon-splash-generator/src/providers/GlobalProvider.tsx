import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react';
import { GlobalState, GlobalAction } from '../types';
import { SET_ICON, SET_BACKGROUND, SET_ICON_SIZE, SET_AUTHENTICATION, SET_PACKAGE_TYPE, SET_ROLE, SET_FEATURES, SET_CONTROLS } from '../utils/actionTypes';
import { getAllowedFeatures, getAllowedControls } from '../config/featureControlMapping';


const defaultState: GlobalState = {
  selectedIcon: null,
  selectedBackground: '#ffffff',
  selectedIconSize: 150,
  isAuthenticated: false,
  packageType: 'basic',
  role: 'user',
  features: [],
  controls: []
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
    case SET_FEATURES:
      return { ...state, features: action.payload };
    case SET_CONTROLS:
      return { ...state, controls: action.payload };
    default:
      return state;
  }
};


const GlobalContext = createContext<{ state: GlobalState; dispatch: React.Dispatch<GlobalAction>; } | null>(null);

export const GlobalProvider = ({ children, isAuthenticated, packageType, role }: { children: ReactNode, isAuthenticated: boolean, packageType: 'basic' | 'premium', role: 'user' | 'admin' }) => {
  const [state, dispatch] = useReducer(globalReducer, { ...defaultState, isAuthenticated, packageType, role });

  useEffect(() => {
    if (!isAuthenticated) {
      return;
    }
    
    const allowedFeatures = getAllowedFeatures(packageType, role);
    const allowedControls = getAllowedControls(packageType, role, state, dispatch);
  
    dispatch({ type: 'SET_FEATURES', payload: allowedFeatures });
    dispatch({ type: 'SET_CONTROLS', payload: allowedControls });
  }, [packageType, role, isAuthenticated, dispatch]);
  
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
