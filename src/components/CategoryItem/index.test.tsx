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
  const renderComponent = (selectedCategoryId?: string) => {
    return (
      <CategoryItem
        category={cateogry}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={selectedCatIdMock}
      />
    );
  };

  it('should match snapshots', () => {
    const componentTree = renderer.create(renderComponent()).toJSON();
    expect(componentTree).toMatchSnapshot();
  });

  it('should be able to change background if selected', () => {
    const {getByTestId} = render(renderComponent('123'));
    const element = getByTestId('item');
    expect(element).toBeDefined();
  });

  it('should be able to click on the item', () => {
    const {getByTestId} = render(renderComponent());
    const element = getByTestId('item');
    expect(element).toBeDefined();
    fireEvent.press(element);
    expect(selectedCatIdMock).toHaveBeenCalled();
  });
});
