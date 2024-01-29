import React, {PropsWithChildren} from 'react';

import styles from './style.module.scss';

interface IAuthLayoutProps {
  className?: string;
}

export default function LayoutAuth({children, className}: PropsWithChildren<IAuthLayoutProps>) {
  return (
    <div className={`${styles['layout-auth']} ${className}`}>
      <main>{children}</main>
    </div>
  );
}
