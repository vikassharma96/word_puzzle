import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import defaultStyles from '../../styles/defaultStyles';

const styles = StyleSheet.create({
  container: {
    marginVertical: '3%',
    alignItems: 'center',
    alignSelf: 'center',
    minWidth: '50%',
    ...defaultStyles.button,
  },
  selected: {
    backgroundColor: colors.light.button,
  },
});

export default styles;
