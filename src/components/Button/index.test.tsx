import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';
import {NEXT} from '../../utils/constants';

describe('@components/Button', () => {
  const component = <Button title={NEXT} />;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
