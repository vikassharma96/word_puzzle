import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontFamily, fontSizes} from '../../styles/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.default.background,
  },
  emptyContainer: {
    marginTop: '10%',
    alignSelf: 'center',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSizes.fontSize_20,
    color: colors.light.red,
  },
  itemContainer: {
    flexDirection: 'row',
    marginHorizontal: '5%',
    paddingVertical: '2%',
    borderBottomWidth: 1,
    paddingHorizontal: '3%',
    justifyContent: 'space-between',
    borderBottomColor: colors.light.green,
  },
});

export default styles;
