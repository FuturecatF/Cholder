import { Route, Routes } from 'react-router-dom';
import cl from 'classnames';

import { Treasury } from '../pages/Treasury/ui/Treasury.tsx';

import cls from './App.module.scss';
import { useTheme } from './provider/ThemeProvider';

function App() {
  const { theme } = useTheme();
  return (
    <div className={cl(cls.app, theme)}>
      <main className={cls.main}>
        <Routes>
          <Route path={''} element={<Treasury />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
