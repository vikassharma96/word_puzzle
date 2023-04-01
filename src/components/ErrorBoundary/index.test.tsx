import {render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ErrorBoundary from '.';
import {EXIT, SOMETHING_WENT_WRONG, START} from '../../utils/constants';
import AppText from '../AppText';

describe('@components/ErrorBoundary', () => {
  const component = (
    <ErrorBoundary>
      <AppText>{START}</AppText>
    </ErrorBoundary>
  );

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('should be able to handle error', () => {
    const ChildWithError = () => {
      throw new Error('Error thrown!');
    };
    const componentWithError = (
      <ErrorBoundary>
        <ChildWithError />
      </ErrorBoundary>
    );
    const {getByText} = render(componentWithError);

    const errorText = getByText(SOMETHING_WENT_WRONG);
    expect(errorText).toBeDefined();
    const exitBtn = getByText(EXIT);
    expect(exitBtn).toBeDefined();
  });
});
