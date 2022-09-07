import React from 'react';

import Footer from './footer';
import Menu from './menu';
import TopBar from './top-bar';

export default function SiteLayout({
  children
}: React.PropsWithChildren<Record<string, unknown>>) {
  return (
    <>
      <TopBar />
      <Menu />
      {children}
      <Footer />
    </>
  );
}
