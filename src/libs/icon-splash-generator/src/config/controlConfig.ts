// config/controlConfig.ts

import SliderControl from '../components/controls/IconSizeControl';
import ColorControl from '../components/controls/BackgroundColor';
import { ControlConfig, GlobalState } from '../types';
import { SET_BACKGROUND, SET_ICON_SIZE } from '../utils/actionTypes';

/**
 * Generates a list of controls available to a given role and package type.
 *
 * @param {GlobalState} state - The current state of the application.
 * @param {React.Dispatch<any>} dispatch - The dispatch function to update state.
 * @returns {ControlConfig[]} - Array of control configurations allowed for the user.
 */
export const generateControls = (state: GlobalState, dispatch: React.Dispatch<any>): ControlConfig[] => {
  return [
    {
      type: 'slider',
      label: 'Icon Size',
      value: state.selectedIconSize,
      onChange: (newValue: number) => dispatch({ type: SET_ICON_SIZE, payload: newValue }),
      component: SliderControl,
      min: 50,
      max: 300,
    },
    {
      type: 'color',
      label: 'Background Color',
      value: state.selectedBackground,
      onChange: (newValue: string) => dispatch({ type: SET_BACKGROUND, payload: newValue }),
      component: ColorControl,
    }
  ];
};
