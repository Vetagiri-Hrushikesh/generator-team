import IconSizeControl from '../components/controls/IconSizeControl';
import BackgroundColorControl from '../components/controls/BackgroundColor';
import { ControlAccessConfig } from '../types';

export const controlAccessConfig: ControlAccessConfig = {
    common: {
      admin: {
        premium: [
        ],
      },
    },
    ClipartSelector: {
      admin: {
        premium: [
          {
            type: 'slider',
            label: 'Icon Size',
            component: IconSizeControl,
            min: 80,
            max: 300,
            value: 100,
            actionType: 'SET_ICON_SIZE'
          },
          {
            type: 'color',
            label: 'Background Color',
            component: BackgroundColorControl,
            value: '#ffffff',
            actionType: 'SET_BACKGROUND'
          },
        ],
      },
    },
    image: { 
      admin: {
        premium: [],
      },
    },
};

