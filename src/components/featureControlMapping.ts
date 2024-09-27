import { ControlConfig, PackageType, RoleType, FeatureKey, RoleBasedAccess, GlobalState } from '../types';
import SliderControl from '../components/controls/IconSizeControl';
import ColorControl from '../components/controls/BackgroundColor';
import { SET_BACKGROUND, SET_ICON_SIZE } from '../utils/actionTypes';
import { useGlobalState } from '../providers/GlobalContext';

const featureAccessConfig: { [key in FeatureKey]: RoleBasedAccess } = {
  ClipartSelector: {
    user: { premium: true, basic: true },
    admin: { premium: true, basic: true },
  },
  ImageUploader: {
    user: { premium: true, basic: false },
    admin: { premium: true, basic: true },
  }
};

export const getAllowedFeatures = (packageType: PackageType, role: RoleType): FeatureKey[] => {
  return Object.keys(featureAccessConfig)
    .filter((feature) => featureAccessConfig[feature as FeatureKey][role][packageType]) as FeatureKey[];
};

export const getAllowedControls = (
  packageType: PackageType,
  role: RoleType,
  state: GlobalState,
  dispatch: React.Dispatch<any>
): ControlConfig[] => {
  const controls: ControlConfig[] = [];

  if (role === 'admin' || packageType === 'premium') {
    controls.push({
      type: 'slider',
      label: 'Icon Size',
      value: state.selectedIconSize,
      onChange: (newValue: number) => dispatch({ type: SET_ICON_SIZE, payload: newValue }),
      component: SliderControl,
      min: 50,
      max: 300,
    });
    controls.push({
      type: 'color',
      label: 'Background Color',
      value: state.selectedBackground,
      onChange: (newValue: string) => dispatch({ type: SET_BACKGROUND, payload: newValue }),
      component: ColorControl,
    });
  }

  return controls;
};
