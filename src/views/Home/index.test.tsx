import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '.';
import {Routes} from '../../navigation/routes';
import {LEADERS_BOARD} from '../../utils/constants';
import * as hooks from '../../hooks/useApi';

describe('views/Home', () => {
  const mockNavigation = {
    navigate: jest.fn(),
  };
  const mockCategories = () => [
    {
      id: '8f6aba43-f445-4449',
      name: 'Cities',
    },
    {
      id: '01f4185b-18e6-4ed5',
      name: 'Food',
    },
  ];
  const component = <HomeScreen navigation={mockNavigation} />;
  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('should be able to navigate to leadersboard screen', () => {
    const {getByText} = render(component);
    const leadersBoardBtn = getByText(LEADERS_BOARD);
    expect(leadersBoardBtn).toBeDefined();
    fireEvent.press(leadersBoardBtn);
    expect(mockNavigation.navigate).toBeCalledWith(Routes.LEADERS_BOARD);
  });

  it.skip('shouble be able to render categories', () => {
    jest.spyOn(hooks, 'useApi').mockImplementation(() => ({
      data: [],
      error: false,
      loading: false,
      request: mockCategories,
    }));
    const {getByText} = render(component);
    expect(getByText('Cities')).toBeDefined();
  });
});
