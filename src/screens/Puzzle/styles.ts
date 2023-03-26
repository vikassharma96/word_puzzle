import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    width: '100%',
    height: '90%',
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
    marginTop: '2%',
    alignItems: 'center',
  },
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
  activeButton: {
    marginBottom: '8%',
  },
  disableButton: {
    marginBottom: '8%',
    backgroundColor: 'grey',
  },
  resultContainer: {
    flex: 1,
    alignItems: 'stretch',
  },
  resultText: {
    flex: 0.4,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    marginBottom: '2%',
  },
});

export default styles;
