import React, {PropsWithChildren} from 'react';

import Footer from '@/components/patials/footer';
import Header from '@/components/patials/header';

interface IDefaultLayoutProps {
  className?: string;
}

export default function LayoutDefault({children}: PropsWithChildren<IDefaultLayoutProps>) {
  return (
    <div className="flex h-full w-full flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
