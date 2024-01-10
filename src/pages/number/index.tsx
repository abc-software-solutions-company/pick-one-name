import RandomNumber from '@/components/random-number';
import LayoutDefault from '@/layouts/default';

export default function PageNumber() {
  return (
    <div className={'h-full py-[74px] px-[100px]'}>
      <RandomNumber />
    </div>
  );
}

PageNumber.Layout = LayoutDefault;
