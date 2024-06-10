import { ReactNode, useMemo, useState } from 'react';

import { ThemeType } from '../lib/types.ts';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

const defaultTheme = (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || Theme.DARK;

interface ThemeProviderProps {
  children: ReactNode;
  initialTheme?: ThemeType;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme || defaultTheme);

  const defaultProps = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme],
  );

  console.log('defaultProps', defaultProps);
  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
