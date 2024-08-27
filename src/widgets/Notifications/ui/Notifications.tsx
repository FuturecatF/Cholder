import { memo } from 'react';

import bellIcon from 'src/shared/assets/icons/bell.png';

import cls from './Notifications.module.scss';


export const Notifications = memo(function Notifications() {

  const vibrateHandler = () => {
    (window as any).Telegram.WebApp.HapticFeedback.impactOccurred('soft');
  }

  return (
    <div className={cls.notifications}>
      <button className={cls.button} onClick={vibrateHandler} onTouchStart={vibrateHandler}>
        <img src={bellIcon} alt={'bell'} draggable={false} />
      </button>
      <button className={cls.button} onTouchEnd={vibrateHandler}>
        <img src={bellIcon} alt={'bell'} draggable={false} />
      </button>
      <button className={cls.button} onClick={vibrateHandler}>
        <img src={bellIcon} alt={'bell'} draggable={false} />
      </button>
      <span className={cls.counter}>{3}</span>
    </div>
  );
});
