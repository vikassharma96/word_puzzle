import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.default.background,
  },
  title: {
    marginTop: '4%',
    textAlign: 'center',
    alignSelf: 'center',
  },
  categories: {
    flex: 0.8,
    marginTop: '4%',
    paddingTop: '2%',
    backgroundColor: colors.default.dullGray,
  },
  errorText: {
    alignSelf: 'center',
    marginTop: '12%',
    marginBottom: '2%',
  },
  bottomContainer: {
    zIndex: -1,
    flex: 0.2,
    paddingTop: '3%',
  },
  start: {
    minWidth: '50%',
    alignItems: 'center',
  },
  leadersBoard: {
    marginTop: '2%',
    borderWidth: 0,
    backgroundColor: colors.default.background,
  },
});

export default styles;
