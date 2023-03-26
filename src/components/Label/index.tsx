import React from 'react';
import {View, ViewStyle} from 'react-native';
import {useThemeColor} from '../../hooks/useTheme';
import defaultStyles from '../../styles/defaultStyles';
import AppText from '../AppText';

export type LabelProps = {
  title: string;
  backgroundColor?: string;
  labelStyle: ViewStyle;
} & ViewStyle;

const Label = ({title, labelStyle, backgroundColor, ...props}: LabelProps) => {
  const defaultColor = useThemeColor('label');
  return (
    <View
      style={[
        defaultStyles.button,
        {backgroundColor: backgroundColor ?? defaultColor},
        labelStyle,
      ]}
      {...props}>
      <AppText>{title}</AppText>
    </View>
  );
};

export default Label;
