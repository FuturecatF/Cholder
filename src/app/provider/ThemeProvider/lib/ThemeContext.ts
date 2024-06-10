import { createContext } from 'react';

import { ThemeContextProps } from './types.ts';

export const Theme = {
  LIGHT: 'app_light_theme',
  DARK: 'app_dark_theme',
} as const;

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
