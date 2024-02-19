import LayoutDefault from '@/layouts/default';

import RandomWheel from '@/components/random-wheel';

export default function PageWheel() {
  return (
    <div className={'h-full w-full grow flex-col p-5 lg:px-[50px] 3xl:px-[100px] 3xl:py-16'}>
      <RandomWheel />
    </div>
  );
}

PageWheel.Layout = LayoutDefault;
