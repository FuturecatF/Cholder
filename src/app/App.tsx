import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import cl from 'classnames';

import { Treasury } from '../pages/Treasury/ui/Treasury.tsx';

import cls from './App.module.scss';
import { useTheme } from './provider/ThemeProvider';
import { About } from '../pages/About/About.tsx';


const tg = (window as any).Telegram.WebApp;
const overflow = 100;
function App() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const backButtonClickHandler = useCallback(() => {
    const currentPath = location.pathname;

    if (currentPath === '/' && tg && tg.BackButton.isVisible) {
      tg.BackButton.hide();
    } else {
      navigate(-1);
    }
  }, [location.pathname, navigate]);

  const handleExpandPage = () => {
    document.body.style.overflowY = 'hidden';
    document.body.style.marginTop = `${overflow}px`;
    document.body.style.height = `${window.innerHeight + overflow}px`;
    //document.body.style.paddingBottom = `${overflow}px`;
    window.scrollTo(0, overflow);
  };

  const handleViewHeight = () => {
    if (!tg.isExpanded) {
      tg.expand();
      setTimeout(() => handleExpandPage(), 0);
    }
  };

  useEffect(() => {
    tg.setHeaderColor('#000000');

    tg.onEvent('viewportChanged', handleViewHeight);
    window.addEventListener('resize', handleExpandPage);

    return () => {
      tg.offEvent('viewportChanged', handleViewHeight);
      window.removeEventListener('resize', handleExpandPage);
    };
  }, []);

  useEffect(() => {
    handleExpandPage();
  }, [location.pathname]);

  useEffect(() => {
    tg.ready();
    tg.setHeaderColor('#000');
    tg.setBackgroundColor('#000');
    tg.expand();
    tg.SettingsButton.show();
  }, []);



 

  useEffect(() => {
    if (tg && !tg.BackButton.isVisible && location.pathname !== '/') {
      tg.BackButton.show();
      tg.BackButton.onClick(backButtonClickHandler);
    } else {
      if (tg && tg.BackButton.isVisible) {
        tg.BackButton.hide();
      }
    }
  }, [location.pathname]);


  return (
    <div className={cl(cls.app, theme)}>

      <main className={cls.main}>
        <Routes>
          <Route path={''} element={<Treasury onClick={handleExpandPage} />} />
          <Route path={'/about'} element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
