import RandomNumber from '@/components/random-number';
import LayoutDefault from '@/layouts/default';

export default function PageNumber() {
  return (
    <div className={'h-full grow flex-col px-[50px] py-8 2xl:px-[100px] 2xl:py-16'}>
      <RandomNumber />
    </div>
  );
}

PageNumber.Layout = LayoutDefault;
