import {render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '.';

describe('@components/Loader', () => {
  const component = <Loader visible={true} />;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('should be able to hide the loader', () => {
    const element = render(<Loader />).toJSON();
    expect(element).toBeNull();
  });
});
