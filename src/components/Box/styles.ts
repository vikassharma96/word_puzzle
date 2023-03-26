import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    backgroundColor: colors.light.lightGray,
    margin: '4%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedBox: {
    backgroundColor: '#aaa',
  },
  letter: {
    textAlign: 'center',
  },
});

export default styles;
