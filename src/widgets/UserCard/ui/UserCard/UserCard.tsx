import { memo } from 'react';

import diamond from 'src/shared/assets/icons/diamond.png';
import holderImage from 'src/shared/assets/icons/holder.png';
import GlowSVG from 'src/shared/assets/icons/glow.svg?react';

import cls from './UserCard.module.scss';

export const UserCard = memo(function UserCard() {
  return (
    <div className={cls.userCard}>
      <img className={cls.holderImage} src={holderImage} alt={'holder'} draggable={false} />
      <div className={cls.content}>
        <div className={cls.contentWrapper}>
          <div className={cls.titleWrapper}>
            <h3 className={cls.title}>{'username'}</h3>
            <div className={cls.holderInfo}>
              <p className={cls.subtitle}>{'holders-title'}</p>
              <button className={cls.infoButton}>i</button>
            </div>
          </div>
        </div>
      </div>
      <div className={cls.diamondWrapper}>
        <img className={cls.diamondIcon} src={diamond} alt={'diamond'} draggable={false} />
        <GlowSVG className={cls.glowIcon} />
      </div>
    </div>
  );
});
