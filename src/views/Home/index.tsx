import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ListRenderItemInfo} from 'react-native';
import categoriesApi from '../../api/categoriesApi';
import AppText from '../../components/AppText';
import Button from '../../components/Button';
import CategoryItem from '../../components/CategoryItem';
import Label from '../../components/Label';
import Loader from '../../components/Loader';
import useApi from '../../hooks/useApi';
import {Routes} from '../../navigation/routes';
import {HomeScreenProps} from '../../navigation/types';
import {ICategory} from '../../types/category.types';
import {showAlert} from '../../utils/alertUtils';
import {
  API_ERROR_MSG,
  ERROR,
  ERROR_MSG,
  LEADERS_BOARD,
  RETRY,
  START,
  WORDS_PUZZLE,
} from '../../utils/constants';
import styles from './styles';

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>('');
  const getCategoriesApi = useApi(categoriesApi);

  useEffect(() => {
    getCategoriesApi.request();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onStartGame = () => {
    if (!selectedCategoryId) {
      showAlert({
        title: ERROR,
        message: ERROR_MSG,
      });
      return;
    }
    navigation.navigate(Routes.PUZZLE, {
      categoryId: selectedCategoryId,
    });
  };

  const onLeadersBoard = () => navigation.navigate(Routes.LEADERS_BOARD);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<ICategory>) => (
      <CategoryItem
        category={item}
        selectedCategoryId={selectedCategoryId}
        setSelectedCategoryId={setSelectedCategoryId}
      />
    ),
    [selectedCategoryId],
  );

  const keyExtractor = useCallback((category: ICategory) => category.id, []);

  return (
    <>
      <Loader visible={getCategoriesApi.loading} />
      <View style={styles.container}>
        <Label labelStyle={styles.title} title={WORDS_PUZZLE} />
        <View style={styles.categories}>
          {getCategoriesApi.error && (
            <>
              <AppText style={styles.errorText}>{API_ERROR_MSG}</AppText>
              <Button title={RETRY} onPress={getCategoriesApi.request} />
            </>
          )}
          <FlatList
            data={getCategoriesApi.data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Button style={styles.start} title={START} onPress={onStartGame} />
          <Button
            style={styles.leadersBoard}
            title={LEADERS_BOARD}
            onPress={onLeadersBoard}
          />
        </View>
      </View>
    </>
  );
};

export default HomeScreen;
