import React from 'react';
import CategoryItem from '.';
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
import {ICategory} from '../../types/category.types';

describe('@components/CategoryItem', () => {
  const cateogry: ICategory = {
    id: '123',
    name: 'Food',
  };
  const selectedCatIdMock = jest.fn();
  const component = (
    <CategoryItem
      category={cateogry}
      setSelectedCategoryId={selectedCatIdMock}
    />
  );

  it('should match snapshots', () => {
    const componentTree = renderer.create(component).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('should be able to click on the item', () => {
    const {getByTestId} = render(component);
    const element = getByTestId('item');
    expect(element).toBeTruthy();
    fireEvent.press(element);
    expect(selectedCatIdMock).toHaveBeenCalled();
  });
});
