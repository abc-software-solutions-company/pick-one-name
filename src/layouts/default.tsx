import React from 'react';

import SiteLayout from '@/components/layouts/layout';

type Props = {
  className?: string;
};

export default function LayoutDefault({
  children
}: React.PropsWithChildren<Props>) {
  return <SiteLayout>{children}</SiteLayout>;
}
