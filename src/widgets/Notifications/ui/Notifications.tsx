import { memo } from 'react';

import bellIcon from 'src/shared/assets/icons/bell.png';

import cls from './Notifications.module.scss';


export const Notifications = memo(function Notifications() {
  return (
    <div className={cls.notifications}>
      <button className={cls.button}>
        <img src={bellIcon} alt={'bell'} draggable={false} />
      </button>
      <span className={cls.counter}>{3}</span>
    </div>
  );
});
