import {useContext} from 'react';
import Colors from '../styles/colors';
import {ThemeContext} from '../contexts/theme';

const useTheme = () => {
  const {theme} = useContext(ThemeContext);
  return Colors[theme];
};

const useThemeColor = (
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) => {
  return useTheme()[colorName];
};

export {useTheme, useThemeColor};
