import {TextStyle, ViewStyle} from 'react-native';
import {fontFamily, fontSizes} from './fonts';

export default {
  textHeading: <TextStyle>{
    fontSize: fontSizes.fontSize_20,
    fontFamily: fontFamily.bold,
  },
  textTitle: <TextStyle>{
    fontSize: fontSizes.fontSize_18,
    fontFamily: fontFamily.semiBold,
    letterSpacing: 1.1,
  },
  text: <TextStyle>{
    fontSize: fontSizes.fontSize_14,
    fontFamily: fontFamily.medium,
  },
  button: <ViewStyle>{
    marginHorizontal: 8,
    borderRadius: 6,
    borderWidth: 1.5,
    paddingVertical: 6,
    paddingHorizontal: 16,
    textAlign: 'center',
    alignSelf: 'center',
  },
};
