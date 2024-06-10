import { useContext } from 'react';

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
import { ThemeType } from './types';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: ThemeType;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    let newTheme: ThemeType;
    switch (true) {
      case theme === Theme.DARK: {
        newTheme = Theme.LIGHT;
        break;
      }
      case theme === Theme.LIGHT: {
        newTheme = Theme.DARK;
        break;
      }

      default: {
        newTheme = Theme.DARK;
      }
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.DARK, toggleTheme };
};
