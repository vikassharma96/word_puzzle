import React, {useCallback, useContext, useMemo} from 'react';
import {View, FlatList, ListRenderItemInfo} from 'react-native';
import AppText from '../../components/AppText';
import {UsersContext} from '../../contexts/usersData';
import {NO_DATA_AVAILABLE} from '../../utils/constants';
import styles from './styles';

const LeadersBoardScreen = () => {
  const {users} = useContext(UsersContext);

  const sortedUsers = useMemo(() => {
    return users.sort((u1, u2) =>
      u1.totalScore < u2.totalScore
        ? 1
        : u1.totalScore > u2.totalScore
        ? -1
        : 0,
    );
  }, [users]);

  const keyExtractor = useCallback((item: any) => item.name, []);

  const renderItem = useCallback(({item}: ListRenderItemInfo<any>) => {
    return (
      <View style={styles.itemContainer}>
        <AppText>{item.name}</AppText>
        <AppText>{item.totalScore}</AppText>
      </View>
    );
  }, []);

  const renderEmptyComponent = () => (
    <AppText style={styles.emptyContainer}>{NO_DATA_AVAILABLE}</AppText>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={sortedUsers}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        ListEmptyComponent={renderEmptyComponent}
      />
    </View>
  );
};

export default LeadersBoardScreen;
