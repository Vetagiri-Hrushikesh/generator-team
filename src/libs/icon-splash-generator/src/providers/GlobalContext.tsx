import React, { createContext, useContext, useReducer, ReactNode, useEffect, useMemo } from 'react';
import { globalReducer, defaultState } from './reducer';
import { getAllowedFeatures } from '../handlers/featureHandlers';
import { getAllowedControls } from '../handlers/controlHandlers';
import { GlobalState, GlobalAction } from '../types';

// Create a context for holding global state and a dispatch method.
export const GlobalContext = createContext<{ state: GlobalState; dispatch: React.Dispatch<GlobalAction> } | null>(null);

/**
 * Provides a global state context to wrap around the top-level component of the application.
 * This allows any child component to access and modify the global state as needed.
 * 
 * @param {ReactNode} children - The child components or elements to be rendered within this provider.
 * @param {boolean} isAuthenticated - Flag to indicate if the user is authenticated.
 * @param {'basic' | 'premium'} packageType - Type of the user's subscription package.
 * @param {'user' | 'admin'} role - The role of the user within the application.
 * @returns The context provider component.
 */
export const GlobalProvider = ({ children, isAuthenticated, packageType, role }: { children: ReactNode, isAuthenticated: boolean, packageType: 'basic' | 'premium', role: 'user' | 'admin' }) => {
  const [state, dispatch] = useReducer(globalReducer, { ...defaultState, isAuthenticated, packageType, role });

  useEffect(() => {
    // Prevent any actions if the user is not authenticated.
    if (!isAuthenticated) return;
  }, [packageType, role, isAuthenticated, state, dispatch]);

  // Memoize the context value to prevent unnecessary re-renders.
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  // Provide the context value to the component subtree.
  return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
};

/**
 * Custom hook to access the global state and dispatch function from anywhere within the component tree.
 * This hook simplifies accessing the global state and the dispatch method to modify it.
 * 
 * @throws Will throw an error if used outside of the GlobalProvider scope.
 * @returns The global state and dispatch function.
 */
export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalProvider');
  }
  return context;
};