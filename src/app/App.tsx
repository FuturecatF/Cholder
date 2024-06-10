import cl from 'classnames';

import cls from './App.module.scss';
import { useTheme } from './provider/ThemeProvider';

function App() {
  const { theme } = useTheme();
  return <div className={cl(cls.test, theme)}>Привет!</div>;
}

export default App;
