import { render } from '@testing-library/react';

import ClipArtGenerator from './ClipArtGenerator';

describe('ClipArtGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClipArtGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
