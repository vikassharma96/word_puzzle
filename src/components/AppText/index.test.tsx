import React from 'react';
import renderer from 'react-test-renderer';
import AppText from '.';
import {WORD_PUZZLE_TEXT} from '../../utils/constants';

describe('@components/AppText', () => {
  const component = <AppText>{WORD_PUZZLE_TEXT}</AppText>;

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });
});
