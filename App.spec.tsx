import React from 'react';
import renderer, { act, ReactTestRendererJSON } from 'react-test-renderer';

import App from './App';

describe('<App />', () => {
  it('has 1 child', async () => {
    let wrapper;
    await act(async () => {
      wrapper = renderer.create(<App />);
    });
    if (!wrapper) {
      throw new Error('wrapper should exist');
    }
    const tree = wrapper.toJSON() as ReactTestRendererJSON;
    expect(tree?.children?.length).toBe(1);
  });
});
