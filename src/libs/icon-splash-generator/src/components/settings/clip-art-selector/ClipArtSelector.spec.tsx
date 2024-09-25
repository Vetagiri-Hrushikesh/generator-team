import { render } from '@testing-library/react';

import ClipArtGenerator from './ClipArtSelector';

describe('ClipArtGenerator', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClipArtGenerator />);
    expect(baseElement).toBeTruthy();
  });
});
