import RandomNumber from '@/components/random-number';
import LayoutDefault from '@/layouts/default';

export default function PageNumber() {
  return (
    <div className={'relative z-10 h-full px-[100px] py-[74px]'}>
      <RandomNumber />
    </div>
  );
}

PageNumber.Layout = LayoutDefault;
