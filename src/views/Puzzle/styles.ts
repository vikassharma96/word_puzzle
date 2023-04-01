import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {fontFamily, fontSizes} from '../../styles/fonts';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    height: '90%',
  },
  errorText: {
    alignSelf: 'center',
    marginTop: '12%',
    marginBottom: '2%',
  },
  itemStyle: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '4%',
    paddingHorizontal: 20,
  },
  boxContainer: {
    marginTop: '1%',
    alignItems: 'center',
  },
  box: {
    width: 40,
    height: 40,
    alignItems: 'center',
    margin: '4%',
    justifyContent: 'center',
    backgroundColor: colors.light.lightGray,
  },
  selectedBox: {
    backgroundColor: '#aaa',
  },
  letter: {
    textAlign: 'center',
  },
  activeButton: {
    marginBottom: '8%',
  },
  disableButton: {
    marginBottom: '8%',
    backgroundColor: colors.default.lightGray,
  },
  resultContainer: {
    flex: 0.9,
    justifyContent: 'center',
  },
  resultText: {
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginBottom: '2%',
    fontFamily: fontFamily.semiBold,
    fontSize: fontSizes.fontSize_17,
    color: colors.light.green,
  },
  resultErrorText: {
    color: colors.light.red,
  },
  pointsText: {
    color: colors.light.green,
    fontFamily: fontFamily.semiBold,
    fontSize: fontSizes.fontSize_18,
    marginBottom: '6%',
  },
  descriptionText: {
    textAlign: 'center',
  },
  complexityText: {
    fontSize: 11,
    color: 'green',
    textAlignVertical: 'center',
    textDecorationLine: 'underline',
    textAlign: 'center',
  },
});

export default styles;
