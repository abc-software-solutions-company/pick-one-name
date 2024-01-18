import RandomNumber from '@/components/random-number';
import LayoutDefault from '@/layouts/default';

export default function PageNumber() {
  return (
    <div className={'h-full grow flex-col items-stretch px-[100px] py-16'}>
      <RandomNumber />
    </div>
  );
}

PageNumber.Layout = LayoutDefault;
