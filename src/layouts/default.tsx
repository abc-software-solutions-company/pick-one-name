import React, {PropsWithChildren} from 'react';

import Footer from '@/components/patials/footer-old';
import Header from '@/components/patials/header';

interface IDefaultLayoutProps {
  className?: string;
}

export default function LayoutDefault({children}: PropsWithChildren<IDefaultLayoutProps>) {
  return (
    <div className="flex h-full flex-col justify-between">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
