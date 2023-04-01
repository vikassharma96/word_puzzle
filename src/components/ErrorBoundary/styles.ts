import {StyleSheet} from 'react-native';
import {fontFamily, fontSizes} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    marginBottom: '3%',
    fontSize: fontSizes.fontSize_18,
    fontFamily: fontFamily.semiBold,
  },
});

export default styles;
