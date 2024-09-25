import { render } from '@testing-library/react';

import ImageUploader from './ImageUploader';

describe('ImageUploader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ImageUploader />);
    expect(baseElement).toBeTruthy();
  });
});
