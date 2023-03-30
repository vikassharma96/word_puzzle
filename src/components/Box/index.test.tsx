import React from 'react';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import Box from '.';
import {WORD_PUZZLE_TEXT} from '../../utils/constants';

describe('@components/Box', () => {
  const component = <Box text={WORD_PUZZLE_TEXT} />;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('should be able to click the box', () => {
    const {getByTestId} = render(component);
    const box = getByTestId('box');
    expect(box).toBeDefined();
    fireEvent.press(box);
  });
});
