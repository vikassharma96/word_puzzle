import React, {FC, ReactNode} from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

type IProps = {children?: ReactNode};

const Screen: FC<IProps> = props => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
        {props.children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Screen;
