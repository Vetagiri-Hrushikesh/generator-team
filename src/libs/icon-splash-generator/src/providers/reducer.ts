import { GlobalState, GlobalAction } from '../types';
import * as actionTypes from '../utils/actionTypes';

// Defines the initial state for the global state context.
export const defaultState: GlobalState = {
  selectedIcon: null,                // Holds the currently selected icon component.
  selectedBackground: '#FFF0F0',     // Stores the selected background color, defaulting to white.
  selectedIconSize: 150,             // Sets the initial size for icons.
  isAuthenticated: false,            // Tracks the user's authentication status.
  packageType: 'basic',              // Sets the default package type.
  role: 'user',                      // Assigns the default role for users.
  features: [],                      // An array to hold features enabled for the user.
  controls: []                       // An array to store UI controls available to the user.
};

/**
 * Reducer function to manage state transitions based on dispatched actions.
 * Handles updates to various aspects of the global state like icons, authentication, roles, etc.
 *
 * @param {GlobalState} state - The current state of the application.
 * @param {GlobalAction} action - Action dispatched to modify the state.
 * @returns {GlobalState} - The new state after applying the action.
 */
export const globalReducer = (state: GlobalState, action: GlobalAction): GlobalState => {
  switch (action.type) {
    case actionTypes.SET_ICON:
      // Updates the state with a new icon.
      return { ...state, selectedIcon: action.payload };
    case actionTypes.SET_BACKGROUND:
      // Changes the background color or image in the global state.
      return { ...state, selectedBackground: action.payload };
    case actionTypes.SET_ICON_SIZE:
      // Adjusts the size of the currently selected icon.
      return { ...state, selectedIconSize: action.payload };
    case actionTypes.SET_AUTHENTICATION:
      // Sets the authentication status of the user.
      return { ...state, isAuthenticated: action.payload };
    case actionTypes.SET_PACKAGE_TYPE:
      // Updates the package type (basic or premium) in the global state.
      return { ...state, packageType: action.payload };
    case actionTypes.SET_ROLE:
      // Assigns a new role to the user within the application.
      return { ...state, role: action.payload };
    case actionTypes.SET_FEATURES:
      // Updates the list of features enabled for the user.
      return { ...state, features: action.payload };
    case actionTypes.SET_CONTROLS:
      // Updates the set of UI controls available to the user.
      return { ...state, controls: action.payload };
    default:
      // Returns the current state unchanged if the action type is not recognized.
      return state;
  }
};
