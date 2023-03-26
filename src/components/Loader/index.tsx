import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loader = ({visible = false}) => {
  return (
    <>
      {visible && (
        <View style={styles.overlay}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </>
  );
};

export default Loader;
