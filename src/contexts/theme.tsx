import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  ReactNode,
} from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: () => {},
});

type Props = {
  children?: ReactNode;
};

const ThemeProvider = ({children}: Props) => {
  const [theme, setTheme] = useState<Theme>('light');

  const value = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

const withTheme = (Component: any) => {
  return (props: any) => {
    const {theme, setTheme} = useContext(ThemeContext);
    return <Component {...props} theme={theme} setTheme={setTheme} />;
  };
};

export {ThemeContext, ThemeProvider, withTheme};
