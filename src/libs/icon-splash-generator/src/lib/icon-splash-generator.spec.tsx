import { render } from '@testing-library/react';

import IconSplashGenerator from './icon-splash-generator';

describe('IconSplashGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<IconSplashGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
