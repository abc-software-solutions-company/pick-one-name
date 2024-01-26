import React, {PropsWithChildren} from 'react';

import styles from './style.module.scss';

interface IDefaultLayoutProps {
  className?: string;
}

export default function LayoutAuth({children}: PropsWithChildren<IDefaultLayoutProps>) {
  return (
    <div className={styles['layout-auth']}>
      <main>{children}</main>
    </div>
  );
}
