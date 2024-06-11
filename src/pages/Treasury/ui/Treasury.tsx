import { memo } from 'react';

import { Notifications } from '../../../widgets/Notifications/ui/Notifications.tsx';
import { UserCard } from '../../../widgets/UserCard/ui/UserCard/UserCard.tsx';

import cls from './Treasury.module.scss';

export const Treasury = memo(function Treasury() {
  return (
    <div className={cls.treasury}>
      <div className={cls.header}>
        <UserCard />
        <Notifications />
      </div>
      <span className={cls.topRightHighlight} />
      <span className={cls.bottomLeftHighlight} />
      <span className={cls.bottomRightHighlight} />
    </div>
  );
});
