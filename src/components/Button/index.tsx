import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useThemeColor} from '../../hooks/useTheme';
import defaultStyles from '../../styles/defaultStyles';
import AppText from '../AppText';

export type ButtonProps = {
  title: string;
  backgroundColor?: string;
} & TouchableOpacityProps;

const Button = ({
  style,
  title,
  disabled,
  backgroundColor,
  ...props
}: ButtonProps) => {
  const defaultColor = useThemeColor('button');
  return (
    <TouchableOpacity
      style={[
        defaultStyles.button,
        {backgroundColor: backgroundColor ?? defaultColor},
        style,
      ]}
      disabled={disabled}
      {...props}>
      <AppText>{title}</AppText>
    </TouchableOpacity>
  );
};

export default Button;
