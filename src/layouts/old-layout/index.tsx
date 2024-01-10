import React, {PropsWithChildren} from 'react';

import FooterOld from '@/components/patials/footer-old';
import HeaderOld from '@/components/patials/header-old';

import styles from './style.module.scss';

interface IDefaultLayoutProps {
  className?: string;
}

export default function LayoutWheel({children}: PropsWithChildren<IDefaultLayoutProps>) {
  return (
    <div className={styles['layout-old']}>
      <HeaderOld />
      <main>{children}</main>
      <FooterOld />
    </div>
  );
}
