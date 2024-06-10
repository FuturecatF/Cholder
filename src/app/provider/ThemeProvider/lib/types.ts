import { Theme } from './ThemeContext.ts';

export type ThemeType = ValueOf<typeof Theme>;

export interface ThemeContextProps {
  theme?: ThemeType;
  setTheme?: (theme: ThemeType) => void;
}
