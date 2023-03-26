import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  overlay: {
    zIndex: 1,
    height: '100%',
    width: '100%',
    opacity: 0.8,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: colors.default.background,
  },
});

export default styles;
