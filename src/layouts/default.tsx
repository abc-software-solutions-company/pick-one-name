import React, {PropsWithChildren} from 'react';

import Footer from '@/components/patials/footer-old';
import Header from '@/components/patials/header';

import styles from './style.module.scss';

interface IDefaultLayoutProps {
  className?: string;
}

export default function LayoutDefault({children}: PropsWithChildren<IDefaultLayoutProps>) {
  return (
    <div className={styles['layout-default']}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
