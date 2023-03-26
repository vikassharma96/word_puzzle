import React from 'react';
import {Text, TextProps} from 'react-native';
import {useThemeColor} from '../../hooks/useTheme';
import defaultStyles from '../../styles/defaultStyles';

type AppTextProps = {
  color?: string;
} & TextProps;

const AppText = ({color, style, ...props}: AppTextProps) => {
  const defaultColor = useThemeColor('text');
  return (
    <Text
      style={[defaultStyles.text, {color: color ?? defaultColor}, style]}
      {...props}
    />
  );
};

export default AppText;
