import { render } from '@testing-library/react';

import LivePreview from './LivePreview';

describe('LivePreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LivePreview />);
    expect(baseElement).toBeTruthy();
  });
});
