import React from 'react';
import Button from '../Button';
import styles from './styles';
import colors from '../../styles/colors';
import {useThemeColor} from '../../hooks/useTheme';
import {ICategory} from '../../types/category.types';

type CategoryItemProps = {
  category: ICategory;
  selectedCategoryId?: string;
  setSelectedCategoryId: (categoryId: string) => void;
};

const CategoryItem = ({
  category,
  selectedCategoryId,
  setSelectedCategoryId,
}: CategoryItemProps) => {
  const {id: categoryId, name: categoryName} = category;
  const selectedBackgroundColor = useThemeColor('button');

  const handleOnCategory = () => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <Button
      title={categoryName}
      style={styles.container}
      testID={'item'}
      onPress={handleOnCategory}
      backgroundColor={
        selectedCategoryId === categoryId
          ? selectedBackgroundColor
          : colors.default.background
      }
    />
  );
};

export default CategoryItem;
