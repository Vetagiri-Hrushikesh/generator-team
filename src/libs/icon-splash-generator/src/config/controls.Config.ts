import ColorControl from '../components/controls/ColorControl';
import SliderControl from '../components/controls/SliderControl';
import { ControlConfig } from '../types';
import { SET_BACKGROUND, SET_ICON_SIZE } from '../utils/actionTypes';

  
export const getControlsConfig = (state: any, dispatch: any): ControlConfig[] => [
  {
    type: 'color',
    label: 'Background Color',
    value: state.selectedBackground,
    onChange: (value: string) => dispatch({ type: SET_BACKGROUND, payload: value }),
    component: ColorControl,
  },
  {
    type: 'slider',
    label: 'Icon Size',
    value: state.selectedIconSize || 150,
    min: 50,
    max: 300,
    onChange: (value: number) => dispatch({ type: SET_ICON_SIZE, payload: value }),
    component: SliderControl,
  },
];
