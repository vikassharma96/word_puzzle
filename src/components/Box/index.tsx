import React, {useState} from 'react';
import {TouchableHighlight} from 'react-native';
import AppText from '../AppText';
import styles from './styles';

type IBoxProps = {
  text: string;
};

const Box = ({text}: IBoxProps) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  return (
    <TouchableHighlight
      testID="box"
      style={[styles.box, isSelected && styles.selectedBox]}
      onPress={() => {
        if (!isSelected) {
          setIsSelected(true);
        }
      }}>
      <AppText style={styles.letter}>{!isSelected && text}</AppText>
    </TouchableHighlight>
  );
};

export default Box;
