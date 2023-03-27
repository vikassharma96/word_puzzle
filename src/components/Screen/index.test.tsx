import React from 'react';
import renderer from 'react-test-renderer';
import Screen from '.';

describe('@components/Screen', () => {
  const component = <Screen>{<></>}</Screen>;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
