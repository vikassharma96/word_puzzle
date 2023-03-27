import React from 'react';
import renderer from 'react-test-renderer';
import Label from '.';
import {NEXT} from '../../utils/constants';

describe('@components/Label', () => {
  const component = <Label title={NEXT} labelStyle={{}} />;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
