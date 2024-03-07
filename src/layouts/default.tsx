import React, {PropsWithChildren} from 'react';

import Footer from '@/components/patials/footer';
import DrawerNavbar from '@/components/patials/header/drawer-navbar';

interface IDefaultLayoutProps {
  className?: string;
}

export default function LayoutDefault({children}: PropsWithChildren<IDefaultLayoutProps>) {
  return (
    <div className="flex h-full flex-col">
      <DrawerNavbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
