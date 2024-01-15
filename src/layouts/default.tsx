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
      <main className="relative">
        <div className="absolute left-[10%] top-[20%] h-[403px] w-[403px] rounded-full bg-teal-500 blur-[250px]" />
        <div className="absolute right-[7%] top-[10%] h-[303px] w-[303px] rounded-full bg-teal-300 blur-[250px]" />
        {children}
      </main>
      <Footer />
    </div>
  );
}
