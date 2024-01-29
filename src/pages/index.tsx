import RandomNumber from '@/components/random-number';
import LayoutDefault from '@/layouts/default';

export default function PageNumber() {
  return (
    <div className={'h-full w-full grow flex-col px-5 py-8 lg:px-[50px] 3xl:px-[100px] 3xl:py-16'}>
      <RandomNumber />
    </div>
  );
}

PageNumber.Layout = LayoutDefault;
