import React from 'react';
import {render} from '@testing-library/react-native';
import Button from '../../components/Button';
import {START} from '../../utils/constants';
import {ThemeProvider} from '../theme';

describe('hooks/useTheme', () => {
  const component = <Button title={START} />;
  it('should be able to use ThemeProvider', () => {
    const button = render(component, {wrapper: ThemeProvider});
    expect(button).toBeDefined();
  });
});
