import { ReactNode } from 'react';
import cl from 'classnames';
import classes from './PageLayout.module.scss';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className={cl(classes.pageLayout)}>
    <div className={classes.scrollable}>
      <div className={classes.wrapper}>{children}</div>
    </div>
  </div>
);

export default PageLayout;
